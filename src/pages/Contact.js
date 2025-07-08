import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/contact.css"; // Adjust the path as necessary

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const urlRegex = /^(https?:\/\/)/;
    if (!formData.name || !formData.email) {
      setError("Name and email are required");
      return;
    }
    if (!phoneRegex.test(formData.phone) && formData.phone) {
      setError("Please enter a valid phone number");
      return;
    }
    if (!urlRegex.test(formData.website) && formData.website) {
      setError("Please enter a valid URL starting with http:// or https://");
      return;
    }
    console.log("Form submitted:", formData);
    navigate("/thank-you");
  };

  return (
    <main className="container">
      <section id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Contact Us</h2>
        <p className="section-lead">Get in touch with our team today!</p>
        {error && <p className="error" role="alert">{error}</p>}
        <form onSubmit={handleSubmit} aria-describedby="contact-desc">
          <p id="contact-desc" className="sr-only">
            Fill out the form to contact us. Required fields are marked.
          </p>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default Contact;