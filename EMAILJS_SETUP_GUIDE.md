# EmailJS Setup Guide

This guide will help you set up EmailJS to send form submissions to dhanuskumar18@gmail.com.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up Free" and create an account

## Step 2: Create an Email Service

1. After logging in, go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose Gmail (recommended) or your preferred email provider
4. Follow the connection steps to authorize EmailJS

## Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up your template with these fields:

**Template Name:** Workshop Registration

**Subject:** New Workshop Registration from {{from_name}}

**Content:**
```
You have received a new workshop registration:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Qualification: {{qualification}}
Year of Passing: {{year_of_passing}}
Location: {{location}}
How they heard about us: {{source}}
Workshop Location: {{workshop}}

Full Details:
{{message}}
```

**To Email:** dhanuskumar18@gmail.com

4. Save the template

## Step 4: Get Your Credentials

1. Go to "Account" → "API Keys" to get your Public Key
2. Note down your:
   - Public Key
   - Service ID (from Email Services page)
   - Template ID (from Email Templates page)

## Step 5: Update Your Code

In `src/Home/Home.js`, replace these placeholders with your actual values:

```javascript
// Line ~27
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

// Line ~94-95
const response = await emailjs.send(
  'YOUR_SERVICE_ID',  // Replace with your service ID
  'YOUR_TEMPLATE_ID', // Replace with your template ID
  templateParams
);
```

## Testing

1. Fill out the form with test data
2. Submit the form
3. Check dhanuskumar18@gmail.com for the email
4. Check browser console for any errors

## Troubleshooting

- **Email not received:** Check spam folder
- **"Failed to send" error:** Verify all IDs are correct
- **Template error:** Ensure all {{variables}} in template match the templateParams object

## Security Note

For production use, consider:
1. Moving EmailJS credentials to environment variables
2. Implementing rate limiting
3. Adding CAPTCHA to prevent spam

## Support

For more help, visit [EmailJS Documentation](https://www.emailjs.com/docs/) 