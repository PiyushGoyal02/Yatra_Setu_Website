// import { useState } from "react";
// import "../CSS_CODE/FlightSearchCSS.css";
// import {
//   ArrowLeftRight,
//   ChevronDown,
//   User,
//   Baby,
//   Smile,
//   ShieldCheck,
//   PlaneTakeoff,
// } from "lucide-react";

// const specialFares = [
//   { id: "regular", label: "Regular", note: "Regular fares" },
//   { id: "student", label: "Student", note: "Extra discounts/baggage" },
//   { id: "armed", label: "Armed Forces", note: "Up to ₹600 off" },
//   { id: "gst", label: "Have a GST number?", note: "Upto 10% Extra Savings!", tag: "new" },
//   { id: "senior", label: "Senior Citizen", note: "Up to ₹600 off" },
//   { id: "medical", label: "Doctors and Nurses", note: "Up to ₹600 off" },
// ];

// function FlightSearch() {
//   const [tripType, setTripType] = useState("oneway");
//   const [selectedFare, setSelectedFare] = useState("regular");
//   const [priceDrop, setPriceDrop] = useState(false);
//   const [from, setFrom] = useState({ city: "Delhi", code: "DEL, Delhi Airport India" });
//   const [to, setTo] = useState({ city: "Bengaluru", code: "BLR, Bengaluru International A..." });

//   const swapCities = () => {
//     setFrom(to);
//     setTo(from);
//   };

//   const handleSearch = () => {
//     alert(
//       `Searching ${tripType} flights: ${from.city} → ${to.city}\n(This is a UI demo — wire this up to your flight search API.)`
//     );
//   };

//   return (
//     <div className="flight-search">
//       {/* Trip type row */}
//       <div className="trip-type-row">
//         <div className="trip-type-options">
//           <label className={`radio-pill ${tripType === "oneway" ? "checked" : ""}`}>
//             <input
//               type="radio"
//               name="tripType"
//               checked={tripType === "oneway"}
//               onChange={() => setTripType("oneway")}
//             />
//             One Way
//           </label>
//           <label className={`radio-pill ${tripType === "roundtrip" ? "checked" : ""}`}>
//             <input
//               type="radio"
//               name="tripType"
//               checked={tripType === "roundtrip"}
//               onChange={() => setTripType("roundtrip")}
//             />
//             Round Trip
//           </label>
//           <label className={`radio-pill ${tripType === "multicity" ? "checked" : ""}`}>
//             <input
//               type="radio"
//               name="tripType"
//               checked={tripType === "multicity"}
//               onChange={() => setTripType("multicity")}
//             />
//             Multi City
//           </label>
//         </div>
//         <span className="intl-note">Book International and Domestic Flights</span>
//       </div>

//       {/* Main search fields */}
//       <div className="fields-row">
//         <div className="field-block grow">
//           <span className="field-label">From</span>
//           <strong className="field-value">{from.city}</strong>
//           <span className="field-sub">{from.code}</span>
//         </div>

//         <button className="swap-circle" onClick={swapCities} aria-label="Swap cities">
//           <ArrowLeftRight size={18} />
//         </button>

//         <div className="field-block grow">
//           <span className="field-label">To</span>
//           <strong className="field-value">{to.city}</strong>
//           <span className="field-sub">{to.code}</span>
//         </div>

//         <div className="field-block">
//           <span className="field-label">
//             Departure <ChevronDown size={14} />
//           </span>
//           <strong className="field-value">
//             <span className="date-num">5</span> Aug&apos;26
//           </strong>
//           <span className="field-sub">Wednesday</span>
//         </div>

//         <div className={`field-block ${tripType !== "roundtrip" ? "muted-field" : ""}`}>
//           <span className="field-label">
//             Return <ChevronDown size={14} />
//           </span>
//           {tripType === "roundtrip" ? (
//             <>
//               <strong className="field-value">12 Aug&apos;26</strong>
//               <span className="field-sub">Wednesday</span>
//             </>
//           ) : (
//             <span className="tap-hint">Tap to add a return date for bigger discounts</span>
//           )}
//         </div>

//         <div className="field-block">
//           <span className="field-label">
//             Travellers <ChevronDown size={14} />
//           </span>
//           <div className="traveller-row">
//             <span><User size={14} /> 1</span>
//             <span><Baby size={14} /> 0</span>
//             <span><Smile size={14} /> 0</span>
//           </div>
//         </div>

//         <div className="field-block">
//           <span className="field-label">
//             Cabin Class <ChevronDown size={14} />
//           </span>
//           <strong className="field-value small">Economy/ Premium...</strong>
//         </div>
//       </div>

//       {/* Special fares + Quick tools */}
//       <div className="fare-tools-row">
//         <div className="special-fares">
//           <h4>Select a special fare</h4>
//           <div className="fare-chip-row">
//             {specialFares.map((fare) => (
//               <button
//                 key={fare.id}
//                 className={`fare-box ${selectedFare === fare.id ? "selected" : ""}`}
//                 onClick={() => setSelectedFare(fare.id)}
//               >
//                 <span className="fare-title">
//                   {fare.label} {fare.tag && <span className="new-tag">{fare.tag}</span>}
//                 </span>
//                 <span className="fare-note">{fare.note}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="quick-tools">
//           <h4>Quick Tools</h4>
//           <button className="tool-box">
//             <PlaneTakeoff size={20} />
//             Flight Tracker
//           </button>
//         </div>
//       </div>

//       {/* Price drop protection */}
//       <label className="price-drop-row">
//         <input
//           type="checkbox"
//           checked={priceDrop}
//           onChange={() => setPriceDrop(!priceDrop)}
//         />
//         <ShieldCheck size={18} className="shield-icon" />
//         <span>
//           <strong>Add Price Drop Protection</strong> If the price drops, we&apos;ll refund the
//           difference. <a href="#!" onClick={(e) => e.preventDefault()}>View Details</a>
//         </span>
//       </label>

//       {/* Search button */}
//       <button className="search-btn" onClick={handleSearch}>
//         SEARCH
//       </button>
//     </div>
//   );
// }

// export default FlightSearch;

// import React from "react";
// import "../CSS_CODE/FlightSearchCSS.css";

// function FlightSearch() {

//   const airportList = [
//   {
//     code: "DEL",
//     city: "New Delhi",
//     country: "India",
//     airport: "Indira Gandhi International Airport",
//   },
//   {
//     code: "BOM",
//     city: "Mumbai",
//     country: "India",
//     airport: "Chhatrapati Shivaji Maharaj International Airport",
//   },
//   {
//     code: "BLR",
//     city: "Bengaluru",
//     country: "India",
//     airport: "Kempegowda International Airport",
//   },
//   {
//     code: "MAA",
//     city: "Chennai",
//     country: "India",
//     airport: "Chennai International Airport",
//   },
//   {
//     code: "HYD",
//     city: "Hyderabad",
//     country: "India",
//     airport: "Rajiv Gandhi International Airport",
//   },
//   {
//     code: "CCU",
//     city: "Kolkata",
//     country: "India",
//     airport: "Netaji Subhas Chandra Bose International Airport",
//   },
//   {
//     code: "PNQ",
//     city: "Pune",
//     country: "India",
//     airport: "Pune Airport",
//   },
//   {
//     code: "AMD",
//     city: "Ahmedabad",
//     country: "India",
//     airport: "Sardar Vallabhbhai Patel International Airport",
//   },
//   {
//     code: "GOI",
//     city: "Goa",
//     country: "India",
//     airport: "Dabolim Airport",
//   },
//   {
//     code: "COK",
//     city: "Kochi",
//     country: "India",
//     airport: "Cochin International Airport",
//   },
//   {
//     code: "DXB",
//     city: "Dubai",
//     country: "UAE",
//     airport: "Dubai International Airport",
//   },
//   {
//     code: "AUH",
//     city: "Abu Dhabi",
//     country: "UAE",
//     airport: "Zayed International Airport",
//   },
//   {
//     code: "DOH",
//     city: "Doha",
//     country: "Qatar",
//     airport: "Hamad International Airport",
//   },
//   {
//     code: "SIN",
//     city: "Singapore",
//     country: "Singapore",
//     airport: "Singapore Changi Airport",
//   },
//   {
//     code: "BKK",
//     city: "Bangkok",
//     country: "Thailand",
//     airport: "Suvarnabhumi Airport",
//   },
//   {
//     code: "KUL",
//     city: "Kuala Lumpur",
//     country: "Malaysia",
//     airport: "Kuala Lumpur International Airport",
//   },
//   {
//     code: "HKG",
//     city: "Hong Kong",
//     country: "Hong Kong",
//     airport: "Hong Kong International Airport",
//   },
//   {
//     code: "NRT",
//     city: "Tokyo",
//     country: "Japan",
//     airport: "Narita International Airport",
//   },
//   {
//     code: "HND",
//     city: "Tokyo",
//     country: "Japan",
//     airport: "Haneda Airport",
//   },
//   {
//     code: "ICN",
//     city: "Seoul",
//     country: "South Korea",
//     airport: "Incheon International Airport",
//   },
//   {
//     code: "PEK",
//     city: "Beijing",
//     country: "China",
//     airport: "Beijing Capital International Airport",
//   },
//   {
//     code: "PVG",
//     city: "Shanghai",
//     country: "China",
//     airport: "Shanghai Pudong International Airport",
//   },
//   {
//     code: "LHR",
//     city: "London",
//     country: "United Kingdom",
//     airport: "Heathrow Airport",
//   },
//   {
//     code: "CDG",
//     city: "Paris",
//     country: "France",
//     airport: "Charles de Gaulle Airport",
//   },
//   {
//     code: "FRA",
//     city: "Frankfurt",
//     country: "Germany",
//     airport: "Frankfurt Airport",
//   },
//   {
//     code: "AMS",
//     city: "Amsterdam",
//     country: "Netherlands",
//     airport: "Amsterdam Schiphol Airport",
//   },
//   {
//     code: "JFK",
//     city: "New York",
//     country: "USA",
//     airport: "John F. Kennedy International Airport",
//   },
//   {
//     code: "LAX",
//     city: "Los Angeles",
//     country: "USA",
//     airport: "Los Angeles International Airport",
//   },
//   {
//     code: "YYZ",
//     city: "Toronto",
//     country: "Canada",
//     airport: "Toronto Pearson International Airport",
//   },
//   {
//     code: "SYD",
//     city: "Sydney",
//     country: "Australia",
//     airport: "Sydney Kingsford Smith Airport",
//   }
// ];

//   return (
//     <div>
//       {/* <p>Flight Search</p> */}

//       {/* Trip type options */}
//       <div className="trip-type-options">
//         <input type="radio" id="oneWay" name="tripType" defaultChecked />
//         <label htmlFor="oneWay" className="trip-type-option">
//           One Way
//         </label>

//         <input type="radio" id="roundTrip" name="tripType" />
//         <label htmlFor="roundTrip" className="trip-type-option">
//           Round Trip
//         </label>

//         <input type="radio" id="multiCity" name="tripType" />
//         <label htmlFor="multiCity" className="trip-type-option">
//           Multi City
//         </label>
//       </div>

//       {/* Search fields */}
//       <div className="search-fields">

//         <div className="From-block">
//           <p>From</p>



//         </div>

//         {
//           airportList.map((airport) => (
//             <div key={airport.code} className="airport-option">

//               <div className="airport-code">
//                 {airport.code}
//               </div>

//               <div className="airport-details">
//                 <h4>
//                   {airport.city}, <span>{airport.country}</span>
//                 </h4>

//                 <p>{airport.airport}</p>
//               </div>

//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default FlightSearch;


import React from "react";

function FlightSearch() {
  return (
    <div>
      <p>Flight Search</p>
    </div>
  );
}

export default FlightSearch;