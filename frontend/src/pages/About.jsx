function About() {
  return (
    <section className="page">

      <p className="eyebrow">
        ABOUT TECHSAHAYOG
      </p>

      <h1>
        Working together for
        <span> social impact.</span>
      </h1>

      <p>
        TechSahayog is a digital platform designed to
        improve communication between the NGO,
        volunteers, members and the community.
      </p>

      <div className="cards">

        <div className="card">
          <div className="icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            Support community initiatives and make
            social services easier to access.
          </p>
        </div>

        <div className="card">
          <div className="icon">🌱</div>
          <h3>Our Vision</h3>
          <p>
            Use technology to strengthen community
            participation and social development.
          </p>
        </div>

        <div className="card">
          <div className="icon">🤝</div>
          <h3>Our Approach</h3>
          <p>
            Connect people, information and NGO
            activities through one platform.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;