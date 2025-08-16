# Email Setup Guide for Contact Form

## Setting up EmailJS

To receive emails from your contact form, you need to set up EmailJS. Follow these steps:

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. Copy the **Service ID** (you'll need this later)

### 3. Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID**

### 4. Get Your Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (also called User ID)

### 5. Update Environment Variables
1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Test Your Setup
1. Restart your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit a test message
4. Check your email inbox for the message

## Alternative: Server-Side Email (More Secure)

If you prefer a more secure server-side solution, you can use:

### Option 1: Nodemailer with Gmail
- Requires Gmail App Password
- More secure as credentials are server-side only

### Option 2: Resend
- Professional email service
- Easy integration with Next.js
- Better deliverability

### Option 3: SendGrid
- Enterprise-grade email service
- Free tier available
- Excellent analytics

Would you like me to implement any of these alternatives instead?

## Troubleshooting

### Common Issues:
1. **Environment variables not loading**: Make sure to restart your development server after updating `.env.local`
2. **CORS errors**: EmailJS should handle this automatically
3. **Email not received**: Check your spam folder and verify your EmailJS template configuration
4. **Rate limiting**: EmailJS free tier has monthly limits

### Security Notes:
- The current implementation exposes EmailJS keys in the client-side code
- For production use, consider implementing server-side email handling
- EmailJS is suitable for personal portfolios but may not be ideal for high-traffic sites

## Next Steps
1. Set up your EmailJS account
2. Configure the environment variables
3. Test the contact form
4. Consider upgrading to a server-side solution for production
