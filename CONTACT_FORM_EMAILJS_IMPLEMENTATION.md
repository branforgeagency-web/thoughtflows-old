# Contact Form EmailJS Implementation

## Overview
The Contact form in `src/Contact/Contact.js` has been updated to send emails using EmailJS with the same credentials as the Home.js form.

## Implementation Details

### 1. EmailJS Credentials (Same as Home.js)
- **Public Key**: `0J_1VFdtt2A1E5DL5`
- **Service ID**: `service_k1hktqq`
- **Template ID**: `template_pldhwhc`
- **Recipient Email**: `dhanuskumar18@gmail.com`

### 2. What Was Added

#### Imports
```javascript
import emailjs from '@emailjs/browser';
```

#### State Variables
```javascript
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
```

#### EmailJS Initialization
```javascript
useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
    
    // Initialize EmailJS with the same key from Home.js
    emailjs.init("0J_1VFdtt2A1E5DL5");
},[])
```

#### Email Sending Logic
The `handleSubmit` function now:
1. Sets loading state
2. Prepares email template parameters
3. Sends email using EmailJS
4. Shows success/error messages
5. Resets form on success

### 3. Features Added
- **Loading State**: Button shows "Sending..." and is disabled during submission
- **Success Message**: Green notification appears when email is sent successfully
- **Error Handling**: Red notification appears if email fails to send
- **Auto-dismiss**: Success message disappears after 5 seconds

### 4. Template Parameters
The contact form sends these parameters to EmailJS:
- `to_email`: Recipient email
- `from_name`: Sender's name
- `from_email`: Sender's email
- `phone`: Sender's phone number
- `qualification`: Sender's qualification
- `message`: The actual message
- `subject`: "Contact Form Submission from [Name] ([Email])"
- `full_message`: Formatted message with all details

### 5. Important Notes
- The same EmailJS template is used for both forms (Home.js popup and Contact form)
- Make sure the template in EmailJS can handle both sets of parameters
- The template should use conditional logic to display fields that may or may not be present
- **EmailJS Limitation**: Emails will always be sent from your configured email service (dhanuskumar18@gmail.com), but the template clearly shows the user's information as the actual sender
- The subject line now includes the sender's name and email for easy identification

### 6. Testing
To test the implementation:
1. Fill out the contact form with valid data
2. Submit the form
3. Check for the success message
4. Verify email is received at `dhanuskumar18@gmail.com`

### 7. Security Considerations
For production, consider:
- Moving EmailJS credentials to environment variables
- Implementing rate limiting
- Adding CAPTCHA for spam prevention
- Server-side validation 

### 8. EmailJS Template
Below is the template to be used in EmailJS. Create a new template in EmailJS dashboard and copy this HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #0D8F9C;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }
        .sender-info {
            background-color: #f8f9fa;
            border: 2px solid #0D8F9C;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
            text-align: center;
        }
        .sender-title {
            font-weight: bold;
            color: #0D8F9C;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .sender-details {
            font-size: 14px;
            color: #333;
        }
        .content {
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 0 0 5px 5px;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            color: #0D8F9C;
        }
        .value {
            margin-top: 5px;
        }
        .message-box {
            background-color: #f8f9fa;
            border-left: 4px solid #0D8F9C;
            padding: 15px;
            margin: 15px 0;
            border-radius: 4px;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #666;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2>New Contact Form Submission</h2>
    </div>
    
    <div class="sender-info">
        <div class="sender-title">📧 MESSAGE FROM:</div>
        <div class="sender-details">
            <strong>{{from_name}}</strong><br>
            Email: {{from_email}}<br>
            Phone: {{phone}}
        </div>
    </div>
    
    <div class="content">
        <div class="field">
            <div class="label">Qualification:</div>
            <div class="value">{{qualification}}</div>
        </div>
        
        <div class="field">
            <div class="label">Message:</div>
            <div class="message-box">{{message}}</div>
        </div>
    </div>
    
    <div class="footer">
        <p>This email was sent from the Thoughtflows Medical Coding Academy contact form.</p>
        <p><strong>Reply directly to: {{from_email}}</strong></p>
    </div>
</body>
</html>
```

#### Template Variables
The template uses these EmailJS variables:
- `{{from_name}}`: Sender's name
- `{{from_email}}`: Sender's email address
- `{{phone}}`: Sender's phone number
- `{{qualification}}`: Sender's qualification
- `{{message}}`: The message content

#### Template Setup Instructions
1. Log in to EmailJS dashboard
2. Go to Email Templates
3. Click "Create New Template"
4. Name it "Contact Form Template"
5. Copy and paste the above HTML
6. Save the template
7. Note the template ID and update it in the code if different from `template_pldhwhc`

The template includes:
- Responsive design
- Thoughtflows brand color (#0D8F9C)
- Clear field labeling
- Professional formatting
- Mobile-friendly layout 