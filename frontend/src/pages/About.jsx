
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-page">

      {/* HERO SECTION */}
      <div className="about-hero">
        <div className="about-hero-content">
          <p className="eyebrow">ABOUT HAR GHAR SHIKSHA</p>

          <h1>
            Every child deserves
            <span> a chance to learn.</span>
          </h1>

          <p>
            We believe education can open doors to a brighter future.
            Har Ghar Shiksha focuses on improving access to learning
            opportunities for children from underprivileged and
            low-income families.
          </p>

          <Link to="/help" className="about-button">
            Explore Educational Support →
          </Link>
        </div>

        <div className="about-hero-image">
          <img
            src="/images/school-building.jpg"
            alt="School building"
          />
          <div className="about-image-note">
            <span>📚</span>
            <p>Learning today, leading tomorrow.</p>
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <div className="about-story">
        <div className="about-story-image">
          <img
            src="/images/children-activities.jpg"
            alt="Children participating in educational activities"
          />
        </div>

        <div className="about-story-content">
          <p className="eyebrow">OUR PURPOSE</p>
          <h2>Education is a right, not a privilege.</h2>

          <p>
            Many children face financial and social barriers that make
            continuing their education difficult. We aim to encourage
            learning and connect children with educational resources
            and support.
          </p>

          <p>
            We also place special emphasis on girls' education,
            promoting equal opportunities and encouraging every girl
            to pursue her dreams through education.
          </p>
        </div>
      </div>

      {/* MISSION AND VISION */}
      <div className="about-heading">
        <p className="eyebrow">WHAT GUIDES US</p>
        <h2>Our Mission & Vision</h2>
        <p>Building a future where every child gets the opportunity to learn.</p>
      </div>

      <div className="about-feature-grid">
        <div className="about-feature-card">
          <div className="about-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To support children facing educational barriers through
            learning resources, guidance and community participation.
          </p>
        </div>

        <div className="about-feature-card">
          <div className="about-icon">🌈</div>
          <h3>Our Vision</h3>
          <p>
            A society where every child, regardless of background or
            gender, has access to meaningful educational opportunities.
          </p>
        </div>

        <div className="about-feature-card">
          <div className="about-icon">👧</div>
          <h3>Girls' Education</h3>
          <p>
            Encouraging girls to continue learning, build confidence
            and work towards a brighter and independent future.
          </p>
        </div>
      </div>

      {/* OUR VALUES */}
      <div className="about-values">
        <div className="about-heading">
          <p className="eyebrow">OUR COMMITMENT</p>
          <h2>Values That Matter</h2>
        </div>

        <div className="about-value-list">
          <div>
            <span>📖</span>
            <h3>Learning</h3>
            <p>Making learning resources and guidance more accessible.</p>
          </div>

          <div>
            <span>💗</span>
            <h3>Equality</h3>
            <p>Promoting equal educational opportunities for all children.</p>
          </div>

          <div>
            <span>🤝</span>
            <h3>Togetherness</h3>
            <p>Bringing people together to support the cause of education.</p>
          </div>

          <div>
            <span>🌱</span>
            <h3>Growth</h3>
            <p>Encouraging children to learn, grow and believe in themselves.</p>
          </div>
        </div>
      </div>

      {/* PHOTO STRIP */}
      <div className="about-photo-strip">
        <img src="/images/book-distribution.jpg" alt="Book distribution" />
        <img src="/images/uniform-distribution.jpg" alt="Uniform distribution" />
      </div>

      {/* CALL TO ACTION */}
      <div className="about-cta">
        <p className="eyebrow">BE A PART OF THE CHANGE</p>
        <h2>Small efforts can create brighter futures.</h2>
        <p>
          Join us in encouraging education and supporting children
          on their learning journey.
        </p>

        <div className="about-cta-buttons">
          <Link to="/volunteer">Become a Volunteer</Link>
          <Link to="/help">Get Support</Link>
        </div>
      </div>

    </section>
  );
}

export default About;
