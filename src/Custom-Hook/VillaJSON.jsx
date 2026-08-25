import axios from "axios";
import { useEffect } from "react";
import villaJSON from "../JSON Files/Villa_JSON.json";

const VillaJSONHook = () => {
  // useEffect(() => {
  //   const villaJSONDetails = async () => {
  //     try {
  //       console.log("Sending villa JSON data...");

  //       const response = await axios.post(
          // `http://localhost:4000/api/villaJSON/villaJSON`,
  //         villaJSON,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       console.log("Villa data saved successfully:", response.data);
  //     } catch (error) {
  //       console.error(
  //         "Villa JSON Error:",
  //         error.response?.data || error.message
  //       );
  //     }
  //   };

  //   villaJSONDetails();
  // }, []);

  return null;
};

export default VillaJSONHook;