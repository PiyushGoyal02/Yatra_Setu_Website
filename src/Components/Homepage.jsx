import Navbar from "./Navbar";
import { useState } from "react";
import "../CSS_CODE/HomapageCSS.css";
import HotelSearch from "../Booking-Search/HotelSearch";
import TrainSearch from "../Booking-Search/TrainSearch";
import VillaSearch from "../Booking-Search/VillaSearch";
import FlightSearch from "../Booking-Search/FlightSearch";
import PackageSearch from "../Booking-Search/PackageSearch";
import ExploreBanner from "../assets/Explore Image Banner.avif";
import HillsVideo from "../assets/WhatsApp Video 2026-08-04 at 22.48.21.mp4";
import VillaOrHomestay from "../assets/Villa & HomeStay.avif";
import LimitedTimeDeals from "../assets/Live Now- Limited-time.avif";
import ElevatedBusinessClass from "../assets/Business and Elentaded Class.avif";
import SingaporeSpecial from "../assets/Singapore Special.avif";
import StudentSale from "../assets/Live now Deals for student.jpg";
import SummerSale from "../assets/For Your Summer trip SBI.jpg";
import Amritara from "../assets/For Unforgetable Image.avif";
import IciciCard from "../assets/Apply for MakeMyTrip.avif";
import offerLogo from "../assets/offer.png"
import GooglePlay from "../assets/GooglePlayIcon.png"
import AppleStore from "../assets/AppleIcon.webp"
import QRImage from "../assets/QRImage.png"
import DifferentCities from "../assets/DifferentCities.png"

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
import Footer from "./Footer";

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

  const offers = [
    {
      id: 1,
      category: "DOM HOTELS",
      title: "On Your First Villa or Homestay Booking",
      description: "Enjoy FLAT 20% OFF* and find stays made for your kind of getaways.",
      code: "FIRSTHOMESTAY",
      buttonText: "BOOK NOW",
      image: VillaOrHomestay,
    },
    {
      id: 2,
      category: "DOM HOTELS",
      title: "Live Now: Limited-time Deals",
      description: "for quick weekend getaways.",
      code: "LASTMINUTE",
      buttonText: "BOOK NOW",
      image: LimitedTimeDeals,
    },
    {
      id: 3,
      category: "INTL FLIGHTS",
      title: "Enjoy an Elevated Business Class Experience",
      description: "with Special Benefits & Offers.",
      code: "FIRSTHOMESTAY",
      buttonText: "EXPLORE NOW",
      image: ElevatedBusinessClass,
    },
    {
      id: 4,
      category: "HOLIDAYS",
      title: "Singapore-special: Get 1 FREE* Activity",
      description: "on booking Disney Cruise Line Packages with us.",
      code: "FIRSTHOMESTAY",
      buttonText: "BOOK NOW",
      image: SingaporeSpecial,
    },
    {
      id: 5,
      category: "INTL FLIGHTS",
      title: "LIVE NOW: Deals for Students",
      description: "Up to 30% OFF* on International Flights, Hotels & More.",
      code: "FIRSTHOMESTAY",
      buttonText: "BOOK NOW",
      image: StudentSale,
    },
    {
      id: 6,
      category: "INTL FLIGHTS",
      title: "For Your Summer Trips: Grab Up to 25% OFF*",
      description: "on Flights, Hotels, Buses & Cabs.",
      code: "FIRSTHOMESTAY",
      buttonText: "BOOK NOW",
      image: SummerSale,
    },
    {
      id: 7,
      category: "DOM HOTELS",
      title: "FOR UNFORGETTABLE STAYS IN INDIA",
      description: "Book Amritara Hotels & Resorts @ Min 35% OFF*",
      code: "FIRSTHOMESTAY",
      buttonText: "VIEW DETAILS",
      image: Amritara,
    },
    {
      id: 8,
      category: "INTL FLIGHTS",
      title: "Apply for MakeMyTrip ICICI Bank Credit Card Now.",
      description: "Enjoy 6%* extra savings, every time you travel.",
      code: "FIRSTHOMESTAY",
      buttonText: "BOOK NOW",
      image: IciciCard,
    },
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

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Book Flights, Hotels, Trains &amp; Holiday Packages
          </h1>

          <p className="hero-subtitle">
            India's trusted travel companion — best prices, zero hassle, 24x7
            support.
          </p>

          {/* Service Tabs */}
          <div className="booking-card">
            <div className="search-Icons-Wrappers">
              {services.map(({ id, name, Icon }) => (
                <div
                  key={id}
                  className={`service-card ${activeService === id ? "active-service" : ""
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

      {/* Explore Image Banner */}
      <div>
        <img
          className="explore-banner"
          src={ExploreBanner}
          alt="Explore Banner"
        />
      </div>

      {/* Offer Section */}

      <div className="offer-section">

        <div className="offers-grid">
          {offers.map((offer) => (
            <div className="offer-card" key={offer.id}>
              <img src={offer.image} alt={offer.title} />

              <div className="offer-content">
                <div className="offer-header">
                  <span>{offer.category}</span>
                  <span>T&C'S APPLY</span>
                </div>

                <h2>{offer.title}</h2>

                <div className="offer-line"></div>

                  <p>{offer.description}</p>

                  <div className="offer-footer">
                    {offer.code && <span>Code: {offer.code}</span>}
                    <p>{offer.buttonText}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download Application Link Section */}
      <div className="LeftAndRightSide">
        {/* Left Side */}
        <div className="LeftSideContent">
          <img 
            src={offerLogo}
            alt="Offer-Logo"
            className="offerIcon"
          />
          <div>
            <h2>Download App Now !</h2>
            <p>Use code WELCOMEMMT and get FLAT 25% OFF* on your first Hotel booking</p>
          </div>

        </div>

        {/* Right Side */}
          <div className="ImportantImages">
            <div className="TwoBlackLogo">
              <img
                src={GooglePlay}
                alt="Google Play"
                className="GooglePlay Img"
              />
              
              <img
                src={AppleStore}
                alt="Apple Store"
                className="AppleStore Img"
              />
            </div>

            <img
              src={QRImage}
              alt="OR Image"
              className="QRImage imgQR"
            />
          </div>
      </div>

      {/* Different Cities Image */}
      <div>
        <img
          src={DifferentCities}
          alt="Different Cities"
          className=" CitiesImages"
        />
      </div>
 
      <Footer/>
    </>
  );
}

export default Homepage;