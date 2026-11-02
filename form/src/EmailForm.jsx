import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./EmailForm.css";

const INDIAN_PHONE = /^[6-9]\d{9}$/;

function EmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: sirf digits, max 10
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: digits }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (!INDIAN_PHONE.test(formData.phone)) {
      setStatus({
        type: "error",
        text: "Sahi 10 digit Indian mobile number daalo (6, 7, 8 ya 9 se shuru).",
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_7lz00au",
        "template_l1pfh4f",
        {
          title: `New Order - ${formData.name}`, // Subject: {{title}}
          name: formData.name, // {{name}}
          address: formData.address, // {{address}}
          phone: `+91 ${formData.phone}`, // {{phone}}
          email: formData.email, // {{email}} (Reply To)
          message: formData.message, // {{message}}
          time: new Date().toLocaleString("en-IN"), // {{time}}
        },
        {
          publicKey: "BLz8ThcZoG8OPKpTW",
        },
      );

      setStatus({ type: "success", text: "Order details send ho gayi!" });
      setFormData({ name: "", address: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        text: `Email failed: ${error.text || "Please try again."}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ef-wrapper">
      <form className="ef-card" onSubmit={handleSubmit}>
        <h2 className="ef-title">Order Details</h2>
        <p className="ef-subtitle">Apni details bharo, hum jaldi contact karenge.</p>

        <div className="ef-field">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="ef-field">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            rows="3"
            placeholder="Ghar no., gali, shehar, state, pincode"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="ef-field">
          <label htmlFor="phone">Mobile Number</label>
          <div className="ef-phone">
            <span className="ef-prefix">+91</span>
            <input
              id="phone"
              type="tel"
              name="phone"
              inputMode="numeric"
              placeholder="10 digit number"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
              pattern="[6-9][0-9]{9}"
              title="10 digit Indian mobile number (6-9 se shuru)"
              required
            />
          </div>
        </div>

        <div className="ef-field">
          <label htmlFor="email">
            Email <span className="ef-optional">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="ef-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Kya order karna hai? Details likho"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button className="ef-button" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Order"}
        </button>

        {status.text && (
          <p role="status" className={`ef-status ef-${status.type}`}>
            {status.text}
          </p>
        )}
      </form>
    </div>
  );
}

export default EmailForm;