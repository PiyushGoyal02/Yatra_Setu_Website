import "../CSS_CODE/LoginCSS.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaApple, FaEye } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {

  const navigate = useNavigate();

  const [eyeLash, setEyeLash] = useState(false);
  const [loginForm, setLoginForm] = useState({
    Email: "",
    Password: "",
  });

  // console.log(loginForm)

  const LoginSubmitHandler = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post(`http://localhost:4000/api/auth/login`, loginForm)

      console.log(response.data)
      navigate("/homepage")
      toast.success('Login Successfully');

    }catch(error){
      console.log(error.message)
      toast.error('This is an error!');
    }
  }

  return (
    <div className="login-page">

      {/* Left Section */}
      <div className="left-section">

        <div className="overlay">

          <div className="logo">YATRA SETU</div>
          <button className="back-btn">← Back to Website</button>

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

          <form onSubmit={LoginSubmitHandler}>

            <input
              required
              type="Email"
              placeholder="Email Address"
              name="email"
              value={loginForm.Email}
              onChange={(e) =>
                setLoginForm({
                  ...loginForm,
                  Email: e.target.value,
                })
              }
            />

            <div className="password-box">
              <input
                required
                name="Password"
                value={loginForm.Password}
                onChange={(e) =>
                  setLoginForm({
                    ...loginForm,
                    Password: e.target.value,
                  })
                }
                type={eyeLash ? "text" : "password"}
                placeholder="Password"
              />

              <span onClick={() => setEyeLash(!eyeLash)}>
                {eyeLash ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="login-options">

              <div className="remember-me">

                <input
                  type="checkbox"
                  id="rememberMe"
                />
                <label htmlFor="rememberMe">Remember Me</label>

              </div>

              <a href="/forgot-password">Forgot Password?</a>

            </div>

            <button type="submit" className="login-btn">Login</button>

          </form>

          <div className="divider">
            <span>Or Login with</span>
          </div>

          <div className="social-buttons">
            <button><FaGoogle />Google</button>
            <button><FaApple />Apple</button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;