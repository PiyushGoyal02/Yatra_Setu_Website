import axios from "axios";
import React, { useEffect } from "react";
import HotelJSONDetails from "../JSON Files/Hotel_JSON.json"

const HotelDetails = () => {

  // useEffect(() => {
  //   const hotelJSON = async () => {
  //     try {

  //       const Response = await axios.post(
  //         `http://localhost:4000/api/hotelJSON/HotelJSON`, HotelJSONDetails,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         })

  //       console.log(Response.data.data)

  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //   hotelJSON();
  // }, [])
  return null;
}

export default HotelDetails;