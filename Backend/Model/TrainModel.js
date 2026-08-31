import mongoose from "mongoose";

const trainSchema = new mongoose.Schema(
  {
    trainNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    trainName: {
      type: String,
      required: true,
      trim: true,
    },

    operator: {
      type: String,
      required: true,
      default: "Indian Railways",
      trim: true,
    },

    departure: [
      {
        time: {
          type: String,
          required: true,
          trim: true,
        },

        stationCode: {
          type: String,
          required: true,
          trim: true,
          uppercase: true,
        },

        stationName: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],

    arrival: [
      {
        time: {
          type: String,
          required: true,
          trim: true,
        },

        stationCode: {
          type: String,
          required: true,
          trim: true,
          uppercase: true,
        },

        stationName: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],

    duration: {
      type: String,
      required: true,
      trim: true,
    },

    stops: [
      {
        count: {
          type: Number,
          required: true,
          min: 0,
        },

        type: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],

    classes: {
      type: [String],
      required: true,
      default: [],
    },

    pricing: [
      {
        class: {
          type: String,
          required: true,
          trim: true,
          uppercase: true,
        },

        totalPrice: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],

    amenities: {
      type: [String],
      default: [],
    },

    availability: {
      type: String,
      enum: [
        "Available",
        "RAC",
        "Waiting List",
        "Not Available",
      ],
      default: "Available",
    },

    buttonText: {
      type: String,
      default: "Select",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Train = mongoose.model("Train", trainSchema);

export default Train;