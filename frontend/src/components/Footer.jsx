
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND SECTION */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            🌱 Har Ghar <span>Shiksha</span>
          </Link>

          <p>
            Education for every child. A brighter future for every girl.
            Together, we can make learning accessible to everyone.
          </p>

          <a
            href="https://www.instagram.com/reena.tanwar.925?stkn=MWU3b2h6NnFxaGR2NA%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
          >
            📸 Follow us on Instagram
          </a>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/gallery">Our Gallery</Link>
          <Link to="/events">Events</Link>
        </div>

        {/* GET INVOLVED */}
        <div className="footer-column">
          <h3>Get Involved</h3>
          <Link to="/help">Get Support</Link>
          <Link to="/volunteer">Become a Volunteer</Link>
          <Link to="/member">Membership</Link>
          <Link to="/donation">Support Education</Link>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© 2026 Har Ghar Shiksha. All Rights Reserved.</p>
        <p>Made with 💗 for a brighter tomorrow.</p>
      </div>

    </footer>
  );
}

export default Footer;
