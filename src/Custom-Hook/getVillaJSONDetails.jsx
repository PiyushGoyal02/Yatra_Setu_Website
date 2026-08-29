import axios from "axios";
import { useEffect, useState } from "react";

const VillaGetJSONDetails = () => {
  const [villaDetails, setVillaDetails] = useState([]);

  useEffect(() => {
    const villaDataGet = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/villaJSON/getVillaDetails`
        );

        setVillaDetails(response.data.data);

        // console.log("Villa Details:", response.data.data);
      } catch (error) {
        console.log(
          "Error:",
          error.response?.data?.message || error.message
        );
      }
    };

    villaDataGet();
  }, []);

  return { villaDetails };
};

export default VillaGetJSONDetails;