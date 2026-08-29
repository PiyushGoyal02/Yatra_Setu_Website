import axios from "axios";
import React, { useEffect, useState } from "react";

const getHotelJSON = () => {

  const [hotelData, setHotelData] = useState()

  useEffect(() => {

    const getHotel = async () => {
      try{
        const response = await axios.get(`http://localhost:4000/api/hotelJSON/hotelGet`)
        setHotelData(response.data.data)
        // console.log(hotelData, " hotelData")

      }catch(error){
        console.log(error.message)
      }
    }
    getHotel();
  },[])

  return { hotelData };
}

export default getHotelJSON;