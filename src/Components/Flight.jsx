import React from "react";
import Navbar from "./Navbar";
import "../CSS_CODE/FlightCSS.css"
import Footer from "../Components/Footer"
import FlightJSONDetails from "../Custom-Hook/getFlightJSONData";
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

  const { flightGet = [] } = FlightJSONDetails();
  console.log(flightGet);

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
            {Array.isArray(flightGet) &&
              flightGet.map((flight, flightIndex) => {
                const airlineList = Array.isArray(flight?.airline)
                  ? flight.airline
                  : flight?.airline ? [flight.airline] : [];

                const departureList = Array.isArray(flight?.departure)
                  ? flight.departure
                  : flight?.departure ? [flight.departure] : [];

                const arrivalList = Array.isArray(flight?.arrival)
                  ? flight.arrival
                  : flight?.arrival ? [flight.arrival] : [];

                const stopsList = Array.isArray(flight?.stops)
                  ? flight.stops
                  : flight?.stops ? [flight.stops] : [];

                const pricingList = Array.isArray(flight?.pricing)
                  ? flight.pricing
                  : flight?.pricing ? [flight.pricing] : [];

                const amenitiesList = Array.isArray(flight?.amenities)
                  ? flight.amenities
                  : flight?.amenities ? [flight.amenities] : [];

                const airline = airlineList[0] || {};
                const departure = departureList[0] || {};
                const arrival = arrivalList[0] || {};
                const pricing = pricingList[0] || {};
                const stop = stopsList[0];

                const departureTime =
                  departure?.time ??
                  departure?.departureTime ??
                  flight?.departureTime ??
                  "";

                const departureAirport =
                  departure?.airportCode ??
                  departure?.airport ??
                  departure?.code ??
                  flight?.departureAirport ??
                  "";

                const arrivalTime =
                  arrival?.time ??
                  arrival?.arrivalTime ??
                  flight?.arrivalTime ??
                  "";

                const arrivalAirport =
                  arrival?.airportCode ??
                  arrival?.airport ??
                  arrival?.code ??
                  flight?.arrivalAirport ??
                  "";

                const totalPrice =
                  pricing?.totalPrice ??
                  pricing?.total ??
                  pricing?.price ??
                  flight?.totalPrice ??
                  flight?.price ??
                  "";

                const stopType =
                  typeof stop === "object"
                    ? stop?.type ?? stop?.stopType ?? stop?.name ?? ""
                    : stop ?? "";

                return (
                  <div
                    className="singleFlightDetailsDiv"
                    key={flight?._id || flight?.id || flightIndex}
                  >
                    <div className="CodeAndName">
                      <p className="airlineCode">{airline?.code ?? ""}</p>
                      <p className="airlineName">{airline?.name ?? ""}</p>
                    </div>

                    <div className="ToFromDivSection">
                      <div className="DepartureTime-DepartureCity">
                        <p className="flightDepartureText">{departureTime}</p>
                        <p className="flightDepartureCity">{departureAirport}</p>
                      </div>

                      <div className="dotLineDiv">
                        <p className="flightDuration">{flight?.duration ?? ""}</p>

                        <div className="flightDotLineSection">
                          <span className="orangeDotSpan"></span>
                          <span className="FlightLineDuration"></span>
                          <span className="orangeDotSpan"></span>
                        </div>

                        {stopType && (
                          <p className="flightStops">{stopType}</p>
                        )}
                      </div>

                      <div className="flightArrivalTimeAndCity">
                        <p className="flightArrivalTime">{arrivalTime}</p>
                        <p className="flightArrivalCity">{arrivalAirport}</p>
                      </div>
                    </div>

                    <div className="flightPriceDetails">
                      <p className="flightPrice">
                        {totalPrice !== "" ? `₹${totalPrice}` : ""}
                      </p>

                      <p className="perTraveller">
                        {flight?.priceLabel ?? "per traveller"}
                      </p>

                      <div className="tagLineClassDiv">
                        {amenitiesList.map((tag, tagIndex) => {
                          const tagText =
                            typeof tag === "object"
                              ? tag?.name ?? tag?.label ?? tag?.type ?? ""
                              : tag;

                          return (
                            <p
                              className="tagsClass"
                              key={
                                tag?._id ||
                                tag?.id ||
                                `${tagText}-${tagIndex}`
                              }
                            >
                              {tagText}
                            </p>
                          );
                        })}
                      </div>

                      <button className="flightSubmitButton">
                        {flight?.buttonText ?? "Select"}
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Flight;