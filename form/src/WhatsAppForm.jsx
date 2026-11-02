import { useState } from "react";

function WhatsAppForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
New Contact Form

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
    `;

    // Apna Indian WhatsApp number yahan likho
    const whatsappNumber = "8755967703";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us - WhatsApp</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br />
      <br />

      <input
        type="tel"
        name="phone"
        placeholder="Enter Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <br />
      <br />

      <textarea
        name="message"
        placeholder="Enter Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <br />
      <br />

      <button type="submit">Send on WhatsApp</button>
    </form>
  );
}

export default WhatsAppForm;
