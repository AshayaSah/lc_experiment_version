import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./css/Homepage.css"; // Import your CSS file for styling
import TradeSmartImage from "../assets/tradesmart.png"; // Import Trade Smart image
import LendSmartImage from "../assets/lendsmart.png";

const HeroAndFeatures = () => {
  const navigate = useNavigate(); // Initialize navigate

  const featureList = [
    { title: "Trade Smart", description: "Description of feature 1", route: "/tradesmart", image:TradeSmartImage },
    { title: "Lend Smart", description: "Description of feature 2", image:LendSmartImage},
  ];

  const handleFeatureClick = (route) => {
    if (route) {
      navigate(route); // Navigate to the specified route
    }
  };

  return (
    <>
      <div className="hero-and-features">
        <div className="hero-banner">
          <h1>Welcome to Our Website!</h1>
          <p>Your journey starts here.</p>
        </div>
        <div className="features">
          {featureList.map((feature, index) => (
            <div 
              className="feature" 
              key={index} 
              onClick={() => handleFeatureClick(feature.route)} // Handle click event
              style={{ cursor: 'pointer' }} // Change cursor to pointer for better UX
            >
              <img src={feature.image} alt={feature.title}></img>
              <p>{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroAndFeatures;