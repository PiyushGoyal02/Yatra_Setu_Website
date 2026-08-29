const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {

    flightId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    flightNumber: {
      type: String,
      required: true,
      trim: true,
    },

    class: {
      type: String,
      required: true,
      enum: ["Economy", "Premium Economy", "Business", "First Class"],
      default: "Economy",
    },

    airline: {
      name: {
        type: String,
        required: true,
        trim: true,
      },

      code: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
      },

      logo: {
        type: String,
        default: "",
      },
    },

    departure: {
      airport: {
        type: String,
        required: true,
        trim: true,
      },

      airportCode: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
      },

      city: {
        type: String,
        required: true,
        trim: true,
      },

      country: {
        type: String,
        required: true,
        trim: true,
      },

      date: {
        type: String,
        required: true,
      },

      time: {
        type: String,
        required: true,
      },

      terminal: {
        type: String,
        default: "",
        trim: true,
      },
    },

    arrival: {
      airport: {
        type: String,
        required: true,
        trim: true,
      },

      airportCode: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
      },

      city: {
        type: String,
        required: true,
        trim: true,
      },

      country: {
        type: String,
        required: true,
        trim: true,
      },

      date: {
        type: String,
        required: true,
      },

      time: {
        type: String,
        required: true,
      },

      terminal: {
        type: String,
        default: "",
        trim: true,
      },
    },

    duration: {
      type: String,
      required: true,
      trim: true,
    },

    stops: {
      count: {
        type: Number,
        default: 0,
        min: 0,
      },

      type: {
        type: String,
        default: "Non-stop",
        trim: true,
      },
    },

    aircraft: {
      model: {
        type: String,
        default: "",
        trim: true,
      },

      registration: {
        type: String,
        default: "",
        trim: true,
        uppercase: true,
      },
    },

    pricing: {
      basePrice: {
        type: Number,
        required: true,
        min: 0,
      },

      taxes: {
        type: Number,
        default: 0,
        min: 0,
      },

      fees: {
        type: Number,
        default: 0,
        min: 0,
      },

      totalPrice: {
        type: Number,
        required: true,
        min: 0,
      },

      currency: {
        type: String,
        default: "INR",
        trim: true,
        uppercase: true,
      },
    },

    baggage: {
      cabin: {
        type: String,
        default: "",
        trim: true,
      },

      checkIn: {
        type: String,
        default: "",
        trim: true,
      },
    },

    seatsAvailable: {
      type: Number,
      default: 0,
      min: 0,
    },

    refundable: {
      type: Boolean,
      default: false,
    },

    mealIncluded: {
      type: Boolean,
      default: false,
    },

    amenities: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: [
        "On Time",
        "Delayed",
        "Cancelled",
        "Boarding",
        "Departed",
        "Landed",
      ],
      default: "On Time",
    },

    tags: {
      type: [String],
      default: [],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);