import React from "react";
import Navbar from "./Navbar";
import "../CSS_CODE/FlightCSS.css"
import Footer from "../Components/Footer"
import flightLandingTakeoff from "../assets/flightLanding&Takeoff.mp4"

function Flight() {

  const filters = [
    {
      category: "starRating",
      title: "STOP",
      options: [
        { id: 1, label: "Non-stop" },
        { id: 2, label: "Four Star" },
        { id: 3, label: "Three Star" },
        { id: 4, label: "Two Star" },
      ],
    },
    {
      category: "propertyType",
      title: "Departure Time",
      options: [
        { id: 1, label: "Before 6 AM" },
        { id: 2, label: "6 AM - 12 PM" },
        { id: 3, label: "12 PM - 6 PM" },
        { id: 4, label: "After 6PM" },
      ],
    },
    {
      category: "amenities",
      title: "Airlines",
      options: [
        { id: 1, label: "IndiGo" },
        { id: 2, label: "Air India" },
        { id: 3, label: "Vistara" },
        { id: 4, label: "SpiceJet" },
        { id: 5, label: "Akasa Air" },
        { id: 6, label: "Emirates" },
      ],
    },
    {
      category: "guestRating",
      title: "Fare Type",
      options: [
        { id: 1, label: "Refundable" },
        { id: 2, label: "Free Cancellation" },
      ],
    },
  ];

  const flightsDetails = [
    {
      id: 1,
      airlineCode: "6E",
      airlineName: "IndiGo",
      airlineColor: "#12365b",
      departureTime: "06:15",
      departureCity: "DEL",
      duration: "2h 10m",
      stops: "Non-stop",
      arrivalTime: "08:25",
      arrivalCity: "BOM",
      price: 2899,
      priceLabel: "per traveller",
      tags: [
        "Refundable",
        "7 kg cabin"
      ],
      buttonText: "Select"
    },
    {
      id: 2,
      airlineCode: "AI",
      airlineName: "Air India",
      airlineColor: "#d7193f",
      departureTime: "09:40",
      departureCity: "DEL",
      duration: "2h 25m",
      stops: "Non-stop",
      arrivalTime: "12:05",
      arrivalCity: "BOM",
      price: 3450,
      priceLabel: "per traveller",
      tags: [
        "Meal Included",
        "15 kg check-in"
      ],
      buttonText: "Select"
    },
    {
      id: 3,
      airlineCode: "UK",
      airlineName: "Vistara",
      airlineColor: "#7040a8",
      departureTime: "11:20",
      departureCity: "DEL",
      duration: "4h 50m",
      stops: "1 Stop · BLR",
      arrivalTime: "16:10",
      arrivalCity: "BOM",
      price: 4120,
      priceLabel: "per traveller",
      tags: [
        "Extra Legroom",
        "Free Cancellation"
      ],
      buttonText: "Select"
    },
    {
      id: 4,
      airlineCode: "SG",
      airlineName: "SpiceJet",
      airlineColor: "#efa52f",
      departureTime: "18:05",
      departureCity: "DEL",
      duration: "2h 15m",
      stops: "Non-stop",
      arrivalTime: "20:20",
      arrivalCity: "BOM",
      price: 2650,
      priceLabel: "per traveller",
      tags: [
        "Lowest Fare",
        "7 kg cabin"
      ],
      buttonText: "Select"
    },
    {
      id: 5,
      airlineCode: "AI",
      airlineName: "Air India",
      airlineColor: "#d7193f",
      departureTime: "09:40",
      departureCity: "DEL",
      duration: "2h 25m",
      stops: "Non-stop",
      arrivalTime: "12:05",
      arrivalCity: "BOM",
      price: 3450,
      priceLabel: "per traveller",
      tags: [
        "Meal Included",
        "15 kg check-in"
      ],
      buttonText: "Select"
    },
    {
      id: 6,
      airlineCode: "UK",
      airlineName: "Vistara",
      airlineColor: "#7040a8",
      departureTime: "11:20",
      departureCity: "DEL",
      duration: "4h 50m",
      stops: "1 Stop · BLR",
      arrivalTime: "16:10",
      arrivalCity: "BOM",
      price: 4120,
      priceLabel: "per traveller",
      tags: [
        "Extra Legroom",
        "Free Cancellation"
      ],
      buttonText: "Select"
    },
    {
      id: 7,
      airlineCode: "SG",
      airlineName: "SpiceJet",
      airlineColor: "#efa52f",
      departureTime: "18:05",
      departureCity: "DEL",
      duration: "2h 15m",
      stops: "Non-stop",
      arrivalTime: "20:20",
      arrivalCity: "BOM",
      price: 2650,
      priceLabel: "per traveller",
      tags: [
        "Lowest Fare",
        "7 kg cabin"
      ],
      buttonText: "Select"
    }
  ];

  return (
    <div>
      <Navbar />

      <div>
        <video className="flightLandingTakeOff" autoPlay loop muted playsInline>
          <source src={flightLandingTakeoff} type="video/mp4" />
        </video>

        <div className="FlightVideoTextDiv">
          <h1> Next Stay Starts Here</h1>
          <p> Find hotels, resorts & guest houses in 5,000+ cities.</p>
        </div>
      </div>

      <div className="LeftRightFlightSection">

        {/* Left Side Filter Section Content */}
        <div>
          <div className="FilterLeftSide">

            <h4>Filter Flights</h4>

            <hr />

            <div className="filterContainer">

              <div className="priceRangeDiv">
                <div className="priceRangeHeader">
                  <label htmlFor="priceRange" className="priceRangeLabel">
                    Price per night
                  </label>

                  <span className="priceRangeValue">₹Price</span>
                </div>

                <input
                  id="priceRange"
                  type="range"
                  className="priceRangeTag"
                  min="1000"
                  max="15000"
                  step="1000"
                  // value={price}
                  // onChange={(e) => setPrice(Number(e.target.value))}
                  aria-label="Maximum price per night"
                />

                <div className="priceRangeLimits">
                  <span>₹1,000</span>
                  <span>₹15,000+</span>
                </div>
              </div>
              {filters.map((filter) => (
                <div className="filterSection" key={filter.category}>
                  <h5>{filter.title}</h5>

                  {filter.options.map((option) => (
                    <label key={option.id} className="filterOption">
                      <input
                        type="checkbox"
                        className="starCheckBoxTag"
                      />

                      <span className="spanStarDetails">
                        <span className="starSpan">
                          {option.stars}
                        </span>

                        <span className="starLabel">
                          {option.label}
                        </span>

                        <span className="starTextCount">
                          {option.count && ` (${option.count})`}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              ))}


            </div>
          </div>
        </div>


        {/* Right Side Flights Section */}
        <div>

          <div className="TagsHeaderCodeDiv">

            <div className="HotelCitiesDate">

              <h4>Delhi (DEL) → Mumbai (BOM)</h4>
              <p>Thu, 21 Aug 2026 · 1 Traveller, Economy · 64 flights found</p>

            </div>

            <div className="TagsForPriceLayouts">

              <p className="TagsForPriceLayout">Cheapest</p>
              <p className="TagsForPriceLayout">Fastest</p>
              <p className="TagsForPriceLayout">Departure Time</p>

            </div>

          </div>

          <div className="flightSearchDetails">

            {
              flightsDetails.map((flight) => {
                return (
                  <div className="singleFlightDetailsDiv" key={flight.id}>

                    <div className="CodeAndName">
                      <p className="airlineCode">{flight.airlineCode}</p>
                      <p className="airlineName">{flight.airlineName}</p>
                    </div>

                    <div className="ToFromDivSection">

                      <div className="DepartureTime-DepartureCity">
                        <p className="flightDepartureText">{flight.departureTime}</p>
                        <p className="flightDepartureCity">{flight.departureCity}</p>
                      </div>

                      <div className="dotLineDiv">
                        <p className="flightDuration">{flight.duration}</p>

                        <div className="flightDotLineSection">
                          <span className="orangeDotSpan"></span>
                          <span className="FlightLineDuration"></span>
                          <span className="orangeDotSpan"></span>
                        </div>

                        <p className="flightStops">{flight.stops}</p>
                      </div>

                      <div className="flightArrivalTimeAndCity">
                        <p className="flightArrivalTime">{flight.arrivalTime}</p>
                        <p className="flightArrivalCity">{flight.arrivalCity}</p>
                      </div>
                    </div>

                    <div className="flightPriceDetails">
                      <p className="flightPrice">{flight.price}</p>
                      <p className="perTraveller">{flight.priceLabel}</p>
                      <div className="tagLineClassDiv">
                        {flight.tags.map((tag) => (
                          <p className="tagsClass" key={tag}>{tag}</p>
                        ))}
                      </div>
                      <button className="flightSubmitButton">{flight.buttonText}</button>
                    </div>

                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Flight;