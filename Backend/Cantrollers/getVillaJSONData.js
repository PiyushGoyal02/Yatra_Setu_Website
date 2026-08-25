const VillaModel = require("../Model/VillaHomaStay");

exports.villaGetData = async (req, res) => {
  try {
    const villas = await VillaModel.find();

    return res.status(200).json({
      success: true,
      message: "Villa data fetched successfully.",
      count: villas.length,
      data: villas,
    });

  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      success: false,
      message: "Villa JSON data could not be fetched.",
      error: error.message,
    });
  }
};