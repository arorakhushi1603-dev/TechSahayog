
import { useState } from "react";
import { submitForm } from "../api";

function Volunteer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    skills: ""
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
      const result = await submitForm("volunteers", form);

      setMessage(result.message || "Volunteer registration submitted successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        interest: "",
        skills: ""
      });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const opportunities = [
    {
      icon: "📚",
      title: "Teaching & Tutoring",
      description: "Share your knowledge and help children with their studies."
    },
    {
      icon: "👧",
      title: "Girls' Education",
      description: "Encourage equal learning opportunities for girls."
    },
    {
      icon: "💻",
      title: "Digital Learning",
      description: "Help children explore technology and digital education."
    },
    {
      icon: "🤝",
      title: "Community Outreach",
      description: "Participate in educational awareness and community activities."
    }
  ];

  return (
    <section className="volunteer-page">

      {/* HERO */}
      <div className="volunteer-hero">
        <div className="volunteer-hero-content">
          <p className="eyebrow">JOIN OUR COMMUNITY</p>

          <h1>
            Be someone's reason
            <span> to keep learning.</span>
          </h1>

          <p>
            Your time, knowledge and skills can help create better
            educational opportunities for children. Become a part
            of Har Ghar Shiksha and contribute towards a brighter future.
          </p>

          <a href="#volunteer-form" className="volunteer-main-btn">
            Join as a Volunteer →
          </a>
        </div>

        <div className="volunteer-hero-image">
          <img
            src="/images/children-activities.jpg"
            alt="Children participating in learning activities"
          />
        </div>
      </div>

      {/* OPPORTUNITIES */}
      <div className="volunteer-heading">
        <p className="eyebrow">MAKE A DIFFERENCE</p>
        <h2>Ways You Can Contribute</h2>
        <p>Choose an area where your time and skills can make a difference.</p>
      </div>

      <div className="volunteer-opportunities">
        {opportunities.map((item, index) => (
          <div className="volunteer-card" key={index}>
            <div className="volunteer-card-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* REGISTRATION FORM */}
      <div className="volunteer-form-section" id="volunteer-form">

        <div className="volunteer-form-info">
          <p className="eyebrow">BECOME A VOLUNTEER</p>
          <h2>Every helping hand matters.</h2>

          <p>
            Interested in contributing to education? Complete the
            registration form with your details and areas of interest.
          </p>

          <div className="volunteer-info-item">
            <span>💡</span>
            <div>
              <h3>Share your skills</h3>
              <p>Tell us about your interests and qualifications.</p>
            </div>
          </div>

          <div className="volunteer-info-item">
            <span>🌱</span>
            <div>
              <h3>Support learning</h3>
              <p>Contribute towards educational opportunities for children.</p>
            </div>
          </div>

          <div className="volunteer-info-item">
            <span>💗</span>
            <div>
              <h3>Be part of the change</h3>
              <p>Help create a community that values education.</p>
            </div>
          </div>
        </div>

        <form
          className="volunteer-form-card"
          onSubmit={handleSubmit}
          id="volunteer-registration"
        >
          <div className="volunteer-form-title">
            <span>🌸</span>
            <div>
              <h2>Volunteer Registration</h2>
              <p>Fill in your details to register.</p>
            </div>
          </div>

          <div className="volunteer-fields">

            <div className="volunteer-field">
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

            <div className="volunteer-field">
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

            <div className="volunteer-field">
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

            <div className="volunteer-field">
              <label>Area of Interest *</label>
              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                required
              >
                <option value="">Select volunteer area</option>
                <option value="Teaching">Teaching / Tutoring</option>
                <option value="Girls Education">Girls' Education Awareness</option>
                <option value="Learning Materials">Learning Material Support</option>
                <option value="Digital Learning">Digital Learning</option>
                <option value="Education Camps">Education Camps / Activities</option>
                <option value="Community Outreach">Community Outreach</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="volunteer-field full-width">
              <label>Skills / Qualifications / Interests</label>
              <textarea
                name="skills"
                placeholder="Tell us about your skills, experience or interests..."
                value={form.skills}
                onChange={handleChange}
                rows="4"
              />
            </div>

          </div>

          <button
            type="submit"
            className="volunteer-submit-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Register as a Volunteer →"}
          </button>

          {message && (
            <p className="volunteer-success">{message}</p>
          )}

          {error && (
            <p className="volunteer-error">{error}</p>
          )}

          <p className="volunteer-note">
            🌱 Thank you for your interest in supporting education.
          </p>
        </form>
      </div>

      {/* BOTTOM BANNER */}
      <div className="volunteer-banner">
        <img
          src="/images/book-distribution.jpg"
          alt="Educational books"
        />
        <div>
          <h2>Share knowledge. Inspire possibilities.</h2>
          <p>Your contribution can help make education more accessible.</p>
        </div>
      </div>

    </section>
  );
}

export default Volunteer;
