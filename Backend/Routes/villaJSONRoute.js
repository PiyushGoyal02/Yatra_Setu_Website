const express = require("express")
const route = express.Router();

const { villaJSON, villaGetData } = require("../Cantrollers/VillaAndHomeStay")
route.post('/villaJSON', villaJSON)
route.get("/getVillaDetails", villaGetData)

module.exports = route;