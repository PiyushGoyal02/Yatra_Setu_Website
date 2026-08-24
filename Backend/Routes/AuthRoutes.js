const express = require("express");
const { LoginAPI,SignUpAPI } = require("../Cantrollers/AuthConnection");
const router = express.Router();

router.post("/signup", SignUpAPI);
router.post("/login", LoginAPI);

module.exports = router;