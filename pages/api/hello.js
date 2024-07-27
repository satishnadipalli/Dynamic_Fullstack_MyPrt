const nodemailer = require('nodemailer');

// Create a transporter object using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: 'satishnadipalli1@gmail.com',
    pass: 'ajtw rdmn anql belq', // Replace with your actual application-specific password
  },
});

// Function to send feedback email
const sendFeedbackEmail = async (userName, userEmail, userPhone, subject, message) => {
  const htmlContent = `
    <h1>Feedback from user</h1>
    <h3>Subject: ${subject}</h3>
    <p>${message}</p>
    <br/>
    <p>Regards,</p>
    <p>${userName}</p>
    <p>${userPhone}</p>
  `;

  const mailOptions = {
    from: userEmail, // Sender address
    to: 'satishnadipalli1@gmail.com', // Your email address
    subject: `FeedBack from ${userName} => Portifolio`,
    html: htmlContent,
    replyTo: userEmail, // Replies will go to the user's email
  };

  try {
    await transporter.sendMail(mailOptions);
    return 'Success';
  } catch (error) {
    console.error('Error sending email:', error);
    return 'Error';
  }
};

// API route handler
export default async function handler(req, res) {
  const { userName, userEmail, userPhone, subject, message } = req.body;
 
  // Email request come from the frontend and backend will send an Email to the admin


  try {
    const emailResponse = await sendFeedbackEmail(userName, userEmail, userPhone, subject, message);

    if (emailResponse === 'Success') {
      console.log('Success');
      return res.status(200).json({ msg: 'Your feedback has been successfully sent' });
    } else {
      console.log('Failure');
      return res.status(400).json({ msg: 'There was an error sending your feedback' });
    }
  } catch (error) {
    console.error('Error in API handler:', error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
}


//PCD4ABEQHQCDZVELEKPKH2DS