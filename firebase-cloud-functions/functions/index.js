const functions = require('firebase-functions');
  
// Create and Deploy Your First Cloud Functions
 // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// https://stackoverflow.com/questions/53101368/how-to-get-an-email-when-new-key-is-created-in-firebase-real-time-database

const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

const APP_NAME = 'TODO App';

exports.sendWelcomeEmail = functions.database.ref('/tasks/{pushId}')
    .onCreate((snapshot, context) => {

       const createdData = snapshot.val(); // data that was created

       const email = functions.config().sendto.email;
       const displayName = createdData.name; // The display name of the user.

       return sendWelcomeEmail(email, displayName);
});

// Sends a welcome email to the given user.
function sendWelcomeEmail(email, displayName) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email,
  };

  // The user subscribed to the newsletter.
  mailOptions.subject = `New task on ${APP_NAME}!`;
  mailOptions.text = `I see you created a task named "${displayName || ''}"!`;
  mailTransport.sendMail(mailOptions);
  console.log('New welcome email sent to:', email);
  return 0;
}