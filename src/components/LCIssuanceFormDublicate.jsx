import React, { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import "./css/LCIssaunceFormDublicate.css";
import Logo from "../assets/logo.png";

const LCIssuanceForm = ({ onAddLcIssuance }) => {
  const [error, setError] = useState(null);

  //Nature Of LC
  // const [customNatureOfLc, setCustomNatureOfLc] = useState("");

  //CIF Section
  const [cifId, setCifId] = useState("");

  //Applicant Details
  const [applicantName, setApplicantName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [eximCode, setEximCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [panNo, setPanNo] = useState("");
  const [applicantAddress, setApplicantAddress] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [channel, setChannel] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  //Handle Submit Hai
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  //stepper functionality
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, label: "Applicant Details", anchor: "#applicant_details" },
    { id: 2, label: "Beneficiary Details", anchor: "#beneficiary_details" },
    { id: 3, label: "LC Details", anchor: "#lc_details" },
    { id: 4, label: "Summary", anchor: "#summary" },
  ];

  const sectionRefs = useRef(steps.map(() => null)); // Array of refs for sections

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleSection = steps.findIndex(
              (step) => step.anchor === `#${entry.target.id}`
            );
            if (visibleSection >= 0) {
              setCurrentStep(visibleSection + 1);
            }
          }
        });
      },
      {
        root: null, // Use viewport as root
        rootMargin: "0px",
        threshold: 0.6, // Section is "in view" when 60% of it is visible
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [steps]);

  const handleStepClick = (stepId) => {
    setCurrentStep(stepId);
    // Scroll to the element
    const targetElement = document.querySelector(steps[stepId - 1].anchor);
    if (targetElement) {
      // Calculate offset position
      const offset = 70; // Adjust as needed
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      // Smoothly scroll to the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-title">
            {/* Title Heading */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              LC FORM DECENTRALIZED
            </h1>
            {/* Subheading with Logo and Text */}
            <div className="flex justify-center items-center space-x-4 mb-6">
              <img src={Logo} alt="Global Logo" className="w-12 h-12" />
              <h2 className="text-xl font-semibold text-gray-700">
                Welcome to Nepal ABC Bank LC Form
              </h2>
            </div>
          </div>
          {/* Sticky Stepper */}
          <div className="sticky-stepper bg-[#e0f7fa] sticky top-0 z-10 rounded-[1rem] shadow-md p-4">
            <ul className="flex justify-between w-full max-w-xl mx-auto">
              {steps.map((step) => (
                <li
                  key={step.id}
                  className={`step ${
                    currentStep === step.id
                      ? "active text-blue-500"
                      : "text-gray-500"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleStepClick(step.id)}
                    className="focus:outline-none"
                  >
                    {step.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Horizontal Line */}
          <hr className="border-t border-gray-300 my-4" />

          {/* Nature of LC */}
          <div className="form-section mb-8 bg-gray-50 rounded-[1rem] shadow-md">
            {/* Section Title */}
            <div className="title-section">
              <h3 className="form-section-title">NATURE OF LC</h3>
            </div>

            <div className="p-6">
              {/* Form Field */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 uppercase mb-2">
                    NATURE OF LC
                  </label>
                  <div className="relative">
                    <select
                      className="block w-full px-4 py-2 pr-10 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                      onChange={(e) => setCustomNatureOfLc(e.target.value)}
                    >
                      <option value="">Select Nature of LC</option>
                      <option value="sight">Sight LC</option>
                      <option value="usance">Usance LC</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.06l-4 4a.75.75 0 01-1.08 0l-4-4a.75.75 0 01-.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Applicant Name and Address */}
          <div
            ref={(el) => (sectionRefs.current[0] = el)}
            id="applicant_details"
            className="form-section mb-8 bg-gray-50 rounded-[1rem] shadow-md"
          >
            {/* Section Title */}
            <div className="title-section">
              <h3 className="form-section-title text-lg font-semibold text-gray-800 rounded-t-[1rem]">
                APPLICANT NAME AND ADDRESS
              </h3>
            </div>

            <div className="p-6">
              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 uppercase mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setApplicantName(e.target.value)}
                  />
                </div>

                {/* Address Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 uppercase mb-2">
                    ADDRESS
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setApplicantAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Account Number Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 uppercase mb-2">
                    ACCOUNT NUMBER
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your account number"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </div>

                {/* Postal Code Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 uppercase mb-2">
                    POSTAL CODE
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your postal code"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 uppercase mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setApplicantEmail(e.target.value)}
                  />
                </div>

                {/* PAN Number Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 uppercase mb-2">
                    PAN NUMBER
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your PAN number"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setPanNo(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* EXIM Code Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 uppercase mb-2">
                    EXIM CODE
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your EXIM code"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setEximCode(e.target.value)}
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 uppercase mb-2">
                    PHONE (+977)
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Beneficiary Name anad Address  */}
          <div
            ref={(el) => (sectionRefs.current[1] = el)}
            id="beneficiary_details"
            className="form-section mb-8 bg-gray-50 rounded-[1rem] shadow-md"
          >
            {/* Section Title */}
            <div className="title-section">
              <h3 className="form-section-title text-lg font-semibold text-gray-800 rounded-[1rem]">
                BENEFICIARY NAME AND ADDRESS
              </h3>
            </div>

            <div className="p-6">
              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 uppercase mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Enter beneficiary name"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setCustomBeneficiaryName(e.target.value)}
                  />
                </div>

                {/* Country Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 uppercase mb-2">
                    COUNTRY
                  </label>
                  <select
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setCustomCountry(e.target.value)}
                  >
                    <option value="">Select Country</option>
                    <option value="nepal">Nepal</option>
                    <option value="india">India</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Address Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 uppercase mb-2">
                    ADDRESS
                  </label>
                  <input
                    type="text"
                    placeholder="Enter address"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 uppercase mb-2">
                    PHONE
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 uppercase mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setCustomEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mode of Transmission, Currency, Tolerance */}
          <div
            ref={(el) => (sectionRefs.current[2] = el)}
            id="lc_details"
            className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:gap-8 md:gap-8 sm:gap-1"
          >
            {/* Mode of Transmission Section */}
            <div className="form-section mb-8 bg-gray-50 rounded-[1rem] shadow-md">
              {/* Section Title */}
              <div className="title-section">
                <h3 className="form-section-title text-lg font-semibold text-gray-800 rounded-[1rem]">
                  MODE OF TRANSMISSION
                </h3>
              </div>

              <div className="p-6">
                <label className="form-label">Mode of Transmission</label>
                <div
                  className="form-radio"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    id="teleTransmission"
                    name="transmission"
                    onChange={(e) =>
                      setCustomByTeleTransmission(e.target.checked)
                    }
                  />
                  <label
                    htmlFor="teleTransmission"
                    style={{ padding: "1rem", margin: "0px" }}
                  >
                    BY TELE TRANSMISSION
                  </label>
                </div>
              </div>
            </div>

            {/* Currency Section */}
            <div className="form-section mb-8 bg-gray-50 rounded-[1rem] shadow-md">
              {/* Section Title */}
              <div className="title-section">
                <h3 className="form-section-title text-lg font-semibold text-gray-800 rounded-[1rem]">
                  CURRENCY AND AMOUNT
                </h3>
              </div>

              <div className="p-6">
                <div className="form-field-container">
                  <div className="form-field mb-4">
                    <label className="form-label">CURRENCY</label>
                    <select
                      className="form-select w-full px-4 py-2 border border-gray-300 rounded-md"
                      onChange={(e) => {
                        setCustomCurrencyAndAmount(e.target.value);
                        console.log(e.target.value);
                      }}
                    >
                      <option value="">Select Currency</option>
                      <option value="usd">USD</option>
                      <option value="npr">NPR</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label">AMOUNT</label>
                    <input
                      type="text"
                      className="form-input w-full px-4 py-2 border border-gray-300 rounded-md"
                      onChange={(e) => setCustomAmount(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tolerance Section */}
            <div className="form-section mb-8 bg-gray-50 rounded-[1rem] shadow-md">
              {/* Section Title */}
              <div className="title-section">
                <h3 className="form-section-title text-lg font-semibold text-gray-800 rounded-[1rem]">
                  TOLERANCE
                </h3>
              </div>

              <div className="p-6">
                <div className="form-field-container">
                  <div className="form-field mb-4">
                    <label className="form-label">TYPE</label>
                    <select
                      className="form-select w-full px-4 py-2 border border-gray-300 rounded-md"
                      onChange={(e) => setCustomType(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="usd">USD</option>
                      <option value="npr">NPR</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label">PERCENTAGE</label>
                    <input
                      type="text"
                      className="form-input w-full px-4 py-2 border border-gray-300 rounded-md"
                      onChange={(e) => setCustomPercentage(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default LCIssuanceForm;
