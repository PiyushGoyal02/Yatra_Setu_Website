const mongoose = require("mongoose")

const AuthModel = new mongoose.Schema(
  {
    FirstName: {
      type: String
    },

    LastName: {
      type: String
    },

    Email: {
      type: String
    },

    MobNumber: {
      type: String
    },

    Password: {
      type: String
    },

    DOB: {
      type: String
    },

    Gender: {
      type: String
    },
  }
)

module.exports = mongoose.model("Auth", AuthModel);