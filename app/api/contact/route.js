// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate limiting implementation (simple in-memory solution)
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour window
const MAX_EMAILS_PER_IP = 5; // 5 emails per IP per hour
const ipEmailCountMap = new Map();

// Clean up rate limiting data periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of ipEmailCountMap.entries()) {
    if (now - data.timestamp > RATE_LIMIT_WINDOW) {
      ipEmailCountMap.delete(ip);
    }
  }
}, 3600000); // Clean up hourly

export async function POST(request) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Apply rate limiting
    if (ip !== 'unknown') {
      const now = Date.now();
      const ipData = ipEmailCountMap.get(ip) || { count: 0, timestamp: now };
      
      // Reset count if time window has passed
      if (now - ipData.timestamp > RATE_LIMIT_WINDOW) {
        ipData.count = 0;
        ipData.timestamp = now;
      }
      
      // Check if limit exceeded
      if (ipData.count >= MAX_EMAILS_PER_IP) {
        return NextResponse.json(
          { message: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
      
      // Increment counter
      ipData.count += 1;
      ipEmailCountMap.set(ip, ipData);
    }

    // Parse request body
    const formData = await request.json();
    
    // Validate required fields
    const requiredFields = ['firstname', 'lastname', 'email', 'service', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { message: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }
    
    // Create email transport
    // For production, use your actual SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    
    // Compose email
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'your-site@example.com',
      to: process.env.EMAIL_TO || 'okongomarvin971@gmail.com',
      subject: `Portfolio Contact: ${formData.service} inquiry from ${formData.firstname} ${formData.lastname}`,
      replyTo: formData.email,
      text: `
Name: ${formData.firstname} ${formData.lastname}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service Requested: ${formData.service}

Message:
${formData.message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${formData.firstname} ${formData.lastname}</p>
<p><strong>Email:</strong> ${formData.email}</p>
<p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
<p><strong>Service Requested:</strong> ${formData.service}</p>
<h3>Message:</h3>
<p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact API error:', error);
    
    return NextResponse.json(
      { message: 'Failed to send message. Please try again or contact directly.' },
      { status: 500 }
    );
  }
}

// Handle validation for OPTIONS request (for CORS preflight)
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}