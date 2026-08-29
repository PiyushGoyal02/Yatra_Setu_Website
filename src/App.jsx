import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Hotel from "./Components/Hotel";
import Flight from "./Components/Flight";
import Train from "./Components/Train";
import HolidaysAndPackages from "./Components/HolidaysAndPackages";
import VillaHomeStay from "./Components/VillaHomeStay";

import VillaJSONHook from "./Custom-Hook/VillaJSON";
import HolidaysJSONComp from "./Custom-Hook/HolidaysJSON";
import HotelDetails from "./Custom-Hook/HotelJSON"
import FlightData from "./Custom-Hook/FlightJSON"

function App() {
  return (
    <>
      {/* Save JSON data to backend */}

      {/* <VillaJSONHook /> */}
      {/* <HolidaysJSONComp /> */}
      {/* <HotelDetails/> */}
      {/* <FlightData/> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/train" element={<Train />} />
        <Route
          path="/holidaysAndPackages"
          element={<HolidaysAndPackages />}
        />
        <Route
          path="/villaAndHomeStay"
          element={<VillaHomeStay />}
        />
      </Routes>
    </>
  );
}

export default App;