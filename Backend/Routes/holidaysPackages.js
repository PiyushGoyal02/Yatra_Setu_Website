const express = require("express")
const route = express.Router();

const { createPackage, getHolidaysData } = require("../Cantrollers/HolidyasPackages")
route.post("/holidaysJSON", createPackage);
route.get("/getHolidaysDetails", getHolidaysData)

module.exports = route;