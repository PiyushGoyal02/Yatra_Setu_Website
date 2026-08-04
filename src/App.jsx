import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./Components/Homepage";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}

export default App;