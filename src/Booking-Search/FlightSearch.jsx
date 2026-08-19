import React, { useState, useRef, useEffect } from "react";
import { IoSearch, IoClose, IoCheckmarkCircle, IoSwapHorizontal } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePerson4 } from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import "../Booking-Search/Booking-CSS/FlightSearchCSS.css";

function FlightSearch() {

  const airportList = [
    { code: "DEL", city: "New Delhi", country: "India", airport: "Indira Gandhi International Airport" },
    { code: "BOM", city: "Mumbai", country: "India", airport: "Chhatrapati Shivaji Maharaj International Airport" },
    { code: "BLR", city: "Bengaluru", country: "India", airport: "Kempegowda International Airport" },
    { code: "MAA", city: "Chennai", country: "India", airport: "Chennai International Airport" },
    { code: "HYD", city: "Hyderabad", country: "India", airport: "Rajiv Gandhi International Airport" },
    { code: "CCU", city: "Kolkata", country: "India", airport: "Netaji Subhas Chandra Bose International Airport" },
    { code: "PNQ", city: "Pune", country: "India", airport: "Pune Airport" },
    { code: "AMD", city: "Ahmedabad", country: "India", airport: "Sardar Vallabhbhai Patel International Airport" },
    { code: "GOI", city: "Goa", country: "India", airport: "Dabolim Airport" },
    { code: "COK", city: "Kochi", country: "India", airport: "Cochin International Airport" },
    { code: "DXB", city: "Dubai", country: "UAE", airport: "Dubai International Airport" },
    { code: "AUH", city: "Abu Dhabi", country: "UAE", airport: "Zayed International Airport" },
    { code: "DOH", city: "Doha", country: "Qatar", airport: "Hamad International Airport" },
    { code: "SIN", city: "Singapore", country: "Singapore", airport: "Singapore Changi Airport" },
    { code: "BKK", city: "Bangkok", country: "Thailand", airport: "Suvarnabhumi Airport" },
    { code: "KUL", city: "Kuala Lumpur", country: "Malaysia", airport: "Kuala Lumpur International Airport" },
    { code: "HKG", city: "Hong Kong", country: "Hong Kong", airport: "Hong Kong International Airport" },
    { code: "NRT", city: "Tokyo", country: "Japan", airport: "Narita International Airport" },
    { code: "HND", city: "Tokyo", country: "Japan", airport: "Haneda Airport" },
    { code: "ICN", city: "Seoul", country: "South Korea", airport: "Incheon International Airport" },
    { code: "PEK", city: "Beijing", country: "China", airport: "Beijing Capital International Airport" },
    { code: "PVG", city: "Shanghai", country: "China", airport: "Shanghai Pudong International Airport" },
    { code: "LHR", city: "London", country: "United Kingdom", airport: "Heathrow Airport" },
    { code: "CDG", city: "Paris", country: "France", airport: "Charles de Gaulle Airport" },
    { code: "FRA", city: "Frankfurt", country: "Germany", airport: "Frankfurt Airport" },
    { code: "AMS", city: "Amsterdam", country: "Netherlands", airport: "Amsterdam Schiphol Airport" },
    { code: "JFK", city: "New York", country: "USA", airport: "John F. Kennedy International Airport" },
    { code: "LAX", city: "Los Angeles", country: "USA", airport: "Los Angeles International Airport" },
    { code: "YYZ", city: "Toronto", country: "Canada", airport: "Toronto Pearson International Airport" },
    { code: "SYD", city: "Sydney", country: "Australia", airport: "Sydney Kingsford Smith Airport" },
  ];

  const cabinOptions = [
    { key: "economy", title: "Economy/ Premium Economy", features: [] },
    { key: "premiumEconomy", title: "Premium Economy", features: ["Extra Legroom", "Extra Baggage", "Premium Meals"] },
    { key: "business", title: "Business Class", features: ["Luxury Lounges", "Cabin Comfort", "Premium Dining"] },
    { key: "first", title: "First Class", features: ["Private Suites", "Fine Dining", "Highly Personalised Service"] },
  ];

  // ---------- STATE ----------
  const [activeDropdown, setActiveDropdown] = useState(null); // 'from' | 'to' | 'travellers' | 'cabin' | null

  const [fromAirport, setFromAirport] = useState({ city: "Bengaluru", code: "BLR", airport: "Kempegowda International Airport" });
  const [toAirport, setToAirport] = useState({ city: "Delhi", code: "DEL", airport: "DEL, Delhi Airport India" });
  const [fromSearch, setFromSearch] = useState("");
  const [toSearch, setToSearch] = useState("");

  const [departureDate, setDepartureDate] = useState("2026-08-28");
  const [returnDate, setReturnDate] = useState("2026-08-28");

  const [travellers, setTravellers] = useState({ adults: 1, children: 0, infants: 0 });
  const [cabinClass, setCabinClass] = useState("premiumEconomy");

  // refs for outside-click detection + native date pickers
  const fromRef = useRef(null);
  const toRef = useRef(null);
  const travellersRef = useRef(null);
  const cabinRef = useRef(null);
  const departureInputRef = useRef(null);
  const returnInputRef = useRef(null);

  const closeDropdown = () => setActiveDropdown(null);
  const toggleDropdown = (name) => setActiveDropdown((prev) => (prev === name ? null : name));

  // close any open popup when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (!activeDropdown) return;
      const refMap = { from: fromRef, to: toRef, travellers: travellersRef, cabin: cabinRef };
      const currentRef = refMap[activeDropdown];
      if (currentRef && currentRef.current && !currentRef.current.contains(event.target)) {
        closeDropdown();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  // ---------- HELPERS ----------
  const filteredFromAirports = airportList.filter((a) => {
    const q = fromSearch.toLowerCase();
    return a.city.toLowerCase().includes(q) || a.code.toLowerCase().includes(q) || a.airport.toLowerCase().includes(q) || a.country.toLowerCase().includes(q);
  });

  const filteredToAirports = airportList.filter((a) => {
    const q = toSearch.toLowerCase();
    return a.city.toLowerCase().includes(q) || a.code.toLowerCase().includes(q) || a.airport.toLowerCase().includes(q) || a.country.toLowerCase().includes(q);
  });

  const selectFromAirport = (airport) => { setFromAirport(airport); setFromSearch(""); closeDropdown(); };
  const selectToAirport = (airport) => { setToAirport(airport); setToSearch(""); closeDropdown(); };

  const swapAirports = (e) => {
    e.stopPropagation();
    setFromAirport(toAirport);
    setToAirport(fromAirport);
    closeDropdown();
  };

  const updateTravellerCount = (type, value) => {
    setTravellers((prev) => ({ ...prev, [type]: value }));
  };

  const selectedCabin = cabinOptions.find((c) => c.key === cabinClass);
  const adultOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const childInfantOptions = [0, 1, 2, 3, 4, 5, 6];

  const formatDate = (isoDate) => {
    if (!isoDate) return { display: "Select date", weekday: "" };
    const d = new Date(isoDate + "T00:00:00");
    const day = d.toLocaleDateString("en-US", { day: "2-digit" });
    const month = d.toLocaleDateString("en-US", { month: "short" });
    const year = d.getFullYear().toString().slice(-2);
    const weekday = d.toLocaleDateString("en-US", { weekday: "long" });
    return { display: `${day} ${month}'${year}`, weekday };
  };

  const departureDisplay = formatDate(departureDate);
  const returnDisplay = formatDate(returnDate);

  const openDatePicker = (inputRef) => {
    if (!inputRef.current) return;
    if (typeof inputRef.current.showPicker === "function") {
      inputRef.current.showPicker();
    } else {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      {/* Trip type options */}
      <div className="trip-type-options">
        <input type="radio" id="oneWay" name="tripType" defaultChecked />
        <label htmlFor="oneWay" className="trip-type-option">One Way</label>

        <input type="radio" id="roundTrip" name="tripType" />
        <label htmlFor="roundTrip" className="trip-type-option">Round Trip</label>

        <input type="radio" id="multiCity" name="tripType" />
        <label htmlFor="multiCity" className="trip-type-option">Multi City</label>
      </div>

      {/* Search fields */}
      <div className="search-fields">

        {/* FROM + TO wrapped together so the swap button can sit on their shared border */}
        <div className="from-to-wrapper">

          {/* FROM */}
          <div className="From-block dropdown-wrapper" ref={fromRef}>
            <div onClick={() => toggleDropdown("from")}>
              <p className="FormText">From</p>
              <h2>{fromAirport.city}</h2>
              <p className="FormAirportName">{fromAirport.airport}</p>
            </div>

            {activeDropdown === "from" && (
              <div className="AirportMainDivDetails popup-animate">
                <div className="popup-header">
                  <h3>Select origin</h3>
                  <IoClose className="popup-close-icon" onClick={closeDropdown} />
                </div>

                <div className="SearchBarFromSection">
                  <IoSearch className="searchIcon" />
                  <input
                    type="text"
                    placeholder="Search city or airport"
                    className="FromInputTagSearchBar"
                    value={fromSearch}
                    onChange={(e) => setFromSearch(e.target.value)}
                    autoFocus
                  />
                </div>

                <div className="airport-list">
                  {filteredFromAirports.map((airport) => (
                    <div key={airport.code} className="airport-option" onClick={() => selectFromAirport(airport)}>
                      <div className="airport-code"><p>{airport.code}</p></div>
                      <div className="airport-details">
                        <h4>{airport.city}, <span>{airport.country}</span></h4>
                        <p>{airport.airport}</p>
                      </div>
                    </div>
                  ))}
                  {filteredFromAirports.length === 0 && <p className="no-results">No airports found</p>}
                </div>
              </div>
            )}
          </div>

          {/* SWAP BUTTON */}
          <button type="button" className="swap-btn" onClick={swapAirports} title="Swap origin and destination">
            <IoSwapHorizontal />
          </button>

          {/* TO */}
          <div className="To-block dropdown-wrapper" ref={toRef}>
            <div onClick={() => toggleDropdown("to")}>
              <p className="ToText">To</p>
              <h2>{toAirport.city}</h2>
              <p className="FormAirportName">{toAirport.airport}</p>
            </div>

            {activeDropdown === "to" && (
              <div className="AirportMainDivDetails popup-animate">
                <div className="popup-header">
                  <h3>Select destination</h3>
                  <IoClose className="popup-close-icon" onClick={closeDropdown} />
                </div>

                <div className="SearchBarFromSection">
                  <IoSearch className="searchIcon" />
                  <input
                    type="text"
                    placeholder="Search city or airport"
                    className="FromInputTagSearchBar"
                    value={toSearch}
                    onChange={(e) => setToSearch(e.target.value)}
                    autoFocus
                  />
                </div>

                <div className="airport-list">
                  {filteredToAirports.map((airport) => (
                    <div key={airport.code} className="airport-option" onClick={() => selectToAirport(airport)}>
                      <div className="airport-code"><p>{airport.code}</p></div>
                      <div className="airport-details">
                        <h4>{airport.city}, <span>{airport.country}</span></h4>
                        <p>{airport.airport}</p>
                      </div>
                    </div>
                  ))}
                  {filteredToAirports.length === 0 && <p className="no-results">No airports found</p>}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* DEPARTURE */}
        <div className="Departure" onClick={() => openDatePicker(departureInputRef)}>
          <div className="DateRow">
            <p className="DepartureText">Departure</p>
            <IoIosArrowDown className="date-arrow-icon" />
          </div>
          <h2>{departureDisplay.display}</h2>
          <p className="FormAirportName">{departureDisplay.weekday}</p>
          <input
            ref={departureInputRef}
            type="date"
            className="DepartureInputDateTag"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>

        {/* RETURN */}
        <div className="Departure" onClick={() => openDatePicker(returnInputRef)}>
          <div className="DateRow">
            <p className="DepartureText">Return</p>
            <IoIosArrowDown className="date-arrow-icon" />
          </div>
          <h2>{returnDisplay.display}</h2>
          <p className="FormAirportName">{returnDisplay.weekday}</p>
          <input
            ref={returnInputRef}
            type="date"
            className="DepartureInputDateTag"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>

        {/* TRAVELLERS */}
        <div className="PersonSeatSection dropdown-wrapper" ref={travellersRef}>
          <div
            className="PersonSeatSection-inner"
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown("travellers");
            }}
          >
            <div className="TravellersHeaderRow">
              <p className="TravellersLabel">Travellers</p>
              <IoIosArrowDown className="section-arrow-icon" />
            </div>

            <div className="TravellersCountsRow">
              <div className="Personsicons">
                <IoPersonOutline />
                <p className="TravellersText">{travellers.adults}</p>
              </div>
              <div className="Personsicons">
                <MdOutlinePerson4 />
                <p>{travellers.children}</p>
              </div>
              <div className="Personsicons">
                <LuBaby />
                <p>{travellers.infants}</p>
              </div>
            </div>
          </div>

          {activeDropdown === "travellers" && (
            <div className="travellers-popup popup-animate">
              <div className="popup-header">
                <h3>Travellers</h3>
                <IoClose className="popup-close-icon" onClick={closeDropdown} />
              </div>

              <div className="traveller-row">
                <p className="traveller-label">ADULTS (12y +)</p>
                <p className="traveller-sublabel">on the day of travel</p>
                <div className="traveller-count-options">
                  {adultOptions.map((n) => (
                    <button
                      key={n}
                      type="button"
                      className={`count-pill ${travellers.adults === n ? "active" : ""}`}
                      onClick={() => updateTravellerCount("adults", n)}
                    >
                      {n}
                    </button>
                  ))}
                  <button
                    type="button"
                    className={`count-pill ${travellers.adults > 9 ? "active" : ""}`}
                    onClick={() => updateTravellerCount("adults", 10)}
                  >
                    &gt;9
                  </button>
                </div>
              </div>

              <div className="traveller-row-double">
                <div className="traveller-row">
                  <p className="traveller-label">CHILDREN (2y - 12y)</p>
                  <p className="traveller-sublabel">on the day of travel</p>
                  <div className="traveller-count-options">
                    {childInfantOptions.map((n) => (
                      <button
                        key={n}
                        type="button"
                        className={`count-pill ${travellers.children === n ? "active" : ""}`}
                        onClick={() => updateTravellerCount("children", n)}
                      >
                        {n}
                      </button>
                    ))}
                    <button
                      type="button"
                      className={`count-pill ${travellers.children > 6 ? "active" : ""}`}
                      onClick={() => updateTravellerCount("children", 7)}
                    >
                      &gt;6
                    </button>
                  </div>
                </div>

                <div className="traveller-row">
                  <p className="traveller-label">INFANTS (below 2y)</p>
                  <p className="traveller-sublabel">on the day of travel</p>
                  <div className="traveller-count-options">
                    {childInfantOptions.map((n) => (
                      <button
                        key={n}
                        type="button"
                        className={`count-pill ${travellers.infants === n ? "active" : ""}`}
                        onClick={() => updateTravellerCount("infants", n)}
                      >
                        {n}
                      </button>
                    ))}
                    <button
                      type="button"
                      className={`count-pill ${travellers.infants > 6 ? "active" : ""}`}
                      onClick={() => updateTravellerCount("infants", 7)}
                    >
                      &gt;6
                    </button>
                  </div>
                </div>
              </div>

              <button type="button" className="apply-btn" onClick={closeDropdown}>
                APPLY
              </button>
            </div>
          )}
        </div>

        {/* CABIN CLASS */}
        <div className="cabinDiv dropdown-wrapper" ref={cabinRef}>
          <div onClick={() => toggleDropdown("cabin")}>
            <div className="CabinSection">
              <p>Cabin</p>
              <IoIosArrowDown className="section-arrow-icon" />
            </div>
            <h2>{selectedCabin.title}</h2>
          </div>

          {activeDropdown === "cabin" && (
            <div className="cabin-popup popup-animate">
              <div className="popup-header">
                <h3>Choose Cabin Class</h3>
                <IoClose className="popup-close-icon" onClick={closeDropdown} />
              </div>

              {cabinOptions.map((option) => (
                <div
                  key={option.key}
                  className={`cabin-option ${cabinClass === option.key ? "cabin-option-active" : ""}`}
                  onClick={() => { setCabinClass(option.key); closeDropdown(); }}
                >
                  <div className="cabin-option-radio">
                    <span className={`radio-circle ${cabinClass === option.key ? "radio-checked" : ""}`} />
                    <div>
                      <h4>{option.title}</h4>
                      {option.features.length > 0 && (
                        <div className="cabin-features">
                          {option.features.map((f) => (
                            <span key={f} className="cabin-feature">
                              <IoCheckmarkCircle className="cabin-feature-icon" />
                              {f}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default FlightSearch;