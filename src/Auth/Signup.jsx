import "../CSS_CODE/SignupCSS.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [signForm, setSignForm] = useState({
    FirstName: "",
    LastName: "",
    MobNumber: "",
    DOB: "",
    Gender: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setSignForm({
      ...signForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{

      const response = await axios.post(`http://localhost:4000/api/auth/signup`, signForm,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )

      console.log(response.data)
      navigate("/homepage")
      toast.success("User Signup")

    }catch(error){
      console.log(error.message)
      toast.error("Signup Error")
    }
  };

  return (
    <div className="signup-page">

      {/* Left Section */}
      <div className="left-section">
        <div className="overlay">

          <div className="logo">YATRA SETU</div>

          <button className="back-btn">Back to Website →</button>

          <div className="left-content">

            <h2>
              Capturing Moments,
              <br />
              Creating Memories
            </h2>

            <div className="dots">
              <span></span>
              <span></span>
              <span className="active"></span>
            </div>

          </div>

        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">

        <div className="form-box">

          <h1>Create an Account</h1>
          <p className="login-link">
            Already have an account?
            <a href="/"> Login</a>
          </p>

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="row">

              <input
                type="text"
                name="FirstName"
                placeholder="First Name"
                value={signForm.FirstName}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="LastName"
                placeholder="Last Name"
                value={signForm.LastName}
                onChange={handleChange}
                required
              />

            </div>

            {/* Email */}

            <input
              type="email"
              name="Email"
              placeholder="Email Address"
              value={signForm.Email}
              onChange={handleChange}
              required
            />

            {/* Mobile */}

            <div className="row">

              <select>
                <option>+91 🇮🇳</option>
                <option>+1 🇺🇸</option>
                <option>+44 🇬🇧</option>
              </select>

              <input
                type="text"
                name="MobNumber"
                placeholder="Mobile Number"
                value={signForm.MobNumber}
                onChange={handleChange}
                required
              />

            </div>

            {/* Password */}

            <div className="password-box">

              <input
                type={showPassword ? "text" : "password"}
                name="Password"
                placeholder="Password"
                value={signForm.Password}
                onChange={handleChange}
                required
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>

            {/* DOB */}

            <input
              type="date"
              name="DOB"
              value={signForm.DOB}
              onChange={handleChange}
              required
            />

            {/* Gender */}

            <select
              name="Gender"
              value={signForm.Gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            {/* Terms */}

            <label className="checkbox">
              <input type="checkbox" required />
              I agree to the
              <a href="/"> Terms & Conditions</a>
            </label>

            {/* Submit */}
            <button type="submit" className="signup-btn">Create Account</button>

          </form>

          {/* Divider */}

          <div className="divider">
            <span>Or register with</span>
          </div>

          {/* Social */}

          <div className="social-buttons">

            <button type="button">
              <FaGoogle /> Google
            </button>

            <button type="button">
              <FaApple /> Apple
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;