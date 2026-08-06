import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./Components/Homepage";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import About from "./Components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/about" element={<About/>}></Route>
    </Routes>
  );
}

export default App;