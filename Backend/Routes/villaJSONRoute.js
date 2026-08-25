const express = require("express")
const route = express.Router();

const { villaJSON } = require("../Cantrollers/VillaAndHomeStay")
route.post('/villaJSON', villaJSON)

module.exports = route;