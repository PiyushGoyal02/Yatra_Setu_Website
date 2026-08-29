import React, { useEffect, useState } from "react";
import axios from "axios";

const flightGet = () => {

  const [flightGet, setFlightGet] = useState();

  useEffect(() => {

    const getFlight = async () => {
      try{

        const Response = await axios.get(`http://localhost:4000/api/flightJSON/flightGet`)
        // console.log(Response.data.data);
        setFlightGet(Response.data.data);

      }catch(error){
        conosle.log(error.message);
      }
    }

    getFlight();
  },[])

  return { flightGet };
}

export default flightGet;