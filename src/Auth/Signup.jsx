import "../CSS_CODE/SignupCSS.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [signForm, setSignForm] = useState({
    name: "",
    last: "",
    mobile: "",
    dob: "",
    gender: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignForm({
      ...signForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(signForm);

    // API Call Here
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
                name="name"
                placeholder="First Name"
                value={signForm.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="last"
                placeholder="Last Name"
                value={signForm.last}
                onChange={handleChange}
                required
              />

            </div>

            {/* Email */}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={signForm.email}
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
                name="mobile"
                placeholder="Mobile Number"
                value={signForm.mobile}
                onChange={handleChange}
                required
              />

            </div>

            {/* Password */}

            <div className="password-box">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={signForm.password}
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
              name="dob"
              value={signForm.dob}
              onChange={handleChange}
              required
            />

            {/* Gender */}

            <select
              name="gender"
              value={signForm.gender}
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