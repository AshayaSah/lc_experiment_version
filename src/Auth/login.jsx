import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
// import CASLOGO from "../assets/corporate.png"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import lendsmartcarousel from "../assets/bankguarantee.png";
import tradesmartcarousel from "../assets/bankguarantee.png";
const slides = [
  { src: lendsmartcarousel, alt: "lendsmart" },
  { src: tradesmartcarousel, alt: "tradesmart" },
];

const Login = ({ handleLogin }) => {
  const [usr, setUsername] = useState("");
  const [pwd, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  // Function to check if the user is already logged in
  const checkSession = async () => {
    try {
      const response = await fetch(
        "http://192.168.10.3/api/method/frappe.auth.get_logged_user",
        {
          credentials: "include", // Send cookies with the request
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.message) {
          setUserData({ username: data.message });
          handleLogin(data.message); // Automatically log the user in
        }
      }
    } catch (error) {
      console.error("Session check error:", error);
    }
  };

  useEffect(() => {
    // Check if the user is already logged in
    checkSession();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");
    setIsLoading(true);

    const url = "http://192.168.10.3/api/method/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ usr, pwd }),
        credentials: "include", // Include cookies in the request
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.message && data.message.toLowerCase().includes("logged in")) {
          setUserData({ username: usr });
          handleLogin(usr); // Call the parent handleLogin function
          console.log("Login successful");
        } else {
          throw new Error("Unexpected response from the server");
        }
      } else {
        const errorData = await response.text();
        throw new Error(errorData || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      // setLoginError(error.message || "Login failed");
      setLoginError("Invalid Login!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Carousel Section */}
      <div className="carousel-section">
        <div className="carousel-content">
          <div className="carousel-item">
            <img src="" alt="Carousel Image" className="carousel-image" />
          </div>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="login-form-section">
        <div className="logo-container">
          <Link to="https://cas.com.np/">
            <img className="logo" src="logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="login-box">
          <h1 className="form-title">Sign in to your account</h1>
          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                required
                value={usr}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input"
              />
            </div>
            {/* Password Input */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="password-container">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="••••••••"
                  required
                  value={pwd}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="password-toggle"
                >
                  {passwordVisible ? "👁️" : "🙈"}
                </button>
              </div>
            </div>
            {/* Remember Me and Forgot Password */}
            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="remember-me-label">
                  Remember me
                </label>
              </div>
              <Link to="#" className="forgot-password">
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          {/* Sign Up Prompt */}
          <p className="sign-up-prompt">
            Don’t have an account yet?{" "}
            <Link to="#" className="sign-up-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
