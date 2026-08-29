import React, { useMemo, useState } from "react";
import "../CSS_CODE/HotelCSS.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HotelVideo from "../assets/HotelVideo.mp4";
import getHotelDetails from "../Custom-Hook/getHotelDetails";

function Hotel() {
  const { hotelData = [], loading, error } = getHotelDetails();
  const [maxPrice, setMaxPrice] = useState(15000);

  const [selectedFilters, setSelectedFilters] = useState({
    starRating: [],
    propertyType: [],
    amenities: [],
    guestRating: [],
  });

  const [sortBy, setSortBy] = useState("popularity");

  const filters = [
    {
      category: "starRating",
      title: "STAR RATING",
      options: [
        {
          id: 1,
          label: "Five Star",
          value: 5,
          stars: "⭐⭐⭐⭐⭐",
        },
        {
          id: 2,
          label: "Four Star",
          value: 4,
          stars: "⭐⭐⭐⭐",
        },
        {
          id: 3,
          label: "Three Star",
          value: 3,
          stars: "⭐⭐⭐",
        },
        {
          id: 4,
          label: "Two Star",
          value: 2,
          stars: "⭐⭐",
        },
      ],
    },

    {
      category: "propertyType",
      title: "PROPERTY TYPE",
      options: [
        {
          id: 1,
          label: "Luxury Hotel",
          value: "Luxury Hotel",
        },
        {
          id: 2,
          label: "Hotel",
          value: "Hotel",
        },
        {
          id: 3,
          label: "Resort",
          value: "Resort",
        },
        {
          id: 4,
          label: "Apartment",
          value: "Apartment",
        },
        {
          id: 5,
          label: "Guest House",
          value: "Guest House",
        },
      ],
    },

    {
      category: "amenities",
      title: "AMENITIES",
      options: [
        {
          id: 1,
          label: "Free WiFi",
          value: "Free WiFi",
        },
        {
          id: 2,
          label: "Swimming Pool",
          value: "Swimming Pool",
        },
        {
          id: 3,
          label: "Free Breakfast",
          value: "Free Breakfast",
        },
        {
          id: 4,
          label: "Free Parking",
          value: "Free Parking",
        },
        {
          id: 5,
          label: "Spa & Wellness",
          value: "Spa & Wellness",
        },
        {
          id: 6,
          label: "Air Conditioning",
          value: "Air Conditioning",
        },
      ],
    },

    {
      category: "guestRating",
      title: "GUEST RATING",
      options: [
        {
          id: 1,
          label: "4.5+ Excellent",
          value: 4.5,
        },
        {
          id: 2,
          label: "4.0+ Very Good",
          value: 4.0,
        },
        {
          id: 3,
          label: "3.5+ Good",
          value: 3.5,
        },
      ],
    },
  ];

  const normalizedHotels = useMemo(() => {
    return hotelData.map((hotel) => {
      const location = hotel.location || {};
      const pricing = hotel.pricing || {};
      const rating = hotel.rating || {};
      const policies = hotel.policies || {};

      const images = Array.isArray(hotel.images)
        ? hotel.images
        : [];

      const amenities = Array.isArray(hotel.amenities)
        ? hotel.amenities
        : [];

      const roomTypes = Array.isArray(hotel.roomTypes)
        ? hotel.roomTypes
        : [];

      const tags = Array.isArray(hotel.tags)
        ? hotel.tags
        : [];

      const basePrice = Number(pricing.basePrice || 0);
      const originalPrice = Number(
        pricing.originalPrice || basePrice
      );

      const taxesPercent = Number(
        pricing.taxesPercent || 0
      );

      const taxes = Math.round(
        (basePrice * taxesPercent) / 100
      );

      const averageRating = Number(
        rating.average || 0
      );

      const totalReviews = Number(
        rating.totalReviews || 0
      );

      const firstRoom = roomTypes[0] || {};

      return {
        id: hotel._id || hotel.hotelId,

        hotelId: hotel.hotelId || "",

        name: hotel.name || "Hotel",

        brand: hotel.brand || "",

        starRating: Number(
          hotel.starRating || 0
        ),

        propertyType:
          hotel.propertyType || "Hotel",

        // LOCATION
        city: location.city || "",

        state: location.state || "",

        country: location.country || "",

        area: location.area || "",

        locationText: [
          location.area,
          location.city,
        ]
          .filter(Boolean)
          .join(", "),

        distance:
          location.distanceFromLandmark ||
          "Distance unavailable",

        // PRICE
        basePrice,

        originalPrice,

        taxesPercent,

        taxes,

        currency:
          pricing.currency || "INR",

        breakfastIncluded:
          Boolean(pricing.breakfastIncluded),

        // RATING
        averageRating,

        totalReviews,

        ratingLabel:
          averageRating >= 4.5
            ? "Excellent"
            : averageRating >= 4
              ? "Very Good"
              : averageRating >= 3.5
                ? "Good"
                : "Average",

        // AMENITIES
        amenities,

        // IMAGES
        images,

        mainImage:
          images[0] ||
          "https://via.placeholder.com/1000x650?text=Hotel",

        photoCount: images.length,

        // ROOM
        roomTypes,

        firstRoomName:
          firstRoom.name ||
          "Room",

        firstRoomBed:
          firstRoom.bedType ||
          "Bed details unavailable",

        maxGuests:
          firstRoom.maxGuests || 0,

        // POLICY
        cancellation:
          policies.cancellation ||
          "Cancellation policy unavailable",

        checkIn:
          policies.checkIn || "2:00 PM",

        checkOut:
          policies.checkOut || "11:00 AM",

        petsAllowed:
          Boolean(policies.petsAllowed),

        // TAGS
        tags,

        description:
          hotel.description || "",
      };
    });
  }, [hotelData]);

  // --------------------------------------------------
  // FILTER HANDLER
  // --------------------------------------------------

  const handleFilterChange = (
    category,
    value
  ) => {
    setSelectedFilters((previous) => {
      const current =
        previous[category] || [];

      const exists =
        current.includes(value);

      return {
        ...previous,

        [category]: exists
          ? current.filter(
            (item) => item !== value
          )
          : [...current, value],
      };
    });
  };

  // --------------------------------------------------
  // FILTER + SORT HOTELS
  // --------------------------------------------------

  const filteredHotels = useMemo(() => {
    let result = [...normalizedHotels];

    // PRICE
    result = result.filter(
      (hotel) =>
        hotel.basePrice <= maxPrice
    );

    // STAR RATING
    if (
      selectedFilters.starRating.length > 0
    ) {
      result = result.filter((hotel) =>
        selectedFilters.starRating.includes(
          hotel.starRating
        )
      );
    }

    // PROPERTY TYPE
    if (
      selectedFilters.propertyType.length > 0
    ) {
      result = result.filter((hotel) =>
        selectedFilters.propertyType.some(
          (type) =>
            hotel.propertyType
              .toLowerCase()
              .includes(type.toLowerCase())
        )
      );
    }

    // AMENITIES
    if (
      selectedFilters.amenities.length > 0
    ) {
      result = result.filter((hotel) =>
        selectedFilters.amenities.every(
          (selectedAmenity) =>
            hotel.amenities.some(
              (amenity) =>
                amenity.toLowerCase() ===
                selectedAmenity.toLowerCase()
            )
        )
      );
    }

    // GUEST RATING
    if (
      selectedFilters.guestRating.length > 0
    ) {
      result = result.filter((hotel) =>
        selectedFilters.guestRating.some(
          (rating) =>
            hotel.averageRating >= rating
        )
      );
    }

    // SORT
    switch (sortBy) {
      case "priceLow":
        result.sort(
          (a, b) =>
            a.basePrice - b.basePrice
        );
        break;

      case "priceHigh":
        result.sort(
          (a, b) =>
            b.basePrice - a.basePrice
        );
        break;

      case "rating":
        result.sort(
          (a, b) =>
            b.averageRating -
            a.averageRating
        );
        break;

      case "popularity":
      default:
        result.sort(
          (a, b) =>
            b.totalReviews -
            a.totalReviews
        );
        break;
    }

    return result;
  }, [
    normalizedHotels,
    maxPrice,
    selectedFilters,
    sortBy,
  ]);

  // --------------------------------------------------
  // CLEAR FILTERS
  // --------------------------------------------------

  const clearFilters = () => {
    setMaxPrice(15000);

    setSelectedFilters({
      starRating: [],
      propertyType: [],
      amenities: [],
      guestRating: [],
    });
  };

  // --------------------------------------------------
  // CITY
  // --------------------------------------------------

  const cityName =
    filteredHotels.length > 0
      ? filteredHotels[0].city
      : "India";

  // --------------------------------------------------
  // UI
  // --------------------------------------------------

  return (
    <div className="HotelPage">

      <Navbar />

      {/* =========================================
          HERO VIDEO
      ========================================= */}

      <section className="VideoHero">

        <video
          className="HotelVideo"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source
            src={HotelVideo}
            type="video/mp4"
          />

          Your browser does not support
          the video tag.
        </video>

        <div className="VideoTextDiv">

          <h1>
            Your Next Stay Starts Here
          </h1>

          <p>
            Find hotels, resorts & guest
            houses in 5,000+ cities.
          </p>

        </div>

      </section>

      {/* =========================================
          MAIN HOTEL SECTION
      ========================================= */}

      <section className="LeftAndRightSideHotelSide">

        {/* =====================================
            LEFT FILTER SIDEBAR
        ===================================== */}

        <aside className="FilterLeftSide">

          <div className="FilterHeader">

            <h4>
              Filter Results
            </h4>

            <button
              type="button"
              onClick={clearFilters}
              className="ClearFilterButton"
            >
              Clear All
            </button>

          </div>

          <hr />

          {/* PRICE FILTER */}

          <div className="priceRangeDiv">

            <div className="priceRangeHeader">

              <label
                htmlFor="priceRange"
                className="priceRangeLabel"
              >
                Price per night
              </label>

              <span className="priceRangeValue">
                ₹{maxPrice.toLocaleString()}
              </span>

            </div>

            <input
              id="priceRange"
              type="range"
              className="priceRangeTag"
              min="1000"
              max="15000"
              step="500"
              value={maxPrice}
              onChange={(event) =>
                setMaxPrice(
                  Number(event.target.value)
                )
              }
              aria-label="Maximum price per night"
            />

            <div className="priceRangeLimits">

              <span>
                ₹1,000
              </span>

              <span>
                ₹15,000+
              </span>

            </div>

          </div>

          {/* OTHER FILTERS */}

          <div className="filterContainer">

            {filters.map((filter) => (

              <div
                className="filterSection"
                key={filter.category}
              >

                <h5>
                  {filter.title}
                </h5>

                {filter.options.map(
                  (option) => (

                    <label
                      key={option.id}
                      className="filterOption"
                    >

                      <input
                        type="checkbox"
                        className="starCheckBoxTag"
                        checked={selectedFilters[
                          filter.category
                        ].includes(
                          option.value
                        )}
                        onChange={() =>
                          handleFilterChange(
                            filter.category,
                            option.value
                          )
                        }
                      />

                      <span className="spanStarDetails">

                        {option.stars && (
                          <span className="starSpan">
                            {option.stars}
                          </span>
                        )}

                        <span className="starLabel">
                          {option.label}
                        </span>

                      </span>

                    </label>

                  )
                )}

              </div>

            ))}

          </div>

        </aside>

        {/* =====================================
            RIGHT HOTEL CONTENT
        ===================================== */}

        <main className="HotelRightSide">

          {/* HEADER */}

          <div className="TagsHeaderCodeDiv">

            <div className="HotelCitiesDate">

              <h4>
                {filteredHotels.length}{" "}
                hotels found in {cityName}
              </h4>

              <p>
                21 Aug - 22 Aug · 1 Room,
                2 Adults
              </p>

            </div>

            {/* SORT */}

            <div className="TagsForPriceLayouts">

              <button
                type="button"
                className={`TagsForPriceLayout ${sortBy === "popularity"
                    ? "active"
                    : ""
                  }`}
                onClick={() =>
                  setSortBy("popularity")
                }
              >
                Popularity
              </button>

              <button
                type="button"
                className={`TagsForPriceLayout ${sortBy === "priceLow"
                    ? "active"
                    : ""
                  }`}
                onClick={() =>
                  setSortBy("priceLow")
                }
              >
                Price: Low to High
              </button>

              <button
                type="button"
                className={`TagsForPriceLayout ${sortBy === "priceHigh"
                    ? "active"
                    : ""
                  }`}
                onClick={() =>
                  setSortBy("priceHigh")
                }
              >
                Price: High to Low
              </button>

              <button
                type="button"
                className={`TagsForPriceLayout ${sortBy === "rating"
                    ? "active"
                    : ""
                  }`}
                onClick={() =>
                  setSortBy("rating")
                }
              >
                Guest Rating
              </button>

            </div>

          </div>

          {/* LOADING */}

          {loading && (
            <div className="HotelLoading">
              Loading hotels...
            </div>
          )}

          {/* ERROR */}

          {error && (
            <div className="HotelError">
              {error}
            </div>
          )}

          {/* NO DATA */}

          {!loading &&
            !error &&
            filteredHotels.length === 0 && (

              <div className="NoHotelsFound">

                <h3>
                  No hotels found
                </h3>

                <p>
                  Try changing your filters
                  or increasing the price range.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                >
                  Clear Filters
                </button>

              </div>

            )}

          {/* HOTEL CARDS */}

          <div className="HotelCardsContainer">

            {!loading &&
              !error &&
              filteredHotels.map(
                (hotel) => (

                  <article
                    className="HotelCard"
                    key={hotel.id}
                  >

                    {/* =================================
                        IMAGE + DETAILS
                    ================================= */}

                    <div className="ImageAndContent">

                      {/* IMAGE */}

                      <div className="HotelImageContainer">

                        <img
                          src={hotel.mainImage}
                          alt={hotel.name}
                          className="HotelImages"
                          loading="lazy"
                        />

                        <div className="HotelPhotos">
                          +{hotel.photoCount} Photos
                        </div>

                      </div>

                      {/* DETAILS */}

                      <div className="HotelDetails">

                        <h3 className="HotelName">
                          {hotel.name}
                        </h3>

                        {/* STAR RATING */}

                        {hotel.starRating > 0 && (

                          <div className="HotelStars">
                            {"⭐".repeat(
                              hotel.starRating
                            )}
                          </div>

                        )}

                        {/* PROPERTY TYPE */}

                        <p className="HotelPropertyType">
                          {hotel.propertyType}
                        </p>

                        {/* LOCATION */}

                        <div className="HotelLocation">

                          <span>
                            📍
                          </span>

                          <p>
                            {hotel.locationText}
                          </p>

                          <span>
                            ·
                          </span>

                          <p>
                            {hotel.distance}
                          </p>

                        </div>

                        {/* RATING */}

                        <div className="HotelRating">

                          <span className="HotelRatingScore">
                            {hotel.averageRating.toFixed(
                              1
                            )}
                            ★
                          </span>

                          <div>

                            <span>
                              {hotel.ratingLabel}
                            </span>

                            <span>
                              {" · "}
                            </span>

                            <span>
                              {hotel.totalReviews.toLocaleString()}{" "}
                              ratings
                            </span>

                          </div>

                        </div>

                        {/* AMENITIES */}

                        <div className="HotelAmenities">

                          {hotel.amenities
                            .slice(0, 5)
                            .map(
                              (amenity) => (

                                <span
                                  key={amenity}
                                  className="HotelAmenity"
                                >
                                  {amenity}
                                </span>

                              )
                            )}

                        </div>

                        {/* BREAKFAST */}

                        {hotel.breakfastIncluded && (

                          <p className="HotelBreakfast">
                            🍳 Breakfast included
                          </p>

                        )}

                        {/* CANCELLATION */}

                        <p className="HotelCancellation">
                          ✔ {hotel.cancellation}
                        </p>

                      </div>

                    </div>

                    {/* =================================
                        PRICE SECTION
                    ================================= */}

                    <div className="HotelPriceSection">

                      {/* ORIGINAL PRICE */}

                      {hotel.originalPrice >
                        hotel.basePrice && (

                          <p className="HotelOriginalPrice">
                            ₹
                            {hotel.originalPrice.toLocaleString()}
                          </p>

                        )}

                      {/* CURRENT PRICE */}

                      <h2 className="HotelCurrentPrice">
                        ₹
                        {hotel.basePrice.toLocaleString()}
                      </h2>

                      {/* TAX */}

                      <p className="HotelTaxes">
                        + ₹
                        {hotel.taxes.toLocaleString()}{" "}
                        taxes & fees
                      </p>

                      {/* ROOM */}

                      <p className="HotelRoomInfo">
                        {hotel.firstRoomName}
                        {" · "}
                        {hotel.firstRoomBed}
                      </p>

                      {/* GUEST */}

                      {hotel.maxGuests > 0 && (

                        <p className="HotelGuestInfo">
                          👤 Up to{" "}
                          {hotel.maxGuests} guests
                        </p>

                      )}

                      {/* BOOK */}

                      <button
                        type="button"
                        className="HotelBookButton"
                      >
                        Book Now
                      </button>

                    </div>

                  </article>

                )
              )}

          </div>

        </main>

      </section>

      <Footer />

    </div>
  );
}

export default Hotel;

