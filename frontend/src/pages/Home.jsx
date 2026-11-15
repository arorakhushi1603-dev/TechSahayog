
import { Link } from "react-router-dom";

function Home() {
  const photos = [
    {
      image: "/images/book-distribution.jpg",
      title: "Books and Learning",
      description: "Providing learning resources to children."
    },
    {
      image: "/images/uniform-distribution.jpg",
      title: "School Uniforms",
      description: "Supporting children with school essentials."
    },
    {
      image: "/images/children-activities.jpg",
      title: "Community Activities",
      description: "Creating opportunities to learn and grow."
    },
    {
      image: "/images/school-building.jpg",
      title: "Our School",
      description: "A place where learning begins."
    }
  ];

  const purposes = [
    {
      icon: "📚",
      title: "Educational Support",
      description:
        "Help children from underserved families access learning resources, academic guidance and educational opportunities.",
      link: "/help",
      linkText: "Get Support →"
    },
    {
      icon: "👧",
      title: "Girls' Education",
      description:
        "Encourage girls to continue their education and promote equal learning opportunities.",
      link: "/events",
      linkText: "Explore Programs →"
    },
    {
      icon: "👩‍🏫",
      title: "Education Volunteers",
      description:
        "Bring teachers, mentors and volunteers together to support children's learning.",
      link: "/volunteer",
      linkText: "Join as Volunteer →"
    }
  ];

  return (
    <main>

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-content">
          <p className="eyebrow">
            HAR GHAR SHIKSHA • EDUCATION FOR EVERY CHILD
          </p>

          <h1>
            Learning Today,
            <span> Leading Tomorrow.</span>
          </h1>

          <p className="hero-text">
            Every child deserves the chance to learn, grow and dream.
            Har Ghar Shiksha works towards improving access to
            education for children from underserved communities,
            with special attention to girls' education.
          </p>

          <div className="buttons">
            <Link to="/help" className="btn primary">
              Get Educational Support
            </Link>

            <Link to="/volunteer" className="btn secondary">
              Become a Volunteer
            </Link>
          </div>

          <p className="hero-note">
            📚 Educate • Empower • Uplift
          </p>
        </div>

        <div className="hero-card hero-photo">
          <img
            src="/images/school-building.jpg"
            alt="Har Ghar Shiksha school building"
          />

          <div className="photo-caption">
            <h2>A place where learning begins.</h2>
            <p>Every dream deserves an opportunity.</p>
          </div>
        </div>

      </section>


      {/* PURPOSE SECTION */}
      <section className="section">

        <p className="eyebrow">WHAT WE BELIEVE IN</p>

        <h2 className="section-title">
          Creating access to
          <span> meaningful education.</span>
        </h2>

        <div className="cards">

          {purposes.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <Link to={item.link} className="card-link">
                {item.linkText}
              </Link>
            </div>
          ))}

        </div>
      </section>


      {/* REAL PHOTOGRAPHS */}
      <section className="photo-section">

        <div className="photo-heading">
          <p className="eyebrow">OUR WORK IN PICTURES</p>

          <h2>
            Real moments.
            <span> Meaningful change.</span>
          </h2>

          <p>
            Take a look at the school environment, educational
            resources and community activities through these
            photographs.
          </p>
        </div>

        <div className="photo-grid">

          {photos.map((photo, index) => (
            <Link
              to="/gallery"
              className={`photo-tile ${index === 0 ? "photo-large" : ""}`}
              key={photo.image}
            >
              <img src={photo.image} alt={photo.title} />

              <div className="photo-overlay">
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
                <span>Explore Gallery ↗</span>
              </div>
            </Link>
          ))}

        </div>

        <div className="photo-more">
          <Link to="/gallery" className="btn primary">
            View All Photographs →
          </Link>
        </div>

      </section>


      {/* MISSION SECTION */}
      <section className="section mission-section">

        <p className="eyebrow">OUR MISSION</p>

        <h2 className="section-title">
          Education can
          <span> change a future.</span>
        </h2>

        <div className="cards">

          <div className="card">
            <div className="icon">🎒</div>
            <h3>Learning Resources</h3>
            <p>
              Help children access books, school supplies
              and essential learning materials.
            </p>
          </div>

          <div className="card">
            <div className="icon">👩‍🎓</div>
            <h3>Empower Girls</h3>
            <p>
              Encourage families and communities to support
              girls in continuing their education.
            </p>
          </div>

          <div className="card">
            <div className="icon">🌱</div>
            <h3>Build Opportunities</h3>
            <p>
              Work towards better educational opportunities
              for children facing financial and social barriers.
            </p>
          </div>

        </div>
      </section>


      {/* CALL TO ACTION */}
      <section className="home-cta">

        <p className="eyebrow">BE A PART OF THE JOURNEY</p>

        <h2>Every little effort can make a difference.</h2>

        <p>
          Join us in supporting educational opportunities
          and a brighter future for children.
        </p>

        <div className="buttons">
          <Link to="/volunteer" className="btn primary">
            Become a Volunteer
          </Link>

          <Link to="/help" className="btn secondary">
            Request Educational Support
          </Link>
        </div>

      </section>

    </main>
  );
}

export default Home;
