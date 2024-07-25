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
