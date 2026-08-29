const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    hotelId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    brand: {
      type: String,
      default: "Independent",
      trim: true,
    },

    starRating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    propertyType: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      city: {
        type: String,
        default: "",
        trim: true,
      },

      state: {
        type: String,
        default: "",
        trim: true,
      },

      country: {
        type: String,
        default: "",
        trim: true,
      },

      area: {
        type: String,
        default: "",
        trim: true,
      },

      latitude: {
        type: Number,
      },

      longitude: {
        type: Number,
      },

      distanceFromLandmark: {
        type: String,
        default: "",
        trim: true,
      },
    },

    pricing: {
      basePrice: {
        type: Number,
        required: true,
      },

      originalPrice: {
        type: Number,
        default: 0,
      },

      currency: {
        type: String,
        default: "INR",
      },

      taxesPercent: {
        type: Number,
        default: 0,
      },

      breakfastIncluded: {
        type: Boolean,
        default: false,
      },
    },

    rating: {
      average: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },

      totalReviews: {
        type: Number,
        default: 0,
      },

      cleanliness: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },

      service: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },

      location: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },

      valueForMoney: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
    },

    roomTypes: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },

        price: {
          type: Number,
          required: true,
        },

        maxGuests: {
          type: Number,
          default: 0,
        },

        bedType: {
          type: String,
          default: "",
          trim: true,
        },
      },
    ],

    amenities: {
      type: [String],
      default: [],
    },

    images: {
      type: [String],
      default: [],
    },

    policies: {
      checkIn: {
        type: String,
        default: "",
      },

      checkOut: {
        type: String,
        default: "",
      },

      cancellation: {
        type: String,
        default: "",
      },

      petsAllowed: {
        type: Boolean,
        default: false,
      },
    },

    tags: {
      type: [String],
      default: [],
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hotel", hotelSchema);