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

      const mailOptions = {
        from: gmailEmail,
        to: data.email,
        subject: "Open Kommunity - Event Signup Confirmation",
        text:
        `Hello ${data.name},\n\n` +
        `Thank you for signing up for our community event.\n\n` +
        `We look forward to hosting you!\n\n` +
        `Best regards,\nOpen Kommunity Team`,
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
      text: content,
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
