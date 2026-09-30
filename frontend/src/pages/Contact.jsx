import { useState } from "react";

function Contact() {

  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setMessage(
      "Thank you! Your message has been submitted."
    );

    e.target.reset();
  }

  return (
    <section className="form-page">

      <div>

        <p className="eyebrow">
          GET IN TOUCH
        </p>

        <h1>
          Let's create change
          <span> together.</span>
        </h1>

        <p className="page-intro">
          Have a question, suggestion or want to
          connect with the NGO? Send us a message.
        </p>

        <div className="contact-info">

          <p>📞 Phone: NGO Contact Number</p>

          <p>💬 WhatsApp: NGO WhatsApp Number</p>

          <p>✉️ Email: NGO Email Address</p>

        </div>

      </div>


      <form
        className="form-card"
        onSubmit={handleSubmit}
      >

        <input
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          placeholder="Phone Number"
        />

        <textarea
          placeholder="Write your message..."
          required
        />

        <button className="btn primary">
          Send Message
        </button>

        {message && (
          <p className="success">
            {message}
          </p>
        )}

      </form>

    </section>
  );
}

export default Contact;