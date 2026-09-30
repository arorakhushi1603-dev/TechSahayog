import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            TECHSAHAYOG • NGO COMMUNITY PLATFORM
          </p>

          <h1>
            Technology for
            <span> Community.</span>
          </h1>

          <p className="hero-text">
            A digital platform connecting NGOs, volunteers,
            members, donors and communities to create meaningful
            social impact.
          </p>

          <div className="buttons">

            <Link to="/help" className="btn primary">
              Get Help
            </Link>

            <Link
              to="/volunteer"
              className="btn secondary"
            >
              Become a Volunteer
            </Link>

          </div>

        </div>

        <div className="hero-card">

          <div className="hero-icon">
            🤝
          </div>

          <h2>
            Together we can create change.
          </h2>

          <p>
            Connect • Support • Participate
          </p>

        </div>

      </section>


      <section className="section">

        <p className="eyebrow">
          OUR PURPOSE
        </p>

        <h2 className="section-title">
          Connecting people with
          <span> meaningful action.</span>
        </h2>

        <div className="cards">

          <div className="card">
            <div className="icon">🆘</div>

            <h3>Get Help</h3>

            <p>
              Submit a support request and connect
              with the NGO.
            </p>

            <Link to="/help" className="card-link">
              Request Support →
            </Link>
          </div>


          <div className="card">
            <div className="icon">🤝</div>

            <h3>Volunteer</h3>

            <p>
              Register as a volunteer and participate
              in community activities.
            </p>

            <Link to="/volunteer" className="card-link">
              Join Us →
            </Link>
          </div>


          <div className="card">
            <div className="icon">💚</div>

            <h3>Support</h3>

            <p>
              Support social initiatives and contribute
              to positive community development.
            </p>

            <Link to="/donation" className="card-link">
              Support Us →
            </Link>
          </div>

        </div>

      </section>


      <section className="impact">

        <div>
          <strong>500+</strong>
          <p>People Reached</p>
        </div>

        <div>
          <strong>50+</strong>
          <p>Volunteers</p>
        </div>

        <div>
          <strong>25+</strong>
          <p>Activities</p>
        </div>

        <div>
          <strong>10+</strong>
          <p>Programs</p>
        </div>

      </section>
    </>
  );
}

export default Home;