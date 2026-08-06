import React from "react";
import Navbar from "./Navbar";
import "../CSS_CODE/AboutCSS.css"
import Footer from "./Footer"
import LiveGlobe from "../assets/LiveGlobeVideo.mp4"

function About() {

  const services = [
    {
      heading: "Trust First",
      text: "Every hotel, airline, and travel partner is carefully verified to ensure a safe and reliable booking experience."
    },
    {
      heading: "Customer First",
      text: "Our dedicated travel experts are available 24×7 to assist you before, during, and after your journey."
    },
    {
      heading: "Best Value",
      text: "Enjoy competitive prices, exclusive deals, and maximum savings without compromising on quality."
    },
    {
      heading: "Simple Experience",
      text: "Book flights, hotels, trains, villas, and holiday packages in just a few clicks with a seamless experience."
    }
  ];
  return (
    <div>
      <Navbar />

      <div className="HeaderSectionDiv">
        <h2 className="AboutYatraSetu">About YatraSetu</h2>
        <p className="IndianFastestText">India's fastest growing travel platform, making booking flights, hotels, trains, villas & <br /> holidays simple, safe and affordable for everyone.</p>

        <div className="ratingSectionDiv">
          <div className="rating">
            <p>50L+</p>
            <span>Monthly Travellers</span>
          </div>

          <div className="rating">
            <p>5,000+</p>
            <span>Cities Covered</span>
          </div>

          <div className="rating">
            <p>1,00,000+</p>
            <span>Hotels & Stays</span>
          </div>

          <div className="rating">
            <p>4.6★</p>
            <span>Customer Rating</span>
          </div>
        </div>
      </div>

      <div className="OurStoryDiv">

        {/* Left */}
        <div className="StoryContent">
          <p className="OurStry">Our Story</p>

          <p className="Thought">
            YatraSetu started with one simple idea — travel booking shouldn't be complicated. The name itself reflects our purpose: Yatra means journey, and Setu means bridge. We exist to be that bridge between travellers and the journeys they dream of, removing every unnecessary step in between.

            What began as a small flight-booking service has grown into a complete travel platform covering flights, hotels, trains, villas, homestays and holiday packages — all in one place.

            We work with thousands of verified hotels, airlines and local hosts to bring our travellers the best prices without compromising on trust or safety. Every listing on YatraSetu goes through a verification process, because we believe a good price means nothing if it isn't backed by reliability.

            Today, lakhs of travellers rely on YatraSetu every month to plan everything from a weekend getaway to a full family holiday abroad — and we're just getting started.
          </p>
        </div>

        {/* Right */}
        <div className="VideoContainer">
          <video
            className="LiveGlobe"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={LiveGlobe} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>

      <div className="StandForSection">

        <h2 className="SectionTitle">What We Stand For</h2>

        <div className="ServicesDiv">
          {services.map((service, index) => (
            <div className="ServicesContant" key={index}>
              <h5>{service.heading}</h5>
              <p>{service.text}</p>
            </div>
          ))}
        </div>

      </div>

      <Footer/>
    </div>
  )
}

export default About;