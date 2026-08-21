import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import BaliBeach from "../assets/BaliHoneyMoon.png"
import DubaiTour from "../assets/Burj-Khalifa-Dubai.webp"
import kerlaTour from "../assets/Kerla-Tour.jpg"
import "../CSS_CODE/HolidaysAndPackagesCSS.css"
import HolidayAndPackages from "../assets/HolidaysAndPackagesVideo.mp4"

function HolidaysAndPackages() {

  const getTravelPackages = [
    {
      id: 1,
      packageId: "PKG-BALI-001",
      destinationId: "DEST-BALI",
      categoryId: "CAT-HONEYMOON",
      durationId: "DUR-6N7D",
      priceId: "PRICE-BALI-42999",
      image: BaliBeach,
      title: "Bali Honeymoon Package",
      destination: "Bali, Indonesia",
      departure: "Delhi / Mumbai",
      travelers: "2 Adults",
      rating: 4.7,
      bookings: 860,

      badge: "6N/7D · HONEYMOON SPECIAL",

      inclusions: [
        "✈ Return Flights",
        "🏨 Resort Stay",
        "🍽 Daily Breakfast",
        "🚗 Airport Transfers"
      ],

      itinerary: [
        {
          id: "BALI-DAY-01",
          day: 1,
          title: "Arrival in Bali, transfer to resort, evening at leisure"
        },
        {
          id: "BALI-DAY-02",
          day: 2,
          title: "Ubud Village tour, rice terraces & monkey forest"
        },
        {
          id: "BALI-DAY-03",
          day: 3,
          title: "Nusa Penida island day trip with snorkeling"
        },
        {
          id: "BALI-DAY-04",
          day: 4,
          title: "Leisure day at resort / optional spa & water sports"
        },
        {
          id: "BALI-DAY-05",
          day: 5,
          title: "Kintamani volcano & coffee plantation tour"
        },
        {
          id: "BALI-DAY-06",
          day: 6,
          title: "Uluwatu Temple sunset & Kecak dance show"
        },
        {
          id: "BALI-DAY-07",
          day: 7,
          title: "Departure transfer to airport"
        }
      ],

      originalPrice: 49999,
      price: 42999,
      currency: "INR",
      priceUnit: "person"
    },

    {
      id: 2,
      packageId: "PKG-DUBAI-002",
      destinationId: "DEST-DUBAI",
      categoryId: "CAT-CITY-EXPLORER",
      durationId: "DUR-5N6D",
      priceId: "PRICE-DUBAI-34999",
      image: DubaiTour,
      title: "Dubai City Explorer Package",
      destination: "Dubai, UAE",
      departure: "Delhi / Mumbai",
      travelers: "2 Adults",
      rating: 4.6,
      bookings: 1120,

      badge: "5N/6D · CITY EXPLORER",

      inclusions: [
        "Return Flights",
        "4-Star Hotel",
        "Desert Safari",
        "Visa Assistance"
      ],

      itinerary: [
        {
          id: "DUBAI-DAY-01",
          day: 1,
          title: "Arrival, hotel check-in, Dubai Marina evening cruise"
        },
        {
          id: "DUBAI-DAY-02",
          day: 2,
          title: "Burj Khalifa & Dubai Mall, Fountain Show"
        },
        {
          id: "DUBAI-DAY-03",
          day: 3,
          title: "Desert Safari with BBQ dinner & dune bashing"
        },
        {
          id: "DUBAI-DAY-04",
          day: 4,
          title: "Abu Dhabi day trip — Sheikh Zayed Mosque"
        },
        {
          id: "DUBAI-DAY-05",
          day: 5,
          title: "Leisure day / optional theme park visit"
        },
        {
          id: "DUBAI-DAY-06",
          day: 6,
          title: "Departure transfer to airport"
        }
      ],

      originalPrice: 39999,
      price: 34999,
      currency: "INR",
      priceUnit: "person"
    },

    {
      id: 3,
      packageId: "PKG-KERALA-003",
      destinationId: "DEST-KERALA",
      categoryId: "CAT-FAMILY",
      durationId: "DUR-4N5D",
      priceId: "PRICE-KERALA-22499",
      image: kerlaTour,
      title: "Kerala Backwater Bliss",
      destination: "Kochi - Alleppey - Munnar",
      departure: "Any City",
      travelers: "2 Adults + 1 Child",
      rating: 4.8,
      bookings: 640,

      badge: "4N/5D · FAMILY FRIENDLY",

      inclusions: [
        "Houseboat Stay",
        "Resort Stay",
        "All Meals",
        "Private Transfers"
      ],

      itinerary: [
        {
          id: "KERALA-DAY-01",
          day: 1,
          title: "Arrival in Kochi, local sightseeing, transfer to Munnar"
        },
        {
          id: "KERALA-DAY-02",
          day: 2,
          title: "Munnar tea gardens & Eravikulam National Park"
        },
        {
          id: "KERALA-DAY-03",
          day: 3,
          title: "Transfer to Alleppey, overnight houseboat stay"
        },
        {
          id: "KERALA-DAY-04",
          day: 4,
          title: "Backwater cruise, transfer to Kochi, departure"
        }
      ],

      originalPrice: 26999,
      price: 22499,
      currency: "INR",
      priceUnit: "person"
    }
  ];

  const holidayFilterOptions = {
    title: "Filter Packages",

    destinationType: [
      {
        id: "international",
        label: "International",
        count: 24,
        checked: true
      },
      {
        id: "domestic",
        label: "Domestic",
        count: 36,
        checked: true
      }
    ],

    duration: [
      {
        id: "3-4-days",
        label: "3-4 Days",
        checked: false
      },
      {
        id: "5-6-days",
        label: "5-6 Days",
        checked: true
      },
      {
        id: "7-plus-days",
        label: "7+ Days",
        checked: false
      }
    ],

    packageType: [
      {
        id: "honeymoon",
        label: "Honeymoon",
        checked: true
      },
      {
        id: "family",
        label: "Family",
        checked: false
      },
      {
        id: "adventure",
        label: "Adventure",
        checked: false
      },
      {
        id: "group-tour",
        label: "Group Tour",
        checked: false
      }
    ],

    inclusions: [
      {
        id: "flights",
        label: "Flights Included",
        checked: true
      },
      {
        id: "all-meals",
        label: "All Meals",
        checked: true
      },
      {
        id: "visa-assistance",
        label: "Visa Assistance",
        checked: false
      },
      {
        id: "sightseeing",
        label: "Sightseeing",
        checked: false
      }
    ],

    budget: {
      min: 15000,
      max: 80000,
      current: 15000,
      currency: "INR"
    }
  };

  return (
    <div>
      <Navbar />

      {/* Video And Text */}
      <div>
        <video className="holidayPackagesVideo" autoPlay loop muted playsInline>
          <source src={HolidayAndPackages} type="video/mp4" />
        </video>

        <div className="HolidayVideoTextDiv">
          <h1>Exceptional Holiday Packages</h1>
          <p>Seamless travel, premium stays & unforgettable experiences — all in one plan.</p>
        </div>
      </div>

      {/* Left and Right Section Content */}
      <div className="LeftAndRightHolidayPackages">

        {/* Left Side Holiday Packages Filter */}
        <div className="holidayPackagesFilterWrapper">

          <div className="holidayPackagesFilter">

            <h4 className="holidayPackagesFilterTitle">{holidayFilterOptions.title}</h4>
            <hr className="holidayPackagesFilterDivider" />

            {/* Destination Type */}
            <div className="holidayPackagesFilterSection">

              <h5 className="holidayPackagesFilterHeading">DESTINATION TYPE</h5>
              {holidayFilterOptions.destinationType.map((option) => (
                <label
                  key={option.id}
                  className="holidayPackagesFilterOption"
                >
                  <input
                    type="checkbox"
                    // defaultChecked={option.checked}
                    className="holidayPackagesCheckbox"
                  />

                  <span className="holidayPackagesCheckboxLabel">
                    {option.label}
                    {option.count && ` (${option.count})`}
                  </span>
                </label>
              ))}

            </div>

            {/* Duration */}
            <div className="holidayPackagesFilterSection">

              <h5 className="holidayPackagesFilterHeading">
                DURATION
              </h5>

              {holidayFilterOptions.duration.map((option) => (
                <label
                  key={option.id}
                  className="holidayPackagesFilterOption"
                >
                  <input
                    type="checkbox"
                    // defaultChecked={option.checked}
                    className="holidayPackagesCheckbox"
                  />

                  <span className="holidayPackagesCheckboxLabel">
                    {option.label}
                  </span>
                </label>
              ))}

            </div>


            {/* Package Type */}
            <div className="holidayPackagesFilterSection">

              <h5 className="holidayPackagesFilterHeading">
                PACKAGE TYPE
              </h5>

              {holidayFilterOptions.packageType.map((option) => (
                <label
                  key={option.id}
                  className="holidayPackagesFilterOption"
                >
                  <input
                    type="checkbox"
                    // defaultChecked={option.checked}
                    className="holidayPackagesCheckbox"
                  />

                  <span className="holidayPackagesCheckboxLabel">
                    {option.label}
                  </span>
                </label>
              ))}

            </div>


            {/* Inclusions */}
            <div className="holidayPackagesFilterSection">

              <h5 className="holidayPackagesFilterHeading">
                INCLUSIONS
              </h5>

              {holidayFilterOptions.inclusions.map((option) => (
                <label
                  key={option.id}
                  className="holidayPackagesFilterOption"
                >
                  <input
                    type="checkbox"
                    // defaultChecked={option.checked}
                    className="holidayPackagesCheckbox"
                  />

                  <span className="holidayPackagesCheckboxLabel">
                    {option.label}
                  </span>
                </label>
              ))}

            </div>


            {/* Budget */}
            <div className="holidayPackagesFilterSection holidayPackagesBudgetSection">

              <h5 className="holidayPackagesFilterHeading">
                BUDGET PER PERSON
              </h5>

              <div className="holidayPackagesBudgetLabels">
                <span>
                  ₹{holidayFilterOptions.budget.min.toLocaleString("en-IN")}
                </span>

                <span>
                  ₹{holidayFilterOptions.budget.max.toLocaleString("en-IN")}+
                </span>
              </div>

              <input
                type="range"
                className="holidayPackagesBudgetRange"
                min={holidayFilterOptions.budget.min}
                max={holidayFilterOptions.budget.max}
                step="1000"
                defaultValue={holidayFilterOptions.budget.current}
                aria-label="Budget per person"
              />

            </div>

          </div>

        </div>

        {/* Right Side Holidays And Packages Section */}
        <div>

          <div className="HolidaysHeadingDetails">
            <div className="HolidaysHAndPTag">
              <h2>36 holiday packages found</h2>
              <p>Flights + Hotels + Sightseeing bundled</p>
            </div>

            <div className="HolidaysTags">
              <p>Popular</p>
              <p>Price: Low to High</p>
              <p>Duration</p>
            </div>
          </div>

          <div>
            {
              getTravelPackages.map((HolidaysDetails) => {
                return (
                  <div className="singleCardSection" key={HolidaysDetails.id}>

                    <div className="ImageAndTextDetailsContent">
                      <div className="ImageAndContent">
                        <img
                          src={HolidaysDetails.image}
                          alt="BaliBeach"
                          className="toursImages"
                        />

                        <div className="HolidaysTextsAndPointsDetails">
                          <p className="HolidayBadgeDetails">{HolidaysDetails.badge}</p>
                          <p className="HolidaysTitle">{HolidaysDetails.title}</p>

                          <div className="HolidaysPointsDetails">
                            <div className="HolidaysPicks">
                              <p>📍 {HolidaysDetails.destination}</p>
                              <p>👥 {HolidaysDetails.travelers}</p>
                              <p>⭐ {HolidaysDetails.rating} ({HolidaysDetails.bookings} bookings)</p>
                            </div>
                            <div className="packageInclusions">
                              {HolidaysDetails.inclusions.map((include, index) => (
                                <div className="HolidaysKeysPoint" key={index}>
                                  {include}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>
                      <div>
                        <p className="DayWiseItinerary">Day-wise Itinerary</p>

                        <div>
                          {HolidaysDetails.itinerary.map((HolidaysPoints) => (
                            <div className="HolidayDayTitle" key={HolidaysPoints.id}>
                              <span>{HolidaysPoints.day}</span>
                              <p>{HolidaysPoints.title}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>

                        <div className="DetailsButton">
                          <div className="DelTextPSpanTag">
                            <del>{HolidaysDetails.originalPrice}</del>
                            <div className="PTagAndSpanTAg">
                              <p>₹{HolidaysDetails.price}</p>
                              <span>/person</span>
                            </div>
                          </div>
                          <button className="HolidaysViewDetailsBook">View Details & Book</button>
                        </div>
                      </div>
                    </div>

                  </div>
                )
              })
            }
          </div>

        </div>

      </div>

      <Footer/>
    </div>
  )
}

export default HolidaysAndPackages;