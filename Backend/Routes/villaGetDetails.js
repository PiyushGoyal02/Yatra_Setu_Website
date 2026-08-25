const express = require("express")
const route = express.Router();

const { villaGetData } = require("../Cantrollers/getVillaJSONData")
route.get("/getVillaDetails", villaGetData)

module.exports = route;