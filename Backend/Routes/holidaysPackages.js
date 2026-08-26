const express = require("express")
const route = express.Router();

const { createPackage } = require("../Cantrollers/HolidyasPackages")
route.post("/holidaysJSON", createPackage);

module.exports = route;