import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CasaBala from "../assets/CasaBellaVilla.webp"
import PineCottage from "../assets/Pine-cottage-room.webp"
import Backwater from "../assets/BackWaterHomeStay.avif"
import VillaHomeStayVideo from "../assets/Villa&HomeStay.mp4";
import "../CSS_CODE/VillaHomeStayCSS.css";

function VillaHomeStay() {

  const villaHomeStayFilterOptions = {
    title: "Filter Properties",

    propertyType: [
      {
        id: "entire-villa",
        label: "Entire Villa",
        count: 34,
        checked: true,
      },
      {
        id: "cottage",
        label: "Cottage",
        count: 18,
        checked: false,
      },
      {
        id: "homestay",
        label: "Homestay",
        count: 26,
        checked: false,
      },
      {
        id: "farmhouse",
        label: "Farmhouse",
        count: 11,
        checked: false,
      },
    ],

    bedrooms: [
      {
        id: "1-bhk",
        label: "1 BHK",
        checked: false,
      },
      {
        id: "2-bhk",
        label: "2 BHK",
        checked: true,
      },
      {
        id: "3-bhk",
        label: "3 BHK",
        checked: true,
      },
      {
        id: "4-plus-bhk",
        label: "4+ BHK",
        checked: false,
      },
    ],

    amenities: [
      {
        id: "private-pool",
        label: "Private Pool",
        checked: true,
      },
      {
        id: "mountain-beach-view",
        label: "Mountain / Beach View",
        checked: false,
      },
      {
        id: "caretaker",
        label: "Caretaker Included",
        checked: false,
      },
      {
        id: "pet-friendly",
        label: "Pet Friendly",
        checked: false,
      },
      {
        id: "bbq-bonfire",
        label: "BBQ / Bonfire",
        checked: false,
      },
    ],

    pricePerNight: {
      min: 3000,
      max: 25000,
      current: 3000,
      currency: "INR",
    },
  };

  const villaHomeStayProperties = [
    {
      id: 1,
      propertyId: "VILLA-GOA-001",
      rating: 4.8,
      badge: "Superhost",
      reviews: 410,
      title: "Casa Bela — Private Pool Villa",
      location: "Candolim, North Goa",
      locationDetails: "5 min walk to beach",
      bedrooms: 4,
      bathrooms: 4,
      guests: 8,
      image: CasaBala,
      mainAmenity: "Private Pool",
      amenities: [
        "Kitchen",
        "WiFi",
        "Caretaker Included",
        "Free Parking"
      ],
      pricePerNight: 12999,
      currency: "INR",
      host: "Rohan",
      cancellation: "Free cancellation up to 48 hrs"
    },

    {
      id: 2,
      propertyId: "VILLA-MANALI-002",
      rating: 4.6,
      badge: "Great for families",
      reviews: 220,
      title: "Pine Cottage — Mountain View",
      location: "Old Manali, Himachal Pradesh",
      locationDetails: "Riverside",
      bedrooms: 3,
      bathrooms: 2,
      guests: 6,
      image: PineCottage,
      mainAmenity: "Bonfire",
      amenities: [
        "Mountain View",
        "Kitchen",
        "Pet Friendly",
        "WiFi"
      ],
      pricePerNight: 7499,
      currency: "INR",
      host: "Priya",
      cancellation: "Free cancellation up to 24 hrs"
    },

    {
      id: 3,
      propertyId: "HOMESTAY-KERALA-003",
      rating: 4.7,
      badge: "Verified Host",
      reviews: 305,
      title: "Backwater Homestay",
      location: "Alleppey, Kerala",
      locationDetails: "Houseboat access included",
      bedrooms: 2,
      bathrooms: 2,
      guests: 4,
      image: Backwater,
      mainAmenity: "Houseboat Access",
      amenities: [
        "Backwater View",
        "Home-cooked Meals",
        "WiFi",
        "Free Parking"
      ],
      pricePerNight: 5999,
      currency: "INR",
      host: "Thomas",
      cancellation: "Free cancellation up to 48 hrs"
    },

    {
      id: 4,
      propertyId: "VILLA-LONAVALA-004",
      rating: 4.9,
      badge: "Superhost",
      reviews: 186,
      title: "Green Valley Luxury Villa",
      location: "Lonavala, Maharashtra",
      locationDetails: "Near Tiger Point",
      bedrooms: 4,
      bathrooms: 4,
      guests: 10,
      image: CasaBala,
      mainAmenity: "Private Pool",
      amenities: [
        "Private Pool",
        "Mountain View",
        "WiFi",
        "BBQ / Bonfire"
      ],
      pricePerNight: 14999,
      currency: "INR",
      host: "Amit",
      cancellation: "Free cancellation up to 48 hrs"
    },

    {
      id: 5,
      propertyId: "COTTAGE-MUSSOORIE-005",
      rating: 4.5,
      badge: "Great for couples",
      reviews: 142,
      title: "Pine Woods Cottage",
      location: "Mussoorie, Uttarakhand",
      locationDetails: "10 min from Mall Road",
      bedrooms: 2,
      bathrooms: 2,
      guests: 4,
      image: CasaBala,
      mainAmenity: "Mountain View",
      amenities: [
        "Mountain View",
        "Kitchen",
        "WiFi",
        "Bonfire"
      ],
      pricePerNight: 6499,
      currency: "INR",
      host: "Neha",
      cancellation: "Free cancellation up to 24 hrs"
    },

    {
      id: 6,
      propertyId: "FARMHOUSE-JAIPUR-006",
      rating: 4.7,
      badge: "Family Favourite",
      reviews: 268,
      title: "Royal Garden Farmhouse",
      location: "Jaipur, Rajasthan",
      locationDetails: "20 min from city centre",
      bedrooms: 5,
      bathrooms: 4,
      guests: 12,
      image: CasaBala,
      mainAmenity: "Private Pool",
      amenities: [
        "Private Pool",
        "Caretaker Included",
        "BBQ / Bonfire",
        "Free Parking"
      ],
      pricePerNight: 10999,
      currency: "INR",
      host: "Vikram",
      cancellation: "Free cancellation up to 48 hrs"
    }
  ];

  return (
    <div>

      <Navbar />

      {/* Hero Video */}
      <div className="villaHomeStayHero">

        <video className="VillaHomeStayVideo" muted autoPlay playsInline>
          <source src={VillaHomeStayVideo} type="video/mp4" />
        </video>

        <div className="VillaVideoText">
          <h1>Villas & Homestays</h1>
          <p> Stay your way — private pools, luxury villas &trusted local homestays.</p>
        </div>

      </div>

      {/* Left & Right Content */}
      <div className="villaHomeStayMain">

        {/* Left Filter Section */}
        <aside className="villaHomeStayFilterWrapper">

          <div className="villaHomeStayFilter">
            <h2 className="villaHomeStayFilterTitle">{villaHomeStayFilterOptions.title}</h2>
            <hr />
            {/* Property Type */}
            <div className="villaHomeStayFilterSection">

              <h3>PROPERTY TYPE</h3>
              {villaHomeStayFilterOptions.propertyType.map(
                (villaDetails) => (
                  <label
                    key={villaDetails.id}
                    className="villaHomeStayFilterOption"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={villaDetails.checked}
                    />
                    <span>
                      {villaDetails.label}
                      {villaDetails.count &&
                        ` (${villaDetails.count})`}
                    </span>
                  </label>
                )
              )}

            </div>


            {/* Bedrooms */}
            <div className="villaHomeStayFilterSection">

              <h3>BEDROOMS</h3>
              {villaHomeStayFilterOptions.bedrooms.map(
                (villaDetails) => (
                  <label
                    key={villaDetails.id}
                    className="villaHomeStayFilterOption"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={villaDetails.checked}
                    />
                    <span>
                      {villaDetails.label}
                    </span>

                  </label>
                )
              )}

            </div>

            {/* Amenities */}
            <div className="villaHomeStayFilterSection">

              <h3>AMENITIES</h3>

              {villaHomeStayFilterOptions.amenities.map(
                (villaDetails) => (
                  <label
                    key={villaDetails.id}
                    className="villaHomeStayFilterOption"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={villaDetails.checked}
                    />

                    <span>
                      {villaDetails.label}
                    </span>

                  </label>
                )
              )}

            </div>

            {/* Price */}
            <div className="villaHomeStayFilterSection">

              <h3>PRICE PER NIGHT</h3>
              <div className="villaHomeStayPriceLabels">
                <span>
                  ₹
                  {villaHomeStayFilterOptions.pricePerNight.min.toLocaleString(
                    "en-IN"
                  )}
                </span>

                <span>
                  ₹
                  {villaHomeStayFilterOptions.pricePerNight.max.toLocaleString(
                    "en-IN"
                  )}
                  +
                </span>

              </div>

              <input
                type="range"
                min={villaHomeStayFilterOptions.pricePerNight.min}
                max={villaHomeStayFilterOptions.pricePerNight.max}
                step="1000"
                defaultValue={
                  villaHomeStayFilterOptions.pricePerNight.current
                }
                className="villaHomeStayPriceRange"
              />

            </div>
          </div>

        </aside>


        {/* Right Properties Section */}
        {/* Right Properties Section */}
        <main className="villaHomeStayRightContent">

          {/* Heading + Sorting */}
          <div className="villaHomeStayHeading">

            <div className="villaHomeStayHeadingDetails">
              <h2>89 villas & homestays found</h2>
              <p>21 Aug - 22 Aug · Up to 6 Guests</p>
            </div>

            <div className="VillaRecommendedTags">
              <p>Recommended</p>
              <p>Price: Low to High</p>
              <p>Guest Rating</p>
            </div>

          </div>


          {/* Property Cards */}
          <div className="villaPropertiesList">

            {villaHomeStayProperties.map((villaDetails) => (

              <div
                className="villaPropertyCard"
                key={villaDetails.id}
              >

                {/* Property Image */}
                <div className="villaPropertyImageWrapper">

                  <img
                    src={villaDetails.image}
                    alt={villaDetails.title}
                    className="VillaImage"
                  />

                </div>


                {/* Property Content */}
                <div className="villaPropertyContent">

                  {/* Rating */}
                  <div className="ratingAndTextDetails">

                    <p className="ratingAndStar">
                      {villaDetails.rating} ★
                    </p>

                    <p className="ReviewText">
                      {villaDetails.badge} · {villaDetails.reviews} reviews
                    </p>

                  </div>


                  {/* Title */}
                  <h3 className="VillaTitleName">
                    {villaDetails.title}
                  </h3>


                  {/* Location */}
                  <p className="VillaLocationDetails">
                    📍 {villaDetails.location} · {villaDetails.locationDetails}
                  </p>


                  {/* Property Details */}
                  <div className="VillaPropertyDetails">

                    <span>
                      🛏️ {villaDetails.bedrooms} Bedrooms
                    </span>

                    <span>
                      🚿 {villaDetails.bathrooms} Baths
                    </span>

                    <span>
                      👥 Up to {villaDetails.guests} Guests
                    </span>

                    <span>
                      🏊 {villaDetails.mainAmenity}
                    </span>

                  </div>


                  {/* Amenities */}
                  <div className="VillaAmenities">

                    {villaDetails.amenities.map(
                      (amenity, index) => (

                        <span
                          key={index}
                          className="VillaAmenityTag"
                        >
                          {amenity}
                        </span>

                      )
                    )}

                  </div>


                  {/* Bottom Section */}
                  <div className="VillaPropertyBottom">

                    <p className="VillaHostedDetails">
                      Hosted by {villaDetails.host} ·{" "}
                      {villaDetails.cancellation}
                    </p>


                    <div className="VillaPriceAndButton">

                      <p className="VillaPrice">
                        ₹{villaDetails.pricePerNight.toLocaleString("en-IN")}
                        <span>/night</span>
                      </p>

                      <button className="VillaBookNowButton">
                        Book Now
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </main>

      </div>


      <Footer />

    </div>
  );
}

export default VillaHomeStay;