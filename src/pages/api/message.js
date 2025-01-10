import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config(); // Load environment variables from .env file

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {email } = req.body;
        console.log( email)
      // Create a transporter for sending the email
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        port:587,
        auth: {
          user: 'shazaniyu@gmail.com', // Replace with your Gmail address environment variable
          pass: "hfyrzslbxcxoqxoq", // Replace with your Gmail app password environment variable
        },
        tls:{
            rejectUnauthorized:false
        }
      });

      // Configure the email options
      const mailOptions = {
        from: 'shaazaniyu@gmail.com', // Sender's email address
        to: 'zoeadoree33@gmail.com, info@adain.ng, garbajohn101@gmail.com', // Recipient's email address
        subject: 'Adain Message', // Email subject
        text: 
        `Message:\nEmail: ${email}\n`, // Email body
      };

      // Send the email
      const result = await transporter.sendMail(mailOptions);

      console.log('Email sent successfully:', result);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}