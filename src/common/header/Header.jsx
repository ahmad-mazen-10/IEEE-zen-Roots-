import "./header.css";
import { Link } from "react-router-dom";
import { zenRooteLogo } from "../../assets";
import { useState } from "react";

function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);


  return (
    <header className="header">
      <div>
        <Link to="/" className="logo">
          <img src={zenRooteLogo} alt="zenRooteLogo" />
          <h5>Zen Roots</h5>
        </Link>
      </div>

      <div className="navigation">
        <Link to="/" className="route">
          Home
        </Link>
        <Link to="/services" className="route">
          Services
        </Link>
        <Link to="/about" className="route">
          About Us
        </Link>
        <Link to="/contact" className="route">
          Contact
        </Link>
      </div>

      <button className="btn-1">Sign Up</button>
      <button className="menu-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;
