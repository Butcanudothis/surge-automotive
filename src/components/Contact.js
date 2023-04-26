// write a contact form component that has a name, email, and message field
// and a submit button. When the submit button is clicked, the form should
// be validated and if the form is valid, the form should be submitted to
// a serverless function that you will write. The serverless function should
// then send an email to the email address provided in the form. The form
// should also display a success message if the email was sent successfully
// or an error message if the email was not sent successfully.

// Path: src/components/Contact.js

import React, { useState } from "react";
//import Email from "https://smtpjs.com/v3/smtp.js";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check that required fields are filled in
    if (!name || !email || !message) {
      setError("Please fill in all required fields");
      return;
    }

    // Use SMTP.js to send email
    // Email.send({
    //   SecureToken: "YOUR_SECURE_TOKEN",
    //   To: "recipient@example.com",
    //   From: email,
    //   Subject: "New message from " + name,
    //   Body: `
    //     <h3>Message from ${name}</h3>
    //     <p>Email: ${email}</p>
    //     <p>Phone: ${phone}</p>
    //     <p>Message: ${message}</p>
    //   `,
    // }).then(
    //   (message) => {
    //     setSuccess("Email sent successfully!");
    //     setError("");
    //   },
    //   (error) => {
    //     setError("Unable to send email. Please try again later.");
    //     setSuccess("");
    //   }
    // );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
    <form onSubmit={handleSubmit} className="bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-white font-medium mb-2">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full p-2 rounded-lg shadow-md bg-white bg-opacity-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white font-medium mb-2">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="w-full p-2 rounded-lg shadow-md bg-white bg-opacity-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-white font-medium mb-2">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="w-full p-2 rounded-lg shadow-md bg-white bg-opacity-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white font-medium mb-2">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          className="w-full p-2 rounded-lg shadow-md bg-white bg-opacity-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <div>
        <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Send</button>
      </div>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {success && <div className="text-green-500 mt-4">{success}</div>}
    </form>
    </div>
  );

};

export default Contact;