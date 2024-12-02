import React, { useState } from "react";
import "./css/LCIssuance.css"; // Assuming you have a CSS file for styles
import { Link } from "react-router-dom";

const LcIssuance = ({ LcIssuances }) => {
  const [activeTab, setActiveTab] = useState("pending"); // State to manage active tab

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const pendingLcIssuance = LcIssuances.filter(
    (issuance) => issuance.isPending
  );

  return (
    <div className="lc-issuance-container">
      <h1>LC Issuance</h1>
      <label className="text-section">
        LC Issuance is a bank guarantee in international trade, ensuring the
        seller receives payment once agreed conditions are met, providing
        security for both buyer and seller.
      </label>
      <Link to="/tradesmart/lc-issuance/lc-issuance-apply">
        <button className="apply-button">Apply LC Issuance</button>
      </Link>
      <hr></hr>
      <br></br>
      <div className="tabs">
        <button
          onClick={() => handleTabChange("pending")}
          className={activeTab === "pending" ? "active-tab" : ""}
        >
          Pending
        </button>
        <button
          onClick={() => handleTabChange("processing")}
          className={activeTab === "processing" ? "active-tab" : ""}
        >
          Processing
        </button>
        <button
          onClick={() => handleTabChange("returned")}
          className={activeTab === "returned" ? "active-tab" : ""}
        >
          Returned
        </button>
        <button
          onClick={() => handleTabChange("completed")}
          className={activeTab === "completed" ? "active-tab" : ""}
        >
          Completed
        </button>
        <button
          onClick={() => handleTabChange("closed")}
          className={activeTab === "closed" ? "active-tab" : ""}
        >
          Closed
        </button>
      </div>

      <div className="table-container">
        {activeTab === "pending" && (
          <table className="lc-table">
            <thead>
              <tr>
                <th>Request Name</th>
                <th>Request ID</th>
                <th>Requested Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingLcIssuance.map((LcIssuance, index) => (
                <tr key={index}>
                  <td>{LcIssuance.requestName}</td>
                  <td>{LcIssuance.requestID}</td>
                  <td>{LcIssuance.requestDate}</td>
                  <td>Pending</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeTab === "processing" && (
          <table className="lc-table">
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No Data Available
                </td>
              </tr>
            </tbody>
          </table>
        )}
        {activeTab === "returned" && (
          <table className="lc-table">
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No Data Available
                </td>
              </tr>
            </tbody>
          </table>
        )}
        {activeTab === "completed" && (
          <table className="lc-table">
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No Data Available
                </td>
              </tr>
            </tbody>
          </table>
        )}
        {activeTab === "closed" && (
          <table className="lc-table">
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No Data Available
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default LcIssuance;
