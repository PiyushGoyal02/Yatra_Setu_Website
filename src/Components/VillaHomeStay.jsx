import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import VillaHomeStayVideo from "../assets/Villa&HomeStay.mp4";
import "../CSS_CODE/VillaHomeStayCSS.css";
import getVillaJSONDetails from "../Custom-Hook/getVillaJSONDetails";

function VillaHomeStay() {

  const { villaDetails, loading } = getVillaJSONDetails();

  const villaHomeStayFilterOptions = {
    title: "Filter Properties",

    propertyType: [
      {
        id: "villa",
        label: "Villa",
        checked: false,
      },
      {
        id: "cottage",
        label: "Cottage",
        checked: false,
      },
      {
        id: "homestay",
        label: "Homestay",
        checked: false,
      },
      {
        id: "farmhouse",
        label: "Farmhouse",
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
        checked: false,
      },
      {
        id: "3-bhk",
        label: "3 BHK",
        checked: false,
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
        checked: false,
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

  return (
    <div>
      <Navbar />

      <div className="villaHomeStayHero">
        <video
          className="VillaHomeStayVideo"
          muted
          autoPlay
          playsInline
          loop
        >
          <source src={VillaHomeStayVideo} type="video/mp4" />
        </video>

        <div className="VillaVideoText">
          <h1>Villas & Homestays</h1>

          <p>
            Stay your way — private pools, luxury villas &
            trusted local homestays.
          </p>
        </div>
      </div>

      <div className="villaHomeStayMain">

        {/* Left Side Code */}
        <aside className="villaHomeStayFilterWrapper">
          <div className="villaHomeStayFilter">

            <h2 className="villaHomeStayFilterTitle">
              {villaHomeStayFilterOptions.title}
            </h2>

            <hr />

            {/* Property Type */}
            <div className="villaHomeStayFilterSection">
              <h3>PROPERTY TYPE</h3>

              {villaHomeStayFilterOptions.propertyType.map(
                (filter) => (
                  <label
                    key={filter.id}
                    className="villaHomeStayFilterOption"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={filter.checked}
                    />

                    <span>{filter.label}</span>
                  </label>
                )
              )}
            </div>

            {/* Bedrooms */}
            <div className="villaHomeStayFilterSection">
              <h3>BEDROOMS</h3>

              {villaHomeStayFilterOptions.bedrooms.map(
                (filter) => (
                  <label
                    key={filter.id}
                    className="villaHomeStayFilterOption"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={filter.checked}
                    />

                    <span>{filter.label}</span>
                  </label>
                )
              )}
            </div>

            {/* Amenities */}
            <div className="villaHomeStayFilterSection">
              <h3>AMENITIES</h3>

              {villaHomeStayFilterOptions.amenities.map(
                (filter) => (
                  <label
                    key={filter.id}
                    className="villaHomeStayFilterOption"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={filter.checked}
                    />

                    <span>{filter.label}</span>
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

        {/* Right Side Code */}
        <main className="villaHomeStayRightContent">

          {/* Heading */}
          <div className="villaHomeStayHeading">

            <div className="villaHomeStayHeadingDetails">
              <h2>
                {loading
                  ? "Loading villas..."
                  : `${villaDetails.length} villas & homestays found`}
              </h2>

              <p>
                Find your perfect stay
              </p>
            </div>

            <div className="VillaRecommendedTags">
              <p>Recommended</p>
              <p>Price: Low to High</p>
              <p>Guest Rating</p>
            </div>

          </div>

          {loading ? (
            <div className="villaLoading">
              <p>Loading villas...</p>
            </div>
          ) : villaDetails.length === 0 ? (
            <div className="villaNoData">
              <p>No villas found.</p>
            </div>
          ) : (
            <div className="villaPropertiesList">

              {villaDetails.map((villa) => (
                <div
                  className="villaPropertyCard"
                  key={villa._id}
                >

                  <div className="villaPropertyImageWrapper">

                    <img
                      src={villa.images?.[0]}
                      alt={villa.name}
                      className="VillaImage"
                    />

                  </div>

                  <div className="villaPropertyContent">

                    {/* Rating */}
                    <div className="ratingAndTextDetails">

                      <p className="ratingAndStar">
                        {villa.rating?.average || 0} ★
                      </p>

                      <p className="ReviewText">
                        {villa.type} ·{" "}
                        {villa.rating?.totalReviews || 0} reviews
                      </p>

                    </div>

                    {/* Title */}
                    <h3 className="VillaTitleName">
                      {villa.name}
                    </h3>

                    {/* Location */}
                    <p className="VillaLocationDetails">
                      📍{" "}
                      {villa.location?.city},{" "}
                      {villa.location?.area},{" "}
                      {villa.location?.state}
                    </p>

                    {/* Property Details */}
                    <div className="VillaPropertyDetails">

                      <span>
                        🛏️{" "}
                        {villa.capacity?.bedrooms || 0} Bedrooms
                      </span>

                      <span>
                        🚿{" "}
                        {villa.capacity?.bathrooms || 0} Baths
                      </span>

                      <span>
                        👥 Up to{" "}
                        {villa.capacity?.maxGuests || 0} Guests
                      </span>

                      <span>
                        🏠{" "}
                        {villa.amenities?.[0] ||
                          "Property Amenities"}
                      </span>

                    </div>

                    {/* Amenities */}
                    <div className="VillaAmenities">

                      {villa.amenities?.map(
                        (amenity, index) => (
                          <span
                            key={`${villa._id}-${index}`}
                            className="VillaAmenityTag"
                          >
                            {amenity}
                          </span>
                        )
                      )}

                    </div>

                    <div className="VillaPropertyBottom">

                      <p className="VillaHostedDetails">
                        Hosted by{" "}
                        {villa.host?.name || "Host"}
                        {" · "}
                        {villa.policies?.cancellation ||
                          "Cancellation policy available"}
                      </p>

                      <div className="VillaPriceAndButton">

                        <p className="VillaPrice">
                          ₹
                          {(
                            villa.pricing?.price || 0
                          ).toLocaleString("en-IN")}

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
          )}

        </main>
      </div>

      <Footer />
    </div>
  );
}

export default VillaHomeStay;