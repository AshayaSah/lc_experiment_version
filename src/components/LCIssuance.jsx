import { useState } from "react";
// import "./css/LCIssuance.css";
import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { BiEdit, BiMenuAltLeft, BiSlider } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

const LcIssuance = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Sample data for LC Issuances
  const demoLcIssuances = [
    {
      requestName: "Trade Invoice",
      requestID: "REQ-001",
      requestDate: "2024-12-01",
      status: "pending",
    },
    {
      requestName: "Export Deal",
      requestID: "REQ-002",
      requestDate: "2024-11-30",
      status: "processing",
    },
    {
      requestName: "Shipping Invoice",
      requestID: "REQ-003",
      requestDate: "2024-11-29",
      status: "returned",
    },
    {
      requestName: "Manufacturing Invoice",
      requestID: "REQ-004",
      requestDate: "2024-11-28",
      status: "completed",
    },
    {
      requestName: "Wholesale Orders",
      requestID: "REQ-005",
      requestDate: "2024-11-27",
      status: "cancel",
    },
  ];

  // Filter data based on active tab
  const filteredLcIssuances =
    activeTab === "all"
      ? demoLcIssuances
      : demoLcIssuances.filter((issuance) => issuance.status === activeTab);

  return (
    <div className="max-w-[90%] mx-auto px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl font-semibold mb-4">LC Issuance</h1>
      <label className="text-sm text-gray-600 mb-4 block">
        LC Issuance is a bank guarantee in international trade, ensuring the
        seller receives payment once agreed conditions are met, providing
        security for both buyer and seller.
      </label>
      <Link to="/tradesmart/lc-issuance/lc-issuance-apply">
        <button className="bg-[#0087BE] text-white px-4 py-2 rounded-md shadow-md border-4 border-[#0087BE] hover:bg-[#0087BE]/80  transition-all duration-300 ease-in-out">
          Apply LC Issuance
        </button>
      </Link>
      <hr className="my-4" />

      {/* Tabs - make them stack on smaller screens */}
      <div className="table-button-container">
        <button
          onClick={() => handleTabChange("all")}
          className={`table-button-tabs ${activeTab === "all"
            ? "bg-gray-600 text-white border-gray-600"
            : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"
            }`}
        >
          <BiMenuAltLeft />
          All
        </button>
        <button
          onClick={() => handleTabChange("pending")}
          className={`table-button-tabs ${activeTab === "pending"
            ? "bg-yellow-600 text-white border-yellow-600"
            : "bg-yellow-200 text-yellow-700 border-yellow-300 hover:bg-yellow-300"
            }`}
        >
          Pending
        </button>
        <button
          onClick={() => handleTabChange("processing")}
          className={`table-button-tabs ${activeTab === "processing"
            ? "bg-orange-600 text-white border-orange-600"
            : "bg-orange-200 text-orange-700 border-orange-300 hover:bg-orange-300"
            }`}
        >
          Processing
        </button>
        <button
          onClick={() => handleTabChange("completed")}
          className={`table-button-tabs ${activeTab === "completed"
            ? "bg-green-600 text-white border-green-600"
            : "bg-green-200 text-green-700 border-green-300 hover:bg-green-300"
            }`}
        >
          Completed
        </button>
        <button
          onClick={() => handleTabChange("cancel")}
          className={`table-button-tabs ${activeTab === "cancel"
            ? "bg-red-600 text-white border-red-600"
            : "bg-red-200 text-red-700 border-red-300 hover:bg-red-300"
            }`}
        >
          Cancel
        </button>
      </div>

      {/* Filter Input */}
      <div className="table-input-container">
        <FiFilter className="text-gray-500" />
        <input
          type="text"
          className="table-input-field"
          placeholder="Filter..."
        />
        <BiSlider className="text-gray-500" />
      </div>

      {/* Table for LC Issuances */}
      <div className="table-container">
        {filteredLcIssuances.length > 0 ? (
          <table className="table-child-container">
            <thead>
              <tr className="table-rows">
                <th className="table-heading">Request Name</th>
                <th className="table-heading">Request ID</th>
                <th className="table-heading">Requested Date</th>
                <th className="table-heading">Request ID</th>
                <th className="table-heading">Status</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {filteredLcIssuances.map((issuance, index) => (
                <tr key={index} className="table-body-rows">
                  <td className="table-body-data">{issuance.requestName}</td>
                  <td className="table-body-data">{issuance.requestID}</td>
                  <td className="table-body-data">{issuance.requestDate}</td>
                  <td className="table-body-data">{issuance.requestDate}</td>

                  <td className="table-body-data-container ">
                    <p className="table-body-status">{issuance.status}</p> {/* Adjusted width for smaller screen */}
                    <span className="table-body-button-container ">
                      <button className="table-body-data-buttons">
                        <BiEdit />
                      </button>
                      <button className="table-body-data-buttons">
                        <BsEye />
                      </button>
                    </span>
                  </td>
                </tr>

              ))}
            </tbody>
          </table>
        ) : (
          <p className="table-error-data">No Data Available</p>
        )}
      </div>
    </div>
  );
};

export default LcIssuance;

