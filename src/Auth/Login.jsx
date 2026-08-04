import "../CSS_CODE/LoginCSS.css";
import { useState } from "react";

import { FaGoogle, FaApple, FaEye } from "react-icons/fa";

function Login() {

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  
  return (
    <div className="login-page">

      {/* Left Section */}

      <div className="left-section">

        <div className="overlay">

          <div className="logo">
           YATRA SETU 
          </div>

          <button className="back-btn">
            ← Back to Website
          </button>

          <div className="left-content">

            <h2>
              Welcome Back,
              <br />
              Start Your Journey
            </h2>

            <div className="dots">
              <span></span>
              <span className="active"></span>
              <span></span>
            </div>

          </div>

        </div>

      </div>

      {/* Right Section */}

      <div className="right-section">

        <div className="form-box">

          <h1>Welcome Back</h1>

          <p className="login-link">
            Don't have an account?
            <a href="/signup"> Create Account</a>
          </p>

          <form>

            <input
              type="email"
              placeholder="Email Address"
            />

            <div className="password-box">

              <input
                type="password"
                placeholder="Password"
              />

              <FaEye />

            </div>

            <div className="login-options">

              <div className="remember-me">

                <input
                  type="checkbox"
                  id="rememberMe"
                />

                <label htmlFor="rememberMe">
                  Remember Me
                </label>

              </div>

              <a href="/forgot-password">
                Forgot Password?
              </a>

            </div>

            <button className="login-btn">
              Login
            </button>

          </form>

          <div className="divider">
            <span>Or Login with</span>
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

export default Login;