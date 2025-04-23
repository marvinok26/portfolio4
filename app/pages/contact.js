import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstname, lastname, email, phone, service, message } = req.body;

  // Create a Nodemailer transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    // Send email to yourself
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT, // Your email address
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Interested:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Optional: Send confirmation email to the sender
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for your message',
      html: `
        <h2>Message Received</h2>
        <p>Hi ${firstname},</p>
        <p>Thank you for reaching out. I appreciate your interest and will review your message shortly.</p>
        <p>Please note: For serious business inquiries, I recommend using direct professional communication channels.</p>
        <p>Best regards,<br>Marvin Okongo</p>
      `
    });

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      message: 'Failed to send message. Please try again or contact directly via email.',
      error: error.toString() 
    });
  }
}