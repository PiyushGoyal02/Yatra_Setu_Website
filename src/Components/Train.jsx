import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import trainVideo from "../assets/trainVideo.mp4"
import "../CSS_CODE/TrainCSS.css"

function Train() {

  const trainFilters = [
    {
      category: "departureTime",
      title: "DEPARTURE TIME",
      options: [
        { id: 1, label: "Early Morning (00-06)" },
        { id: 2, label: "Morning (06-12)" },
        { id: 3, label: "Afternoon (12-18)" },
        { id: 4, label: "Night (18-24)" },
      ],
    },

    {
      category: "class",
      title: "CLASS",
      options: [
        { id: 1, label: "Sleeper (SL)" },
        { id: 2, label: "AC 3 Tier (3A)" },
        { id: 3, label: "AC 2 Tier (2A)" },
        { id: 4, label: "AC First Class (1A)" },
      ],
    },

    {
      category: "trainType",
      title: "TRAIN TYPE",
      options: [
        { id: 1, label: "Rajdhani" },
        { id: 2, label: "Shatabdi" },
        { id: 3, label: "Duronto" },
        { id: 4, label: "Superfast" },
      ],
    },

    {
      category: "quota",
      title: "QUOTA",
      options: [
        { id: 1, label: "General" },
        { id: 2, label: "Tatkal" },
        { id: 3, label: "Ladies" },
      ],
    },
  ];

  const trainsDetails = [
    {
      id: 1,
      trainName: "Rajdhani Express",
      trainNumber: "12951",
      runsOn: "Runs Daily",
      departureTime: "16:25",
      departureStation: "NDLS",
      departureDay: "Day 1",
      duration: "15h 50m",
      arrivalTime: "08:15",
      arrivalStation: "BCT",
      arrivalDay: "Day 2",
      classes: [
        {
          code: "SL",
          status: "Available 128",
          price: 745,
          statusType: "available"
        },
        {
          code: "3A",
          status: "Available 42",
          price: 1455,
          statusType: "available"
        },
        {
          code: "2A",
          status: "RAC 8",
          price: 2110,
          statusType: "rac"
        },
        {
          code: "1A",
          status: "WL 4",
          price: 3590,
          statusType: "waitlist"
        }
      ],
      buttonText: "Select"
    },

    {
      id: 2,
      trainName: "August Kranti Rajdhani",
      trainNumber: "12953",
      runsOn: "Runs Daily",
      departureTime: "17:15",
      departureStation: "NDLS",
      departureDay: "Day 1",
      duration: "17h 05m",
      arrivalTime: "10:20",
      arrivalStation: "BCT",
      arrivalDay: "Day 2",
      classes: [
        {
          code: "SL",
          status: "Available 26",
          price: 760,
          statusType: "available"
        },
        {
          code: "3A",
          status: "Available 55",
          price: 1490,
          statusType: "available"
        },
        {
          code: "2A",
          status: "Available 19",
          price: 2155,
          statusType: "available"
        },
        {
          code: "1A",
          status: "Available 6",
          price: 3640,
          statusType: "available"
        }
      ],
      buttonText: "Select"
    },

    {
      id: 3,
      trainName: "Mumbai Duronto Express",
      trainNumber: "12261",
      runsOn: "Mon, Wed, Fri",
      departureTime: "23:00",
      departureStation: "NDLS",
      departureDay: "Day 1",
      duration: "14h 30m",
      arrivalTime: "13:30",
      arrivalStation: "BCT",
      arrivalDay: "Day 2",
      classes: [
        {
          code: "SL",
          status: "WL 12",
          price: 720,
          statusType: "waitlist"
        },
        {
          code: "3A",
          status: "Available 33",
          price: 1410,
          statusType: "available"
        },
        {
          code: "2A",
          status: "Available 21",
          price: 2080,
          statusType: "available"
        },
        {
          code: "1A",
          status: "Available 9",
          price: 3510,
          statusType: "available"
        }
      ],
      buttonText: "Select"
    },

    {
      id: 4,
      trainName: "Golden Temple Mail",
      trainNumber: "12904",
      runsOn: "Runs Daily",
      departureTime: "18:55",
      departureStation: "NDLS",
      departureDay: "Day 1",
      duration: "16h 10m",
      arrivalTime: "11:05",
      arrivalStation: "BCT",
      arrivalDay: "Day 2",
      classes: [
        {
          code: "SL",
          status: "Available 86",
          price: 690,
          statusType: "available"
        },
        {
          code: "3A",
          status: "Available 31",
          price: 1380,
          statusType: "available"
        },
        {
          code: "2A",
          status: "RAC 4",
          price: 2015,
          statusType: "rac"
        },
        {
          code: "1A",
          status: "Available 3",
          price: 3420,
          statusType: "available"
        }
      ],
      buttonText: "Select"
    },

    {
      id: 5,
      trainName: "August Kranti Express",
      trainNumber: "12954",
      runsOn: "Runs Daily",
      departureTime: "17:40",
      departureStation: "NDLS",
      departureDay: "Day 1",
      duration: "16h 55m",
      arrivalTime: "10:35",
      arrivalStation: "BCT",
      arrivalDay: "Day 2",
      classes: [
        {
          code: "SL",
          status: "Available 44",
          price: 750,
          statusType: "available"
        },
        {
          code: "3A",
          status: "Available 18",
          price: 1465,
          statusType: "available"
        },
        {
          code: "2A",
          status: "Available 7",
          price: 2120,
          statusType: "available"
        },
        {
          code: "1A",
          status: "WL 2",
          price: 3595,
          statusType: "waitlist"
        }
      ],
      buttonText: "Select"
    },

    {
      id: 6,
      trainName: "Mumbai Central Rajdhani",
      trainNumber: "12952",
      runsOn: "Runs Daily",
      departureTime: "16:55",
      departureStation: "NDLS",
      departureDay: "Day 1",
      duration: "15h 35m",
      arrivalTime: "08:30",
      arrivalStation: "BCT",
      arrivalDay: "Day 2",
      classes: [
        {
          code: "SL",
          status: "Available 112",
          price: 735,
          statusType: "available"
        },
        {
          code: "3A",
          status: "Available 38",
          price: 1440,
          statusType: "available"
        },
        {
          code: "2A",
          status: "RAC 6",
          price: 2095,
          statusType: "rac"
        },
        {
          code: "1A",
          status: "Available 5",
          price: 3580,
          statusType: "available"
        }
      ],
      buttonText: "Select"
    }
  ];

  return (
    <div>

      <Navbar />

      <div>
        <video className="trainVideo" loop muted playsInline autoPlay>
          <source src={trainVideo} type="video/mp4" />
        </video>

        <div className="TrainVideoTextDiv">
          <h1>Plan Your Journey with Confidence</h1>
          <p>Find available trains, check PNR status, and book your tickets seamlessly.</p>
        </div>
      </div>

      <div className="LeftAndRightSideTrainSide">

        {/* Left Side Filter Section */}
        <div>
          <div className="FilterLeftSide">

            <h4>Filter Trains</h4>

            <hr />

            <div className="filterContainer">

              {trainFilters.map((filter) => (
                <div className="filterSection" key={filter.category}>
                  <h5>{filter.title}</h5>

                  {filter.options.map((option) => (
                    <label key={option.id} className="filterOption">
                      <input
                        type="checkbox"
                        className="starCheckBoxTag"
                      />

                      <span className="spanStarDetails">
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

        {/* Right Side Trains Section */}
        <div>

          <div className="trainHeadingDetails">
            <div className="TrainsHeadingPTag">
              <h4>New Delhi (NDLS) → Mumbai Central (BCT)</h4>
              <p>Thu, 21 Aug 2026 · 18 trains found</p>
            </div>
            <div className="TrainHeadingPDetails">
              <p>Departure Time</p>
              <p>Duration</p>
              <p>Price</p>
            </div>
          </div>

          <div className="fakeTrain">
            {
              trainsDetails.map((trainDetails) => {
                return (
                  <div className="singleTrainDetailsSection" key={trainDetails.id}>
                    
                    <div className="trainNameNumberDuration">
                      <div className="trainNameAndNumber">
                        <p className="trainName">{trainDetails.trainName}</p>
                        <p className="trainNumber">Train No. {trainDetails.trainNumber} {trainDetails.runsOn}</p>
                      </div>
                      <p className="trainDuration">Duration: {trainDetails.duration}</p>
                    </div>

                    <hr className="HRTag"/>

                    <div className="DepartureAndArrivalTimeManage">

                      <div className="TrainDepartureDetails">
                        <p className="trainDuration">{trainDetails.duration}</p>
                        <p className="trainDepartureStation">{trainDetails.departureStation} {trainDetails.departureDay}</p>
                      </div>

                      <div className="trainDotLineSection">
                        <span className="trainOrangeDotSpan"></span>
                        <span className="trainLineDuration"></span>
                        <span className="trainOrangeDotSpan"></span>
                      </div>

                      <div className="TrainArrivalDetails">
                        <p className="trainArrivalTime">{trainDetails.arrivalTime}</p>
                        <p className="trainArrivalStationDay">{trainDetails.arrivalStation} {trainDetails.arrivalDay}</p>
                      </div>
                    </div>

                    <div className="trainCodeDetailsDiv">
                      {
                        trainDetails.classes.map((trainAvailableDetails, id) => {
                          return (
                            <div className="trainCodeDetails" key={id}>
                              <p>{trainAvailableDetails.code}</p>
                              <p className="ColorText">{trainAvailableDetails.status}</p>
                              <p>₹{trainAvailableDetails.price}</p>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
      
      <br/> <br/>
      <Footer/>
    </div>
  )
}

export default Train;