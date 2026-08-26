import axios from "axios";
import React, { useEffect, useState } from "react";

const getHolidays = () => {

  const [holidaysData, setHolidaysData] = useState();

  useEffect(() => {

    const getHolidaysData = async () => {
      try{

        const Response = await axios.get(`http://localhost:4000/api/getHolidays/getVillaDetails`)

        setHolidaysData(Response.data.data)
        console.log(holidaysData, "holidaysData")

      }catch(error){
        console.log(error.message)
      }
    }

    getHolidaysData();
  },[])

  return { holidaysData };
}

export default getHolidays;