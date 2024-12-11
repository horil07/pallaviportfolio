import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = request.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return response.status(400).json({ message: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return response.status(400).json({ message: 'Invalid email format' });
    }

    // Here you would typically integrate with your email service
    // For example, using SendGrid, Mailgun, or other email providers
    
    // For now, we'll just simulate a successful submission
    return response.status(200).json({ 
      message: 'Message sent successfully! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return response.status(500).json({ 
      message: 'Failed to send message. Please try again later.' 
    });
  }
}