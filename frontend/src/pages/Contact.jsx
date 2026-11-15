
import { useState } from "react";
import { submitForm } from "../api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setStatus("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await submitForm("messages", form);

      setStatus("Thank you! Your message has been submitted successfully.");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="page contact-page">

      <div className="contact-hero">
        <p className="eyebrow">CONTACT HAR GHAR SHIKSHA</p>

        <h1>
          Let's support
          <span> education together.</span>
        </h1>

        <p className="page-intro">
          Have a question, suggestion or want to connect with us?
          We'd love to hear from you. Send us a message and
          become a part of our journey.
        </p>
      </div>

      <div className="contact-layout">

        <div className="contact-details">

          <img
            src="/images/children-activities.jpg"
            alt="Children participating in educational activities"
          />

          <h2>We'd love to hear from you!</h2>

          <p>
            Whether you want to volunteer, support our initiatives
            or learn more about our work, feel free to reach out.
          </p>

          <div className="contact-info">

            <div className="contact-info-item">
              <span>📞</span>
              <div>
                <strong>Phone</strong>
                <p>+91 99922 45075</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span>📸</span>
              <div>
                <strong>Instagram</strong>
                <p>Har Ghar Shiksha</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span>📚</span>
              <div>
                <strong>Our Focus</strong>
                <p>Children's education and girls' education</p>
              </div>
            </div>

          </div>
        </div>

        <form className="form-card contact-form" onSubmit={handleSubmit}>

          <div className="contact-form-heading">
            <span>💌</span>
            <h2>Send Us a Message</h2>
            <p>Fill in the details below to get in touch.</p>
          </div>

          <label htmlFor="contactName">Your Name</label>
          <input
            id="contactName"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="contactEmail">Email Address</label>
          <input
            id="contactEmail"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="contactPhone">Phone Number</label>
          <input
            id="contactPhone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
          />

          <label htmlFor="contactMessage">Your Message</label>
          <textarea
            id="contactMessage"
            name="message"
            placeholder="Write your message here..."
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn primary contact-submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>

          {status && (
            <p className="contact-status" role="status">
              {status}
            </p>
          )}

        </form>

      </div>

      <div className="contact-bottom">
        <h2>Education is a journey we build together. 🌱</h2>
        <p>
          Thank you for being interested in making a positive
          difference in children's lives.
        </p>
      </div>

    </section>
  );
}

export default Contact;
