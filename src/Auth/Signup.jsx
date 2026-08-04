import "../CSS_CODE/SignupCSS.css";
import { FaGoogle, FaApple, FaEye } from "react-icons/fa";

function Signup() {
  return (
    <div className="signup-page">

      {/* Left Section */}

      <div className="left-section">

        <div className="overlay">

          <div className="logo">
            YATRA SETU
          </div>

          <button className="back-btn">
            Back to Website →
          </button>

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

          <h1>Create an account</h1>

          <p className="login-link">
            Already have an account?
            <a href="/"> Login</a>
          </p>

          <form>

            <div className="row">

              <input
                type="text"
                placeholder="First Name"
              />

              <input
                type="text"
                placeholder="Last Name"
              />

            </div>

            <input
              type="email"
              placeholder="Email Address"
            />

            <div className="row">

              <select>
                <option>+91 🇮🇳</option>
                <option>+1 🇺🇸</option>
                <option>+44 🇬🇧</option>
              </select>

              <input
                type="text"
                placeholder="Mobile Number"
              />

            </div>

            <div className="password-box">
              <input
                type="password"
                placeholder="Password"
              />
              <FaEye />
            </div>

            <div className="password-box">
              <input
                type="password"
                placeholder="Confirm Password"
              />
              <FaEye />
            </div>

            <input
              type="date"
            />

            <select>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <label className="checkbox">

              <input type="checkbox" />

              I agree to the
              <a href="/"> Terms & Conditions</a>

            </label>

            <button className="signup-btn">
              Create Account
            </button>

          </form>

          <div className="divider">
            <span>Or register with</span>
          </div>

          <div className="social-buttons">

            <button>
              <FaGoogle />
              Google
            </button>

            <button>
              <FaApple />
              Apple
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;