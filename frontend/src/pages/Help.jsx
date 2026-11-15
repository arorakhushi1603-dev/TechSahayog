
import { useState } from "react";
import { submitForm } from "../api";

function Help() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    category: "",
    location: "",
    description: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const result = await submitForm("requests", {
        ...form,
        age: Number(form.age)
      });

      setMessage(result.message);

      setForm({
        name: "",
        age: "",
        phone: "",
        category: "",
        location: "",
        description: ""
      });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const supportOptions = [
    {
      icon: "📚",
      title: "Academic Support",
      description: "Guidance and help with school subjects and learning."
    },
    {
      icon: "📖",
      title: "Learning Materials",
      description: "Books and other educational learning resources."
    },
    {
      icon: "👧",
      title: "Girls' Education",
      description: "Encouraging girls to continue their education."
    },
    {
      icon: "💻",
      title: "Digital Learning",
      description: "Support with digital learning opportunities."
    }
  ];

  return (
    <section className="help-page">

      {/* PAGE INTRO */}
      <div className="help-header">
        <p className="eyebrow">WE ARE HERE TO HELP</p>
        <h1>
          Every learning journey
          <span> deserves support.</span>
        </h1>
        <p>
          Every child deserves the opportunity to learn and grow.
          Tell us what educational support is needed, and submit
          a request through the form below.
        </p>
      </div>

      {/* SUPPORT OPTIONS */}
      <div className="help-options">
        {supportOptions.map((item, index) => (
          <div className="help-option-card" key={index}>
            <div className="help-option-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* FORM SECTION */}
      <div className="help-form-section">

        <div className="help-form-info">
          <p className="eyebrow">REQUEST EDUCATIONAL SUPPORT</p>
          <h2>Let's understand how we can help.</h2>

          <p>
            Fill in the details carefully so your request can be
            understood. Please provide accurate contact information
            so the team can follow up if support is available.
          </p>

          <div className="help-info-item">
            <span>📝</span>
            <div>
              <h3>Share your requirements</h3>
              <p>Explain what kind of educational assistance is needed.</p>
            </div>
          </div>

          <div className="help-info-item">
            <span>🤝</span>
            <div>
              <h3>Community support</h3>
              <p>Requests can help identify educational needs in communities.</p>
            </div>
          </div>

          <div className="help-info-item">
            <span>💗</span>
            <div>
              <h3>Every child matters</h3>
              <p>Every request deserves to be treated with care and respect.</p>
            </div>
          </div>
        </div>

        <form className="help-form-card" onSubmit={handleSubmit}>

          <div className="help-form-heading">
            <span>🌱</span>
            <div>
              <h2>Support Request Form</h2>
              <p>Please complete all the required fields.</p>
            </div>
          </div>

          <div className="help-form-grid">

            <div className="help-field">
              <label>Student / Parent Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="help-field">
              <label>Student Age *</label>
              <input
                type="number"
                name="age"
                placeholder="Enter age"
                value={form.age}
                onChange={handleChange}
                min="1"
                max="100"
                required
              />
            </div>

            <div className="help-field">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="help-field">
              <label>Location *</label>
              <input
                type="text"
                name="location"
                placeholder="City / Area"
                value={form.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="help-field full-width">
              <label>Type of Educational Support *</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
              >
                <option value="">Select support category</option>
                <option value="Academic Support">Academic Support</option>
                <option value="Learning Materials">Books / Learning Materials</option>
                <option value="Girls Education">Girls' Education Support</option>
                <option value="Digital Learning">Digital Learning Support</option>
                <option value="Educational Guidance">Educational Guidance</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="help-field full-width">
              <label>Describe Your Requirements *</label>
              <textarea
                name="description"
                placeholder="Please explain what educational support is required..."
                value={form.description}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

          </div>

          <button
            type="submit"
            className="help-submit-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Support Request →"}
          </button>

          {message && (
            <p className="help-success">{message}</p>
          )}

          {error && (
            <p className="help-error">{error}</p>
          )}

          <p className="help-form-note">
            🔒 Your submitted details will be used to process your support request.
          </p>

        </form>
      </div>

      {/* BOTTOM IMAGE */}
      <div className="help-bottom-banner">
        <img
          src="/images/book-distribution.jpg"
          alt="Educational books"
        />
        <div>
          <h2>Education can change a future.</h2>
          <p>Let's work together to make learning opportunities more accessible.</p>
        </div>
      </div>

    </section>
  );
}

export default Help;
