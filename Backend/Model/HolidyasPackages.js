const mongoose = require("mongoose");

const holidayPackageSchema = new mongoose.Schema(
  {
    packageId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    packageType: {
      type: String,
      required: true,
      enum: [
        "Honeymoon",
        "Family",
        "Adventure",
        "Luxury",
        "Group Tour",
        "Budget",
        "Solo",
      ],
    },

    hotelCategory: {
      type: String,
      required: true,
      enum: ["3-Star", "4-Star", "5-Star", "Boutique", "Resort"],
    },

    destination: {
      city: {
        type: String,
        default: "",
      },
      region: {
        type: String,
        default: "",
      },
      country: {
        type: String,
        default: "",
      },
    },

    duration: {
      nights: {
        type: Number,
        default: 0,
      },
      days: {
        type: Number,
        default: 1,
      },
    },

    pricing: {
      pricePerPerson: {
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
      twinSharing: {
        type: Boolean,
        default: true,
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

    departureCities: {
      type: [String],
      default: [],
    },

    bestTimeToVisit: {
      type: String,
      default: "",
    },

    inclusions: {
      type: [String],
      default: [],
    },

    exclusions: {
      type: [String],
      default: [],
    },

    highlights: {
      type: [String],
      default: [],
    },

    itinerary: {
      type: [
        {
          day: {
            type: Number,
          },
          title: {
            type: String,
          },
          description: {
            type: String,
          },
        },
      ],
      default: [],
    },

    images: {
      type: [String],
      default: [],
    },

    tags: {
      type: [String],
      default: [],
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("HolidayPackage", holidayPackageSchema);