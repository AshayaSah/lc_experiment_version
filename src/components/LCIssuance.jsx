import { useState } from "react";
import "./css/LCIssuance.css";
import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { BiEdit, BiMenuAltLeft } from "react-icons/bi";
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
      status: "closed",
    },
  ];

  // Filter data based on active tab
  const filteredLcIssuances =
    activeTab === "all"
      ? demoLcIssuances
      : demoLcIssuances.filter((issuance) => issuance.status === activeTab);

  return (
    <div className="lc-issuance-container px-4 sm:px-6 md:px-8">
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
          className={`table-button-tabs ${activeTab === "closed"
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
        <FiFilter className="text-gray-500" />
      </div>

      {/* Table for LC Issuances */}
      <div className="table-container">
        {filteredLcIssuances.length > 0 ? (

          //   <table className="w-full bg-white table-fixed rounded-lg shadow-md overflow-hidden border-collapse border-gray-300">
          //     <thead>
          //       <tr className="bg-[#0087BE] text-white text-sm">
          //         <th className="px-4 py-2 text-left w-1/4 border-b border-gray-300">Request Name</th>
          //         <th className="px-4 py-2 text-left w-1/4 border-b border-gray-300">Request ID</th>
          //         <th className="px-4 py-2 text-left w-1/4 border-b border-gray-300">Requested Date</th>
          //         <th className="px-4 py-2 text-left w-1/4 border-b border-gray-300">Request ID</th>
          //         <th className="px-4 py-2 text-left w-1/4 border-b border-gray-300">Status</th>
          //       </tr>
          //     </thead>

          //     <tbody className="text-black text-sm">
          //       {filteredLcIssuances.map((issuance, index) => (
          //         //     <tr key={index} className="transition duration-200 border-b border-gray-200">
          //         //       <td className="px-0 py-2 text-left sm:px-4 sm:py-3">{issuance.requestName}</td>
          //         //       <td className="px-0 py-2 text-left sm:px-4 sm:py-3">{issuance.requestID}</td>
          //         //       <td className="px-0 py-2 text-left sm:px-4 sm:py-3">{issuance.requestDate}</td>
          //         //       <td className="px-0 py-2 text-left sm:px-4 sm:py-3">{issuance.requestDate}</td>

          //         //       <td className="flex flex-col sm:flex-row items-start justify-start gap-3 py-2 sm:py-3 px-0 w-full">
          //         //         <p className="text-left w-full sm:w-1/2">{issuance.status}</p>
          //         //         <span className="flex gap-3 w-full sm:w-2/3 justify-start sm:justify-end sm:flex-row flex-col">
          //         //           <button className="bg-[#0087BE] text-white w-8 h-8 flex items-center justify-center rounded-md mb-2 sm:mb-0 
          //         // shadow-md backdrop-blur-lg backdrop-brightness-50 hover:bg-blue-700/70 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out border border-white/20">
          //         //             <BiEdit />
          //         //           </button>
          //         //           <button className="bg-[#0087BE] text-white w-8 h-8 flex items-center justify-center rounded-md mb-2 sm:mb-0 
          //         // shadow-md backdrop-blur-lg backdrop-brightness-50 hover:bg-blue-700/70 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out border border-white/20">
          //         //             <BsEye />
          //         //           </button>
          //         //         </span>
          //         //       </td>
          //         //     </tr>
          //         <tr key={index} className="transition duration-200 border-b border-gray-200 box-border">
          //           <td className="px-4 py-2 text-left sm:px-4 sm:py-3 text-xs sm:text-sm">{issuance.requestName}</td>
          //           <td className="px-4 py-2 text-left sm:px-4 sm:py-3 text-xs sm:text-sm">{issuance.requestID}</td>
          //           <td className="px-4 py-2 text-left sm:px-4 sm:py-3 text-xs sm:text-sm">{issuance.requestDate}</td>
          //           <td className="px-4 py-2 text-left sm:px-4 sm:py-3 text-xs sm:text-sm">{issuance.requestDate}</td>

          //           <td className="flex flex-col sm:flex-row items-start justify-start gap-3 py-2 sm:py-3 px-4 w-full text-xs sm:text-sm">
          //             <p className="text-left w-full sm:w-1/3">{issuance.status}</p> {/* Adjusted width for smaller screen */}
          //             <span className="flex gap-3 w-full sm:w-2/3 justify-start sm:justify-end sm:flex-row flex-col">
          //               <button className="bg-[#0087BE] text-white w-8 h-8 flex items-center justify-center rounded-md mb-2 sm:mb-0 
          // shadow-md backdrop-blur-lg backdrop-brightness-50 hover:bg-blue-700/70 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out border border-white/20">
          //                 <BiEdit />
          //               </button>
          //               <button className="bg-[#0087BE] text-white w-8 h-8 flex items-center justify-center rounded-md mb-2 sm:mb-0 
          // shadow-md backdrop-blur-lg backdrop-brightness-50 hover:bg-blue-700/70 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out border border-white/20">
          //                 <BsEye />
          //               </button>
          //             </span>
          //           </td>
          //         </tr>



          //       ))}
          //     </tbody>




          //   </table>

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


      {/* <div className="overflow-x-auto">
        {filteredLcIssuances.length > 0 ? (
          <table className="w-full bg-white table-fixed rounded-lg shadow-md overflow-hidden border-collapse border border-gray-200">
            <thead>
              <tr className="bg-[#4C9BF0] text-white text-sm">
                <th className="px-4 py-2 text-left w-1/4 border-b border-gray-300">Request Name</th>
                <th className="px-4 py-2 text-left w-1/4 border-b border-gray-300">Request ID</th>
                <th className="px-4 py-2 text-left w-1/4 border-b border-gray-300">Requested Date</th>
                <th className="px-4 py-2 text-left w-1/4 border-b border-gray-300">Request ID</th>
                <th className="px-4 py-2 text-left w-1/4 border-b border-gray-300">Requested Date</th>
                <th className="px-4 py-2 text-left w-1/4 border-b border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody className="text-black text-sm">
              {filteredLcIssuances.map((issuance, index) => (
                <tr
                  key={index}
                  className="transition duration-200 border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="px-3 py-2">{issuance.requestName}</td>
                  <td className="px-3 py-2">{issuance.requestID}</td>
                  <td className="px-3 py-2">{issuance.requestDate}</td>
                  <td className="px-3 py-2">{issuance.requestID}</td>
                  <td className="px-3 py-2">{issuance.requestDate}</td>
                  <td className="flex flex-col sm:flex-row items-center justify-between gap-3 py-2 w-full">
                    <p className="mr-4 text-left w-full sm:w-1/3">{issuance.status}</p>
                    <span className="flex gap-3 w-full sm:w-2/3 justify-end sm:flex-row flex-col">
                      <button className="bg-white/20 text-black w-8 h-8 flex items-center justify-center rounded-md mb-2 sm:mb-0 
                  shadow-lg backdrop-blur-md backdrop-brightness-75 hover:bg-white/40 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out 
                  border border-white/30">
                        <BiEdit />
                      </button>
                      <button className="bg-white/20 text-black w-8 h-8 flex items-center justify-center rounded-md 
                  shadow-lg backdrop-blur-md backdrop-brightness-75 hover:bg-white/40 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out 
                  border border-white/30">
                        <BsEye />
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 py-6 italic">No Data Available</p>
        )}
      </div> */}

    </div>
  );
};

export default LcIssuance;

