import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../CSS_CODE/HolidaysAndPackagesCSS.css"
import HolidayAndPackages from "../assets/HolidaysAndPackagesVideo.mp4"
import getHolidaysPackages from "../Custom-Hook/getHolidaysPackages";

function HolidaysAndPackages() {

  const { holidaysData } = getHolidaysPackages();

  const travelPackages = Array.isArray(holidaysData) ? holidaysData : [];

  const getImageUrl = (image) => {
    if (!image) return "";
    const match = image.match(/\]\((.*?)\)$/);
    return match ? match[1] : image;
  };

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
              <h2>{travelPackages.length} holiday packages found</h2>
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
              travelPackages.map((HolidaysDetails) => {
                return (
                  <div className="singleCardSection" key={HolidaysDetails.packageId}>

                    <div className="ImageAndTextDetailsContent">
                      <div className="ImageAndContent">
                        <img
                          src={getImageUrl(HolidaysDetails.images?.[0])}
                          alt={HolidaysDetails.title}
                          className="toursImages"
                        />

                        <div className="HolidaysTextsAndPointsDetails">
                          <p className="HolidayBadgeDetails">{`${HolidaysDetails.duration?.nights ?? 0}N/${HolidaysDetails.duration?.days ?? 0}D · ${HolidaysDetails.packageType?.toUpperCase() ?? ""}`}</p>
                          <p className="HolidaysTitle">{HolidaysDetails.title}</p>

                          <div className="HolidaysPointsDetails">
                            <div className="HolidaysPicks">
                              <p>📍 {`${HolidaysDetails.destination?.city ?? ""}, ${HolidaysDetails.destination?.country ?? ""}`}</p>
                              <p>👥 {HolidaysDetails.pricing?.twinSharing ? "Twin Sharing" : "Per Person"}</p>
                              <p>⭐ {HolidaysDetails.rating?.average ?? 0} ({HolidaysDetails.rating?.totalReviews ?? 0} reviews)</p>
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
                            <div className="HolidayDayTitle" key={HolidaysPoints._id || `${HolidaysDetails.packageId}-${HolidaysPoints.day}`}>
                              <span>{HolidaysPoints.day}</span>
                              <p>{HolidaysPoints.title}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>

                        <div className="DetailsButton">
                          <div className="DelTextPSpanTag">
                            <del>{HolidaysDetails.pricing?.originalPrice?.toLocaleString("en-IN")}</del>
                            <div className="PTagAndSpanTAg">
                              <p>₹{HolidaysDetails.pricing?.pricePerPerson?.toLocaleString("en-IN")}</p>
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