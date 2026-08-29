const HotelModel = require("../Model/HotelModel");

exports.hotelControllers = async (req, res) => {
  try {
    const hotels = req.body.hotels;

    // Validate hotels array
    if (!hotels || !Array.isArray(hotels) || hotels.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid hotel JSON data.",
      });
    }

    const hotelsData = hotels.map((hotel) => ({
      hotelId: hotel.id,

      name: hotel.name,

      brand: hotel.brand,

      starRating: hotel.starRating,

      propertyType: hotel.propertyType,

      location: {
        city: hotel.location?.city || "",
        state: hotel.location?.state || "",
        country: hotel.location?.country || "",
        area: hotel.location?.area || "",
        latitude: hotel.location?.latitude || 0,
        longitude: hotel.location?.longitude || 0,
        distanceFromLandmark:
          hotel.location?.distanceFromLandmark || "",
      },

      pricing: {
        basePrice: hotel.pricing?.basePrice || 0,
        originalPrice: hotel.pricing?.originalPrice || 0,
        currency: hotel.pricing?.currency || "INR",
        taxesPercent: hotel.pricing?.taxesPercent || 0,
        breakfastIncluded: hotel.pricing?.breakfastIncluded || false,
      },

      rating: {
        average: hotel.rating?.average || 0,
        totalReviews: hotel.rating?.totalReviews || 0,
        cleanliness: hotel.rating?.cleanliness || 0,
        service: hotel.rating?.service || 0,
        location: hotel.rating?.location || 0,
        valueForMoney: hotel.rating?.valueForMoney || 0,
      },

      roomTypes: hotel.roomTypes || [],
      amenities: hotel.amenities || [],
      images: hotel.images || [],

      policies: {
        checkIn: hotel.policies?.checkIn || "",
        checkOut: hotel.policies?.checkOut || "",
        cancellation: hotel.policies?.cancellation || "",
        petsAllowed: hotel.policies?.petsAllowed || false,
      },

      tags: hotel.tags || [],
      description: hotel.description || "",
    }));

    console.log("Data ready to save:", hotelsData.length);

    const savedHotel = await HotelModel.insertMany(hotelsData);

    return res.status(201).json({
      success: true,
      message: "Hotel JSON data saved successfully.",
      count: savedHotel.length,
      data: savedHotel,
    });

  } catch (error) {
    console.log("Hotel Save Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Hotel details can't be saved in backend.",
      error: error.message,
    });
  }
};


// Get Hotel Details
exports.getHotelData = async (req, res) => {
  try {

    const hotelData = await HotelModel.find();

    if (!hotelData) {
      return res.status(404).json(
        {
          success: false,
          message: "We don't found your data"
        }
      )
    }

    return res.status(201).json(
      {
        success: true,
        message: "We successfully get hotel details",
        data: hotelData
      }
    )

  } catch (error) {
    console.log(error.message)
    return res.status(404).json(
      {
        success: false,
        message: "We don't found your data, please check your API"
      }
    )
  }
}