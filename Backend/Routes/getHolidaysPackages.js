const express = require("express")
const route = express.Router();

const { getHolidaysData } = require("../Cantrollers/getHolidaysPackages")
route.get("/getVillaDetails", getHolidaysData)

module.exports = route;