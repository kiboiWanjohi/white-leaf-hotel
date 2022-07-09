import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav>
      <h3>The Leaf Hotel</h3>
      <ul className="nav-links">
        <Link to="/Homepage" style={navStyle}>
          <li>Home</li>
        </Link>
        <Link to="/Hotel" style={navStyle}>
          <li>Hotel</li>
        </Link>
        <Link to="/Restaurant" style={navStyle}>
          <li>Restaurant</li>
        </Link>
        <Link to="/Contact" style={navStyle}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
