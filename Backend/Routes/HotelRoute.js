const express = require("express")
const route = express.Router();

const { hotelControllers, getHotelData } = require("../Cantrollers/HotelControllers")
route.post("/HotelJSON", hotelControllers)
route.get("/hotelGet", getHotelData)

module.exports = route;