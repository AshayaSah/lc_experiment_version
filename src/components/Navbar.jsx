import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Navbar.css";
import Logo from "../assets/logo.png";

const Navbar = ({ user, handleLogout }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  const currentUser = "Hero";
  const handleUserLogout = async () => {
    try {
      await logout(); // Log out from Frappe
      console.log("The current user is:", currentUser);
      handleLogout(currentUser);
      // Reset currentUser in App component

      navigate("/onlinelc");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/onlinelc")}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="login">
          {user ? (
            <div className="user-name">
              <span>Welcome, {user}</span>
              <button className="logout-button" onClick={handleUserLogout}>
                Logout
              </button>
            </div>
          ) : (
            <button className="login-button" onClick={handleLoginClick}>
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
