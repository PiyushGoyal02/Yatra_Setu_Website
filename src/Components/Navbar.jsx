import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../CSS_CODE/NavbarCSS.css";

function Navbar() {
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="navbar-Container">
      <a href="/homepage" className="navbar-Logo">
        YATRA <span className="Setu-Text">SETU</span>
      </a>

      <div className="navbar-Links">
        <a
          className={`navbar-Link ${getActiveClass("/homepage")}`}
          href="/homepage"
        >
          Home
        </a>

        <a
          className={`navbar-Link ${getActiveClass("/hotel")}`}
          href="/hotel"
        >
          Hotel
        </a>

        <a
          className={`navbar-Link ${getActiveClass("/flights")}`}
          href="/flights"
        >
          Flights
        </a>

        <a
          className={`navbar-Link ${getActiveClass("/trains")}`}
          href="/trains"
        >
          Trains
        </a>

        <a
          className={`navbar-Link ${getActiveClass("/villa")}`}
          href="/villa"
        >
          Villa & Homestays
        </a>

        <a
          className={`navbar-Link ${getActiveClass("/holidays")}`}
          href="/holidays"
        >
          Holidays Packages
        </a>

        <a
          className={`navbar-Link ${getActiveClass("/about")}`}
          href="/about"
        >
          About
        </a>

        <a
          className={`navbar-Link ${getActiveClass("/contactUs")}`}
          href="/contactUs"
        >
          Contact Us
        </a>
      </div>

      <div className="navbar-Buttons">
        <button className="Login-button">Login</button>
        <button className="Signup-button">SignUp</button>
      </div>
    </div>
  );
}

export default Navbar;