import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <Link to="/" className="logo">
        🌱 TechSahayog
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/help">Get Help</Link>
        <Link to="/volunteer">Volunteer</Link>
        <Link to="/member">Membership</Link>
        <Link to="/events">Events</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>

    </header>
  );
}

export default Navbar;