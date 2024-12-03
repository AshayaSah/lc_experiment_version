import React, { useState, useEffect } from "react";
import "./css/LCIssuance.css"; // Assuming you have a CSS file for styles
import { Link, useNavigate } from "react-router-dom";

const LcIssuance = ({ LcIssuances, user }) => {
    const navigate = useNavigate();

    const [lcIssuanceData, setLcIssuanceData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const [error, setError] = useState(null);

    const [activeTab, setActiveTab] = useState("pending"); // State to manage active tab

    // Function to handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const pendingLcIssuance = LcIssuances.filter(
        (issuance) => issuance.isPending
    );

    useEffect(() => {
        const fetchLCData = async () => {
            const url1 = `http://192.168.10.3/api/resource/Letter of Credit?fields=["*"]&filters=[[\"owner\", \"=\", \"${user}\"]]&limit=50&order_by=name&as_dict=true`;

            try {
                const response = await fetch(url1, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Cookie: `sid=bbc62a96cd456056cdfcbb683a99c8ce80dd2f30329cfa138518e82a; system_user=yes; full_name=Administrator; user_id=Administrator`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();
                setLcIssuanceData(data.data || []);
                setFilteredData(data.data || []);
                console.log("Fetched data:", data); // Debugging line
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message);
            }
        };

        fetchLCData();
    }, [user]);

    //Reuse LC data Functionality
    const [showTable, setShowTable] = useState(false);

    const handleButtonClick = () => {
        setShowTable((prevState) => !prevState); // Toggle visibility
    };

    //Functions to handle the reuse and edit functionality
    const handleReuseClick = (reuseLcRowData) => {
        navigate("/onlinelc/tradesmart/lc-issuance/lc-issuance-apply", {
            state: { reuseLcRowData },
        });
    };

    const handleEditClick = (editLcRowData) => {
        navigate("/onlinelc/tradesmart/lc-issuance/lc-issuance-apply", {
            state: { editLcRowData },
        });
    };

    //Function to filter the table
    const handleFilter = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtereddata = lcIssuanceData.filter((data) =>
            data.applicant_name.toLowerCase().includes(searchTerm)
        );
        setFilteredData(filtereddata);
    };

    return (
        <div className="lc-issuance-container">
            <h1>LC Issuance</h1>
            <label className="text-section">
                LC Issuance is a bank guarantee in international trade, ensuring the
                seller receives payment once agreed conditions are met, providing
                security for both buyer and seller.
            </label>

            <div className="apply-reuse-btn-row">
                {/* New LC Button */}
                <Link to="/onlinelc/tradesmart/lc-issuance/lc-issuance-apply">
                    <button className="apply-button">Apply LC Issuance</button>
                </Link>

                {/* Reuse LC Button */}
                <div>
                    {/* Button to Open/Close Table */}
                    <button
                        onClick={handleButtonClick}
                        className="apply-button open-modal-button"
                    >
                        {showTable ? "Close Table" : "Reuse LC Issuance"}
                    </button>

                    {/* Modal */}
                    {showTable && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <button
                                    onClick={handleButtonClick}
                                    className="close-modal-button"
                                >
                                    &times;
                                </button>

                                <div className="reuse-table-container">
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
                                            {lcIssuanceData.map((LcIssuance, index) => (
                                                <tr key={index}>
                                                    <td>{LcIssuance.applicant_name}</td>
                                                    <td>{LcIssuance.account_number}</td>
                                                    <td>{LcIssuance.phone}</td>
                                                    <td>
                                                        <button
                                                            className="edit-button"
                                                            onClick={() => handleReuseClick(LcIssuance)}
                                                        >
                                                            Reuse
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

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
                <input type="text" placeholder="Search  ..." onChange={handleFilter} />
            </div>

            <div className="table-container">
                {/* {activeTab === "pending" && ( */}
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
                        {filteredData.map((LcIssuance, index) => (
                            <tr key={index}>
                                <td>{LcIssuance.applicant_name}</td>
                                <td>{LcIssuance.account_number}</td>
                                <td>{LcIssuance.phone}</td>
                                <td>
                                    Pending
                                    <button
                                        className="edit-button"
                                        onClick={() => handleEditClick(LcIssuance)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* )} */}
                {/* {activeTab === "processing" && (
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
            </tbody> */}
                {/* </table> */}
                {/* )} */}
            </div>
        </div >
    );
};

export default LcIssuance;
