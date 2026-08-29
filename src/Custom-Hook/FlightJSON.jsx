import { useEffect } from "react"
import FlightJSON from "../JSON Files/Flight_JSON.json"
import axios from "axios"

const FlightData = () => {

  // useEffect(() =>{
  //   const FlightData = async () => {
  //     try{

  //       const Response = await axios.post(`http://localhost:4000/api/flightJSON/flightJSON`,FlightJSON,{
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //       console.log(Response.data.data)

  //     }catch(error){
  //       console.log(error.message)
  //     }
  //   }
  //   FlightData();
  // },[])

}

export default FlightData;