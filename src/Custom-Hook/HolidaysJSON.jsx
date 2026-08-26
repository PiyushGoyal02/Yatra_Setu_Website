import axios from "axios";
import React, { useEffect } from "react";
import HolidaysJSON from "../JSON Files/Holidays_JSON.json";

const HolidaysJSONComp = () => {
  // useEffect(() => {
  //   const sendHolidaysJSON = async () => {
  //     try {
  //       console.log("Sending:", HolidaysJSON);

  //       const response = await axios.post(
  //         "http://localhost:4000/api/holidaysJSON/holidaysJSON",
  //         HolidaysJSON
  //       );

  //       console.log("Saved successfully:", response.data);
  //     } catch (error) {
  //       console.error("Error:", error.response?.data || error.message);
  //     }
  //   };

  //   sendHolidaysJSON();
  // }, []);

  return null;
};

export default HolidaysJSONComp;