import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link
    const mailtoLink = `mailto:sodiqaina@ymail.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0D%0DMessage: ${formData.message}`;

    // Open the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact">
      <h1 className="contact-me" id="contact">
        Contact Me
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label className="Name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="Name">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="Name">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="BTN ">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
