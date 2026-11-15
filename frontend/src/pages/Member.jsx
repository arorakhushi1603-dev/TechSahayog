
import { useState } from "react";
import { submitForm } from "../api";

function Member() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    interest: ""
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
      const result = await submitForm("members", form);

      setMessage(
        result.message || "Membership registration submitted successfully!"
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        interest: ""
      });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const benefits = [
    {
      icon: "📚",
      title: "Support Education",
      description: "Contribute towards better learning opportunities for children."
    },
    {
      icon: "👧",
      title: "Promote Equality",
      description: "Encourage equal educational opportunities for girls."
    },
    {
      icon: "🤝",
      title: "Build Community",
      description: "Become part of a community that values education."
    },
    {
      icon: "🌱",
      title: "Create Change",
      description: "Help encourage learning, confidence and growth."
    }
  ];

  return (
    <section className="member-page">

      {/* HERO SECTION */}
      <div className="member-hero">
        <div className="member-hero-content">
          <p className="eyebrow">HAR GHAR SHIKSHA MEMBERSHIP</p>

          <h1>
            Together, let's make
            <span> education accessible.</span>
          </h1>

          <p>
            Become a member of Har Ghar Shiksha and support better
            educational opportunities for children from underprivileged
            and low-income families, with a special focus on girls' education.
          </p>

          <a href="#member-form" className="member-main-btn">
            Become a Member →
          </a>
        </div>

        <div className="member-hero-image">
          <img
            src="/images/school-building.jpg"
            alt="School building"
          />
        </div>
      </div>

      {/* MEMBERSHIP BENEFITS */}
      <div className="member-heading">
        <p className="eyebrow">WHY JOIN US?</p>
        <h2>Be Part of Something Meaningful</h2>
        <p>Your participation can help support the cause of education.</p>
      </div>

      <div className="member-benefits">
        {benefits.map((item, index) => (
          <div className="member-benefit-card" key={index}>
            <div className="member-benefit-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* MEMBERSHIP FORM */}
      <div className="member-form-section" id="member-form">

        <div className="member-form-info">
          <p className="eyebrow">JOIN OUR INITIATIVE</p>
          <h2>Your support can make a difference.</h2>

          <p>
            Interested in becoming a member? Share your details and
            select the area in which you would like to contribute.
          </p>

          <div className="member-info-item">
            <span>💗</span>
            <div>
              <h3>Be a supporter</h3>
              <p>Show your commitment towards educational opportunities.</p>
            </div>
          </div>

          <div className="member-info-item">
            <span>📖</span>
            <div>
              <h3>Support learning</h3>
              <p>Encourage children to continue their educational journey.</p>
            </div>
          </div>

          <div className="member-info-item">
            <span>🌍</span>
            <div>
              <h3>Spread awareness</h3>
              <p>Help promote the importance of education in communities.</p>
            </div>
          </div>
        </div>

        <form
          className="member-form-card"
          onSubmit={handleSubmit}
        >
          <div className="member-form-title">
            <span>🌸</span>
            <div>
              <h2>Membership Registration</h2>
              <p>Complete the form to register your interest.</p>
            </div>
          </div>

          <div className="member-fields">

            <div className="member-field">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="member-field">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="member-field">
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

            <div className="member-field">
              <label>Area of Interest *</label>
              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                required
              >
                <option value="">Select your interest</option>
                <option value="Education Support">Education Support</option>
                <option value="Teaching">Teaching / Tutoring</option>
                <option value="Girls Education">Girls' Education</option>
                <option value="Learning Materials">Learning Material Support</option>
                <option value="Community Outreach">Community Outreach</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="member-field full-width">
              <label>Address</label>
              <textarea
                name="address"
                placeholder="Enter your address"
                value={form.address}
                onChange={handleChange}
                rows="3"
              />
            </div>

          </div>

          <button
            type="submit"
            className="member-submit-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Register as Member →"}
          </button>

          {message && (
            <p className="member-success">{message}</p>
          )}

          {error && (
            <p className="member-error">{error}</p>
          )}

          <p className="member-note">
            🌱 Thank you for supporting the cause of education.
          </p>
        </form>
      </div>

      {/* BOTTOM BANNER */}
      <div className="member-banner">
        <img
          src="/images/uniform-distribution.jpg"
          alt="School uniform distribution"
        />
        <div>
          <h2>Be a part of a brighter tomorrow.</h2>
          <p>Every contribution towards education matters.</p>
        </div>
      </div>

    </section>
  );
}

export default Member;
