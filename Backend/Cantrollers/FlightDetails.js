const FlightModel = require("../Model/FlightModel");

exports.flightControllers = async (req, res) => {
  try {
    const flights = req.body.flights;

    // Validate request data
    if (!flights || !Array.isArray(flights) || flights.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid flight JSON data.",
      });
    }

    // Save flights
    const flightsData = flights.map((flight) => ({

      flightId: flight.flightId,
      flightNumber: flight.flightNumber,
      class: flight.class,

      airline: {
        name: flight.airline?.name || "",
        code: flight.airline?.code || "",
        logo: flight.airline?.logo || "",
      },

      departure: {
        airport: flight.departure?.airport || "",
        airportCode: flight.departure?.airportCode || "",
        city: flight.departure?.city || "",
        country: flight.departure?.country || "",
        date: flight.departure?.date || "",
        time: flight.departure?.time || "",
        terminal: flight.departure?.terminal || "",
      },

      arrival: {
        airport: flight.arrival?.airport || "",
        airportCode: flight.arrival?.airportCode || "",
        city: flight.arrival?.city || "",
        country: flight.arrival?.country || "",
        date: flight.arrival?.date || "",
        time: flight.arrival?.time || "",
        terminal: flight.arrival?.terminal || "",
      },

      duration: flight.duration || "",

      stops: {
        count: flight.stops?.count || 0,
        type: flight.stops?.type || "Non-stop",
      },

      aircraft: {
        model: flight.aircraft?.model || "",
        registration: flight.aircraft?.registration || "",
      },

      pricing: {
        basePrice: flight.pricing?.basePrice || 0,
        taxes: flight.pricing?.taxes || 0,
        fees: flight.pricing?.fees || 0,
        totalPrice: flight.pricing?.totalPrice || 0,
        currency: flight.pricing?.currency || "INR",
      },

      baggage: {
        cabin: flight.baggage?.cabin || "",
        checkIn: flight.baggage?.checkIn || "",
      },

      seatsAvailable: flight.seatsAvailable || 0,
      refundable: flight.refundable || false,
      mealIncluded: flight.mealIncluded || false,
      amenities: flight.amenities || [],
      status: flight.status || "On Time",
      tags: flight.tags || [],
    }));

    console.log(
      "Flight data ready to save:",
      flightsData.length
    );

    // Insert all flights into MongoDB
    const savedFlights = await FlightModel.insertMany(
      flightsData
    );

    return res.status(201).json({
      success: true,
      message: "Flight JSON data saved successfully.",
      count: savedFlights.length,
      data: savedFlights,
    });

  } catch (error) {

    console.error("Flight Save Error:",error.message);
    return res.status(500).json({
      success: false,
      message: "Flight details can't be saved in backend.",
      error: error.message,
    });
  }
};


// Get Flights Data
exports.getFlightData = async (req, res) => {
  try{

    const FlightData = await FlightModel.find()

    console.log(FlightData, "FlightData")

    return res.status(201).json(
      {
        success: true,
        message: "Flight Data Successfully Get.",
        data: FlightData
      }
    )

  }catch(error){
    console.log(error,message)
    return res.status(404).json(
      {
        success: false,
        message: "Flight Data we can't get"
      }
    )
  }
}