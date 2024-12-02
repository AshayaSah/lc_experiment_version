import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Corporate.css";

const Corporate = ({ accounts, onToggleStatus }) => {
  const [corporateData, setCorporateData] = useState([]);
  const [filteredCorporateData, setFilteredCorporateData] = useState([]);
  const [error, setError] = useState(null);
  const [userId, setUserID] = useState("");

  useEffect(() => {
    const storedUser  = localStorage.getItem("currentUser ");
    if (storedUser ) {
      const user = JSON.parse(storedUser );
      setUserID(user);
      console.log("User  ID:", user); // Debugging line
    }
  }, []);

  useEffect(() => {
    const fetchCorporateData = async () => {
      try {
        const response = await fetch(`http://192.168.10.3/api/resource/Corporate?fields=["name","company_name","authorized_email","docstatus","owner"]`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Cookie": `sid=bbc62a96cd456056cdfcbb683a99c8ce80dd2f30329cfa138518e82a; system_user=yes; full_name=Administrator; user_id=Administrator`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setCorporateData(data.data || []);
        console.log("Fetched data:", data); // Debugging line
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchCorporateData();
  }, []);

  useEffect(() => {
    setFilteredCorporateData(corporateData.filter(data => data.owner === userId));
  }, [corporateData, userId]); // Run this effect when corporateData or userId changes

  return (
    <div className="corporate-container">
      <h1>Corporate Accounts</h1>
      <div className="text-section">
        Please fill out the details below to complete the corporate registration
        process. Ensure all information is accurate and complete for successful
        registration.
      </div>
      <Link to="/tradesmart/corporate/corporate-registration">
        <button className="add-button">Add Corporate Account</button>
      </Link>

      {error ? (
        <p className="error-message">Error: {error}</p>
      ) : corporateData.length === 0 ? ( // Check if corporateData is empty
        <p>Loading corporate accounts...</p> // Show loading message
      ) : (
        <table className="corporate-table">
          <thead>
            <tr>
              <th>Account Name</th>
              <th>Account Number</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCorporateData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.company_name}</td> {/* Assuming company_name is the account number */}
                <td>{data.authorized_email}</td>
                <td>{data.docstatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Corporate;