import Navbar from "./Navbar";
import { useState } from "react";
import "../CSS_CODE/HomapageCSS.css";
import HotelSearch from "../Booking-Search/HotelSearch";
import TrainSearch from "../Booking-Search/TrainSearch";
import VillaSearch from "../Booking-Search/VillaSearch";
import FlightSearch from "../Booking-Search/FlightSearch";
import PackageSearch from "../Booking-Search/PackageSearch";
import HillsVideo from "../assets/WhatsApp Video 2026-08-04 at 22.48.21.mp4";

import {
  Plane,
  Building2,
  Home,
  Umbrella,
  TrainFront,
  Bus,
  Car,
  Compass,
  BookText,
  Ship,
  Wallet,
  ShieldCheck,
} from "lucide-react";

function Homepage() {
  const [activeService, setActiveService] = useState("flight");

  // Full service list — matches MakeMyTrip-style top navigation
  const services = [
    { id: "flight", name: "Flights", Icon: Plane },
    { id: "hotel", name: "Hotels", Icon: Building2 },
    { id: "villa", name: "Villas & Homestays", Icon: Home },
    { id: "package", name: "Holiday Packages", Icon: Umbrella },
    { id: "train", name: "Trains", Icon: TrainFront },
    { id: "bus", name: "Buses", Icon: Bus },
    { id: "cab", name: "Cabs", Icon: Car },
    { id: "tours", name: "Tours & Attractions", Icon: Compass },
    { id: "visa", name: "Visa", Icon: BookText },
    { id: "cruise", name: "Cruise", Icon: Ship },
    { id: "forex", name: "Forex Card & Currency", Icon: Wallet },
    { id: "insurance", name: "Travel Insurance", Icon: ShieldCheck },
  ];

  // Renders the correct search panel for the active tab.
  // Modules still being built show a lightweight "coming soon" placeholder
  // so the tab row stays fully clickable during development.
  const renderSearchPanel = () => {
    switch (activeService) {
      case "flight":
        return <FlightSearch />;
      case "hotel":
        return <HotelSearch />;
      case "villa":
        return <VillaSearch />;
      case "package":
        return <PackageSearch />;
      case "train":
        return <TrainSearch />;
      default:
        return (
          <div className="coming-soon">
            <p>This service is coming soon.</p>
            <span>We're building it — check back shortly.</span>
          </div>
        );
    }
  };

  return (
    <>
      <Navbar />

      <div className="home-container">
        <video className="HillsVideo" autoPlay loop muted playsInline>
          <source src={HillsVideo} type="video/mp4" />
        </video>

        <div className="hero-content">
          <h1 className="hero-title">
            Book Flights, Hotels, Trains &amp; Holiday Packages
          </h1>

          <p className="hero-subtitle">
            India's trusted travel companion — best prices, zero hassle, 24x7
            support.
          </p>

          <div className="booking-card">
            <div className="search-Icons-Wrappers">
              {services.map(({ id, name, Icon }) => (
                <div
                  key={id}
                  className={`service-card ${
                    activeService === id ? "active-service" : ""
                  }`}
                  onClick={() => setActiveService(id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActiveService(id);
                  }}
                >
                  <Icon className="search-icon" strokeWidth={1.6} />
                  <p>{name}</p>
                </div>
              ))}
            </div>

            <div className="search-wrapper">{renderSearchPanel()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;