const HolidayPackage = require("../Model/HolidyasPackages");

exports.createPackage = async (req, res) => {
  try {
    const packages = req.body.packages;

    if (!Array.isArray(packages) || packages.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No holiday packages found.",
      });
    }

    const savedPackages = [];

    for (const item of packages) {
      const holidayPackage = new HolidayPackage({
        packageId: item.id,
        title: item.title,
        packageType: item.package_type,
        hotelCategory: item.hotel_category,

        destination: {
          city: item.destination?.city || "",
          region: item.destination?.region || "",
          country: item.destination?.country || "",
        },

        duration: {
          nights: item.duration?.nights || 0,
          days: item.duration?.days || 1,
        },

        pricing: {
          pricePerPerson: item.pricing?.price_per_person,
          originalPrice: item.pricing?.original_price || 0,
          currency: item.pricing?.currency || "INR",
          twinSharing: item.pricing?.twin_sharing ?? true,
        },

        rating: {
          average: item.rating?.average || 0,
          totalReviews: item.rating?.total_reviews || 0,
        },

        departureCities: item.departure_cities || [],
        bestTimeToVisit: item.best_time_to_visit || "",
        inclusions: item.inclusions || [],
        exclusions: item.exclusions || [],
        highlights: item.highlights || [],

        itinerary: (item.itinerary || []).map((day) => ({
          day: day.day,
          title: day.title,
          description: day.description,
        })),

        images: item.images || [],
        tags: item.tags || [],
        isFeatured: item.isFeatured ?? false,
        isActive: item.isActive ?? true,
      });

      const savedPackage = await holidayPackage.save();
      savedPackages.push(savedPackage);
    }

    res.status(201).json({
      success: true,
      message: "Holiday packages saved successfully.",
      data: savedPackages,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Error saving holiday packages.",
      error: error.message,
    });
  }
};


// Get Holidays And Packages Data
exports.getHolidaysData = async (req, res) => {
  try{

    const HolidaysData = await HolidayPackage.find()

    console.log(HolidaysData, "HolidaysData")

    return res.status(201).json(
      {
        success: true,
        message: "Holidays Packages Data Successfully Get.",
        data: HolidaysData
      }
    )

  }catch(error){
    console.log(error,message)
    return res.status(404).json(
      {
        success: false,
        message: "Holidyas Data we can't get"
      }
    )
  }
}