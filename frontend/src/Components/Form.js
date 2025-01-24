import React from 'react';
import emailjs from 'emailjs-com';
import './FormStyles.css';

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1l96xwi', 'template_rmbjjbe', e.target, 'kEuyAsqPmV51EkIy8')
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('Error sending email:', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );

    // Clear the form fields
    e.target.reset();
  };

  return (
    <div className="form">
      <form onSubmit={sendEmail}>
        <h1 className="data">Fill the Details</h1>
        <label>Your Name</label>
        <input type="text" name="user_name" required /><br />
        <label>Email</label>
        <input type="email" name="user_email" required /><br />
        <label>Subject</label>
        <input type="text" name="subject" required /><br />
        <label>Message</label>
        <textarea name="message" rows="6" placeholder="Type Your Message Here" required />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
