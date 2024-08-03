const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const gmailEmail = functions.config().email.user;
const gmailPassword = functions.config().email.pass;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendSignupConfirmation = functions.firestore
    .document("eventRSVPs/{docId}")
    .onCreate((snap, context) => {
      const data = snap.data();
      const emailId = context.params.docId; // Use the document ID as the email ID

      const mailOptions = {
        from: gmailEmail,
        to: data.email,
        subject: "Open Kommunity - Event Signup Confirmation",
        html:
        `Hello ${data.name},<br><br>` +
        `Thank you for signing up for our community event.<br><br>` +
        `We look forward to hosting you!<br><br>` +
        `Best regards,<br>Open Kommunity Team<br><br>` +
        `<img src="${functions.config().project.url}/trackEmailOpen?emailId=${emailId}" width="1" height="1" />`,
      };
      return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error sending email:", error);
        } else {
          console.log("Email sent:", info.response);
        }
      });
    });

exports.sendNewsletter = functions.https.onCall(async (data, context) => {
  const subject = data.subject;
  const content = data.content;
  const emailId = context.auth.uid; // Use the user's UID as the email ID

  try {
    const subscribersSnapshot = await admin
        .firestore()
        .collection("subscribers")
        .get();
    const subscribers = subscribersSnapshot.docs.map((doc) => doc.data().email);

    const mailOptions = {
      from: `Open Kommunity <${gmailEmail}>`,
      bcc: subscribers,
      subject: subject,
      html: `${content}<br><br>` +
            `<img src="${functions.config().project.url}/trackEmailOpen?emailId=${emailId}" width="1" height="1" />`,
    };

    await transporter.sendMail(mailOptions);
    const statsRef = admin
        .firestore()
        .collection("stats")
        .doc("emailStats");
    await statsRef.update({
      emailCount: admin.firestore.FieldValue.increment(1),
    });
    return {success: true};
  } catch (error) {
    console.error("Error sending newsletter:", error);
    return {success: false, error: error.message};
  }
});

exports.trackEmailOpen = functions.https.onRequest(async (req, res) => {
  const { emailId } = req.query;

  if (!emailId) {
    res.status(400).send('Missing emailId');
    return;
  }

  try {
    const emailOpenRef = admin.firestore().collection('emailEngagement').doc(emailId);
    await emailOpenRef.set({
      opened: admin.firestore.FieldValue.increment(1),
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    // Serve a 1x1 transparent pixel
    const pixel = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/ax0f5kAAAAASUVORK5CYII=',
      'base64'
    );
    res.set('Content-Type', 'image/png');
    res.send(pixel);
  } catch (error) {
    console.error('Error tracking email open:', error);
    res.status(500).send('Internal Server Error');
  }
});