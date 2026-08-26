const holidaysData  = require("../Model/HolidyasPackages")

exports.getHolidaysData = async (req, res) => {
  try{

    const HolidaysData = await holidaysData.find()

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