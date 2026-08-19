import React from "react";
import "../CSS_CODE/HotelCSS.css";
import Navbar from "../Components/Navbar";
import Hotel1 from "../assets/Hotel1.jpg";
import Hotel2 from "../assets/Hotel2.avif";
import Hotel3 from "../assets/Hotel3.jpeg";
import Hotel4 from "../assets/Hotel4.webp";
import Hotel5 from "../assets/Hotel5.jpg";
import Hotel6 from "../assets/Hotel6.webp";
import HotelVideo from "../assets/HotelVideo.mp4";

function Hotel() {

  const hotelsDetails = [
    {
      id: 1,
      name: "The Grand Palace",
      location: "Civil Lines, Jaipur",
      distance: "2.1 km from city center",
      photos: 18,
      image: Hotel1,

      score: 4.7,
      label: "Excellent",
      totalRatings: 2340,

      amenities: [
        "📶 Free WiFi",
        "🏊 Pool",
        "🍳 Breakfast Included",
        "🅿️ Free Parking",
        "❄️ AC Rooms",
      ],

      cancellation: "Free Cancellation before check-in",

      original: 6499,
      current: 4999,
      taxes: 599,
      taxLabel: "taxes & fees / night",
      roomInfo: "1 Room × 1 Night",
      buttonText: "Book Now",
    },

    {
      id: 2,
      name: "Ocean View Resort",
      location: "Candolim Beach, Goa",
      distance: "300 m from beach",
      photos: 24,
      image: Hotel2,

      score: 4.5,
      label: "Very Good",
      totalRatings: 1890,

      amenities: [
        "🏖️ Beach Access",
        "🏊 Infinity Pool",
        "🍽️ Multi-cuisine Restaurant",
        "🧘 Spa",
        "🚗 Airport Transfer",
      ],

      cancellation: "Pay at Hotel available",

      original: 7200,
      current: 5499,
      taxes: 660,
      taxLabel: "taxes & fees / night",
      roomInfo: "1 Room × 1 Night",
      buttonText: "Book Now",
    },

    {
      id: 3,
      name: "Mountain Retreat",
      location: "Mall Road, Shimla",
      distance: "800 m from Ridge",
      photos: 15,
      image: Hotel3,

      score: 4.6,
      label: "Excellent",
      totalRatings: 980,

      amenities: [
        "🔥 Bonfire Available",
        "🏔️ Mountain View",
        "🍳 Breakfast Included",
        "📶 Free WiFi",
        "🚗 Free Parking",
      ],

      cancellation: "Free Cancellation before check-in",

      original: 4100,
      current: 3299,
      taxes: 396,
      taxLabel: "taxes & fees / night",
      roomInfo: "1 Room × 1 Night",
      buttonText: "Book Now",
    },

    {
      id: 4,
      name: "Lakeside Suites",
      location: "Lake Pichola, Udaipur",
      distance: "Lake-facing rooms",
      photos: 30,
      image: Hotel4,

      score: 4.8,
      label: "Excellent",
      totalRatings: 3120,

      amenities: [
        "🌊 Lake View",
        "🍽️ Rooftop Restaurant",
        "🏊 Pool",
        "🧘 Spa & Wellness",
        "🚗 Free Parking",
      ],

      cancellation: "Couple Friendly · Free Cancellation",

      original: 8999,
      current: 6999,
      taxes: 840,
      taxLabel: "taxes & fees / night",
      roomInfo: "1 Room × 1 Night",
      buttonText: "Book Now",
    },

    {
      id: 5,
      name: "Royal Heritage Hotel",
      location: "MI Road, Jaipur",
      distance: "1.5 km from Hawa Mahal",
      photos: 21,
      image: Hotel5,

      score: 4.4,
      label: "Very Good",
      totalRatings: 1650,

      amenities: [
        "🏛️ Heritage Property",
        "🍳 Breakfast Included",
        "📶 Free WiFi",
        "🏊 Swimming Pool",
        "🅿️ Free Parking",
      ],

      cancellation: "Free Cancellation before check-in",

      original: 5800,
      current: 4299,
      taxes: 516,
      taxLabel: "taxes & fees / night",
      roomInfo: "1 Room × 1 Night",
      buttonText: "Book Now",
    },

    {
      id: 6,
      name: "Beachfront Paradise",
      location: "Baga Beach, Goa",
      distance: "100 m from beach",
      photos: 28,
      image: Hotel6,

      score: 4.7,
      label: "Excellent",
      totalRatings: 2780,

      amenities: [
        "🏖️ Private Beach Access",
        "🏊 Infinity Pool",
        "🍹 Poolside Bar",
        "🧘 Spa & Wellness",
        "🚗 Free Parking",
      ],

      cancellation: "Free Cancellation before check-in",

      original: 9500,
      current: 7499,
      taxes: 900,
      taxLabel: "taxes & fees / night",
      roomInfo: "1 Room × 1 Night",
      buttonText: "Book Now",
    },
  ];

  const filters = [
    {
      category: "starRating",
      title: "STAR RATING",
      options: [
        { id: 1, label: "Five Star", stars: "⭐⭐⭐⭐⭐", count: 12 },
        { id: 2, label: "Four Star", stars: "⭐⭐⭐⭐", count: 28 },
        { id: 3, label: "Three Star", stars: "⭐⭐⭐", count: 41 },
        { id: 4, label: "Two Star", stars: "⭐⭐", count: 9 },
      ],
    },
    {
      category: "propertyType",
      title: "PROPERTY TYPE",
      options: [
        { id: 1, label: "Hotel", count: 68 },
        { id: 2, label: "Resort", count: 22 },
        { id: 3, label: "Guest House", count: 15 },
        { id: 4, label: "Apartment", count: 9 },
      ],
    },
    {
      category: "amenities",
      title: "AMENITIES",
      options: [
        { id: 1, label: "Free WiFi" },
        { id: 2, label: "Swimming Pool" },
        { id: 3, label: "Free Breakfast" },
        { id: 4, label: "Free Cancellation" },
        { id: 5, label: "Parking Available" },
        { id: 6, label: "Spa & Wellness" },
      ],
    },
    {
      category: "guestRating",
      title: "GUEST RATING",
      options: [
        { id: 1, label: "4.5+ Excellent" },
        { id: 2, label: "4.0+ Very Good" },
        { id: 3, label: "3.5+ Good" },
      ],
    },
  ];

  return (
    <div>

      <Navbar />

      <div>

        {/* HOTEL VIDEO */}

        <div className="VideoHero">

          <video
            className="HotelVideo"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src={HotelVideo}
              type="video/mp4"
            />
          </video>

          <div className="VideoTextDiv">

            <h1>
              Your Next Stay Starts Here
            </h1>

            <p>
              Find hotels, resorts & guest houses in 5,000+ cities.
            </p>

          </div>

        </div>


        {/* HOTEL LIST SECTION */}

        <div className="LeftAndRightSideHotelSide">

          {/* LEFT SIDE FILTER */}

          <div className="FilterLeftSide">

            <h4>Filter Results</h4>

            <hr />

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

            <div className="filterContainer">
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


          {/* RIGHT SIDE HOTEL DETAILS */}

          <div>

            {/* HOTEL HEADER */}

            <div className="TagsHeaderCodeDiv">

              <div className="HotelCitiesDate">

                <h4>142 hotels found in Hyderabad</h4>

                <p>21 Aug - 22 Aug · 1 Room, 2 Adults</p>

              </div>


              <div className="TagsForPriceLayouts">

                <p className="TagsForPriceLayout">Popularity</p>
                <p className="TagsForPriceLayout">Price: Low to High</p>
                <p className="TagsForPriceLayout">Price: High to Low</p>
                <p className="TagsForPriceLayout">Guest Rating</p>

              </div>

            </div>

            {/* HOTEL CARDS */}

            <div className="HotelCardsContainer">

              {hotelsDetails.map((Details) => (

                <div
                  className="HotelCard"
                  key={Details.id}
                >

                  <div className="ImageAndContent">
                    {/* HOTEL IMAGE */}
                    <div className="HotelImageContainer">

                      <img
                        src={Details.image}
                        alt={Details.name}
                        className="HotelImages"
                      />

                      <div className="HotelPhotos">+{Details.photos} Photos </div>

                    </div>

                    {/* HOTEL INFORMATION */}

                    <div className="HotelDetails">

                      <h3 className="HotelName">{Details.name}</h3>

                      {/* LOCATION */}

                      <div className="HotelLocation">

                        <span>📍</span>
                        <p>{Details.location}</p>
                        <span>·</span>
                        <p>{Details.distance}</p>

                      </div>


                      {/* RATING */}

                      <div className="HotelRating">

                        <span className="HotelRatingScore">{Details.score}★</span>
                        <div>
                          <span>{Details.label}</span>
                          <span>·</span>
                          <span>{Details.totalRatings.toLocaleString()} ratings</span>
                        </div>

                      </div>


                      {/* AMENITIES */}

                      <div className="HotelAmenities">

                        {Details.amenities.map(
                          (amenity, index) => (
                            <span
                              key={index}
                              className="HotelAmenity"
                            >
                              {amenity}
                            </span>
                          )
                        )}

                      </div>

                      {/* CANCELLATION */}
                      <p className="HotelCancellation">✔ {Details.cancellation}</p>

                    </div>
                  </div>


                  {/* PRICE SECTION */}

                  <div className="HotelPriceSection">

                    <p className="HotelOriginalPrice"> ₹{Details.original.toLocaleString()}</p>
                    <h2 className="HotelCurrentPrice"> ₹{Details.current.toLocaleString()} </h2>
                    <p className="HotelTaxes">
                      + ₹{Details.taxes.toLocaleString()}{" "}
                      {Details.taxLabel}
                    </p>
                    <p className="HotelRoomInfo">{Details.roomInfo}</p>
                    <button className="HotelBookButton">{Details.buttonText}</button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Hotel;