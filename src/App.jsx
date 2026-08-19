import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./Components/Homepage";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs"
import Hotel from "./Components/Hotel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contactUs" element={<ContactUs/>}></Route>
      <Route path="/hotel" element={<Hotel/>}></Route>
    </Routes>
  );
}

export default App;