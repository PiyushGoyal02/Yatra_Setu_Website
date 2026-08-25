const VillaModel = require("../Model/VillaHomaStay");

exports.villaJSON = async (req, res) => {
  try {
    const villas = req.body.villas;

    console.log("Received villas:", villas?.length);

    if (!villas || !Array.isArray(villas)) {
      return res.status(400).json({
        success: false,
        message: "Invalid villa JSON data.",
      });
    }

    const villaData = villas.map((villa) => ({
      villaId: villa.id,

      name: villa.name,

      type: villa.type,

      location: {
        city: villa.location?.city,
        state: villa.location?.state,
        country: villa.location?.country,
        area: villa.location?.area,
        latitude: villa.location?.latitude,
        longitude: villa.location?.longitude,
      },

      pricing: {
        price: villa.pricing?.base_price || 0,
        currency: villa.pricing?.currency || "INR",
        cleaningFee: villa.pricing?.cleaning_fee || 0,
        taxPercent: villa.pricing?.taxes_percent || 0,
      },

      capacity: {
        bedrooms: villa.capacity?.bedrooms || 0,
        bathrooms: villa.capacity?.bathrooms || 0,
        beds: villa.capacity?.beds || 0,
        maxGuests: villa.capacity?.max_guests || 0,
      },

      rating: {
        average: villa.rating?.average || 0,
        totalReviews: villa.rating?.total_reviews || 0,
      },

      amenities: villa.amenities || [],

      images: villa.images || [],

      host: {
        name: villa.host?.name || "",
        verified: villa.host?.verified || false,
      },

      policies: {
        checkIn: villa.policies?.check_in || "",
        checkOut: villa.policies?.check_out || "",
        cancellation: villa.policies?.cancellation || "",
        minNights: villa.policies?.min_nights || 1,
      },

      tags: villa.tags || [],

      instantBookable: villa.instant_bookable || false,

      description: villa.description || "",
    }));

    console.log("Data ready to save:", villaData.length);

    const savedVillas = await VillaModel.insertMany(villaData);

    return res.status(201).json({
      success: true,
      message: "Villa JSON data saved successfully.",
      count: savedVillas.length,
      data: savedVillas,
    });

  } catch (error) {
    console.log("Villa JSON Error:", error);

    return res.status(500).json({
      success: false,
      message: "Villa JSON data could not be saved.",
      error: error.message,
    });
  }
};