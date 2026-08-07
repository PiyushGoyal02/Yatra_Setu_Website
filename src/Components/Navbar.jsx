import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS_CODE/NavbarCSS.css";

function Navbar () {

  const Navigate = useNavigate();
  const [active, setActive] = useState("home");

  return (
    <div>
      {/* <p>Navbar</p> */}

      <div className="navbar-Container">
        <p className="navbar-Logo" onClick={() => Navigate('/homepage')}>YATRA <span className="Setu-Text">SETU</span></p>
        <div className="navbar-Links">
          <a className={`navbar-Link ${active === "home" ? "active" : ""}`} onClick={() => setActive("home")} href="/homepage">Home</a>
          <a className={`navbar-Link ${active === "hotel" ? "active" : ""}`} onClick={() => setActive("hotel")} href="#">Hotel</a>
          <a className={`navbar-Link ${active === "flights" ? "active" : ""}`} onClick={() => setActive("flights")} href="#">Flights</a>
          <a className={`navbar-Link ${active === "trains" ? "active" : ""}`} onClick={() => setActive("trains")} href="#">Trains</a>
          <a className={`navbar-Link ${active === "villa" ? "active" : ""}`} onClick={() => setActive("villa")} href="#">Villa & Homestays</a>
          <a className={`navbar-Link ${active === "holidays" ? "active" : ""}`} onClick={() => setActive("holidays")} href="#">Holidays Packages</a>
          <a className={`navbar-Link ${active === "about" ? "active" : ""}`} onClick={() => setActive("about")} href="/about">About</a>
          <a className={`navbar-Link ${active === "contact" ? "active" : ""}`} onClick={() => setActive("contact")} href="/contactUs">Contact Us</a>
        </div>

        <div className="navbar-Buttons">
          <button className="Login-button">Login</button>
          <button className="Signup-button">SignUp</button>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar;