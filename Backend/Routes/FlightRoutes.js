const express = require("express")
const route = express.Router();

const { flightControllers, getFlightData } =require("../Cantrollers/FlightDetails")
route.post("/flightJSON", flightControllers)
route.get("/flightGet", getFlightData)

module.exports = route;