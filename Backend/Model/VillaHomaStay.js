const mongoose = require("mongoose");

const villaSchema = new mongoose.Schema(
  {
    villaId: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      required: true,
      enum: ["Villa", "Cottage", "Homestay", "Farmhouse"],
    },

    location: {
      city: String,
      state: String,
      country: String,
      area: String,
      latitude: Number,
      longitude: Number,
    },

    pricing: {
      price: {
        type: Number,
        required: true,
      },

      currency: {
        type: String,
        default: "INR",
      },

      cleaningFee: {
        type: Number,
        default: 0,
      },

      taxPercent: {
        type: Number,
        default: 0,
      },
    },

    capacity: {
      bedrooms: {
        type: Number,
        default: 0,
      },

      bathrooms: {
        type: Number,
        default: 0,
      },

      beds: {
        type: Number,
        default: 0,
      },

      maxGuests: {
        type: Number,
        default: 0,
      },
    },

    rating: {
      average: {
        type: Number,
        default: 0,
      },

      totalReviews: {
        type: Number,
        default: 0,
      },
    },

    amenities: {
      type: [String],
      default: [],
    },

    images: {
      type: [String],
      default: [],
    },

    host: {
      name: {
        type: String,
        default: "",
      },

      verified: {
        type: Boolean,
        default: false,
      },
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

      minNights: {
        type: Number,
        default: 1,
      },
    },

    tags: {
      type: [String],
      default: [],
    },

    instantBookable: {
      type: Boolean,
      default: false,
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

module.exports = mongoose.model("Villa", villaSchema);