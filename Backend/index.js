// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 4000;

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true  // Allow cookies with cross-origin requests
};

app.use(cors(corsOptions));
app.use(express.json());  // frontend JSON data understand.
app.use(cookieParser());  // It's works for login and logout form data.

// Database Connection
const dataBase = require('./Config/DBConect')
dataBase.Dbconnect();

// Root Route
app.get("/", (req, res) => {
  res.send("Hello From Backend!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});