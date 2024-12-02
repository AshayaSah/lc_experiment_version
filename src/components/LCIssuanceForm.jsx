import React, { useState, useEffect } from "react";
import "./css/LCIssuanceForm.css";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png"

const FormField = ({ label, children, className }) => (
  <div className={`form-field ${className}`}>
    <label className="form-label">{label}</label>
    {children}
  </div>
);

const FormSection = ({ title, children, className }) => (
  <div className={`form-section ${className}`}>
    <label className="form-section-title">{title}</label>
    <hr className="form-horizontal-line" />
    {children}

  </div>
);

const RadioGroup = ({ name, options }) => (
  <div className="radio-group">
    {options.map((option) => (
      <label key={option.value}>
        <input type="radio" name={name} value={option.value} /> {option.label}
      </label>
    ))}
  </div>
);

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

  return (
    <form onSubmit={handleSubmit}>

      <div className="form-container">
        {/* Title Heading */}
        <h1 className="form-title">LC FORM DECENTRALIZED</h1>

        {/* Subheading with Logo and Text */}
        <div className="form-subheading">
          <img
            src={Logo}
            alt="Global Logo"
            className="form-logo"
          />
          <h2 className="form-subheading-text">
            Welcome to Nepal ABC Bank LC Form
          </h2>
        </div>

        {/* Horizontal Line */}
        <hr className="form-horizontal-line" />

        {/* Nature of LC */}
        <div className="form-field-row">
          <div className="form-field">
            <label className="form-label">NATURE OF LC</label>
            <div class="custom-select-wrapper">
              <select class="form-select" onChange={(e) => setCustomNatureOfLc(e.target.value)}>
                <option value="">Select Nature of LC</option>
                <option value="sight">Sight LC</option>
                <option value="usance">Usance LC</option>
              </select>
            </div>
          </div>
        </div>

        {/* Applicant Name and Address */}
        <div className="form-section">
          <h3 className="form-section-title">APPLICANT NAME AND ADDRESS</h3>
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">NAME</label>
              <input
                type="text"
                className="form-input"
                onChange={(e) => setApplicantName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="form-label">ADDRESS</label>
              <input type="text" className="form-input" onChange={(e) => setApplicantAddress(e.target.value)} />
            </div>
          </div>
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">ACCOUNT NUMBER</label>
              <input
                type="text"
                className="form-input"
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="form-label">POSTAL CODE</label>
              <input type="text" className="form-input" onChange={(e) => setPostalCode(e.target.value)} />
            </div>
          </div>
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">EMAIL</label>
              <input
                type="email"
                className="form-input"
                onChange={(e) => setApplicantEmail(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="form-label">PAN NUMBER</label>
              <input type="text" className="form-input" onChange={(e) => setPanNo(e.target.value)} />
            </div>
          </div>
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">EXIM CODE</label>
              <input type="text" className="form-input" onChange={(e) => setEximCode(e.target.value)} />
            </div>
            <div className="form-field">
              <label className="form-label">PHONE (+977)</label>
              <input type="tel" className="form-input" placeholder="+977" onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
        </div>

        {/* Beneficiary Name and Address */}
        <div className="form-section">
          <h3 className="form-section-title">BENEFICIARY NAME AND ADDRESS</h3>
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">NAME</label>
              <input type="text" className="form-input"
                onChange={(e) => setCustomBeneficiaryName(e.target.value)} />
            </div>
            <div className="form-field">
              <label className="form-label">COUNTRY</label>
              <select className="form-select" onChange={(e) => setCustomCountry(e.target.value)}>
                <option value="">Select Country</option>
                <option value="nepal">Nepal</option>
                <option value="india">India</option>
              </select>
            </div>
          </div>
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">ADDRESS</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-field">
              <label className="form-label">PHONE</label>
              <input type="tel" className="form-input" />
            </div>
          </div>
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">EMAIL</label>
              <input type="email" className="form-input" onChange={(e) => setCustomEmail(e.target.value)} />
            </div>
          </div>
        </div>

        {/* Mode of Transmission, Currency, Tolerance */}
        <div className="form-section flex-row">
          {/* Mode of Transmission Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">MODE OF TRANSMISSION</h3>
            <label className="form-label">Mode of Transmission</label>
            <div
              className="form-radio"
              style={{ display: "flex", alignItems: "center" }}
            >
              <input type="checkbox" id="teleTransmission" name="transmission" onChange={(e) => setCustomByTeleTransmission(e.target.checked)} />
              <label
                htmlFor="teleTransmission"
                style={{ padding: "1rem", margin: "0px" }}
              >
                BY TELE TRANSMISSION
              </label>
            </div>
          </div>

          {/* Currency Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">CURRENCY AND AMOUNT</h3>
            <div className="form-field-container">
              <div className="form-field">
                <label className="form-label">CURRENCY</label>
                <select className="form-select" onChange={(e) => {
                  setCustomCurrencyAndAmount(e.target.value)
                  console.log(e.target.value);
                }}>
                  <option value="">Select Currency</option>
                  <option value="usd">USD</option>
                  <option value="npr">NPR</option>
                </select>
              </div>
              <div className="form-field">
                <label className="form-label">AMOUNT</label>
                <input type="text" className="form-input" onChange={(e) => setCustomAmount(e.target.value)} />
              </div>
            </div>
          </div>

          {/* Tolerance Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">TOLERANCE</h3>
            <div className="form-field-container">
              <div className="form-field">
                <label className="form-label">TYPE</label>
                <select className="form-select" onChange={(e) => setCustomType(e.target.value)}>
                  <option value="">Select</option>
                  <option value="usd">USD</option>
                  <option value="npr">NPR</option>
                </select>
              </div>
              <div className="form-field">
                <label className="form-label">PERCENTAGE</label>
                <input type="text" className="form-input" onChange={(e) => setCustomPercentage(e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        {/* Incoterms */}
        <div className="form-section">
          <h3 className="form-section-title">INCOTERMS</h3>
          <div className="form-field-container">
            <div className="form-field">
              <label className="form-label">TYPE</label>
              <select className="form-select" onChange={(e) => setCustomTypes(e.target.value)} >
                <option value="">Select Type</option>
                <option value="fob">FOB</option>
                <option value="cif">CIF</option>
              </select>
            </div>
            <div className="form-field">
              <label className="form-label">TYPE</label>
              <input type="text" />
            </div>
          </div>
        </div>

        {/* Tenure/Payment Terms */}
        <div className="form-section">
          <h3 className="form-section-title">TENURE/PAYMENT TERMS</h3>
          <div className="form-field-contailer">
            <div className="form-radio-group">
              <input type="radio" id="sight" name="paymentTerms" onChange={(e) => setCustomSight(e.target.value)} />
              <label htmlFor="sight">SIGHT</label>
              <input type="radio" id="usance" name="paymentTerms" onChange={(e) => setCustomUsance(e.target.value)} />
              <label htmlFor="usance">USANCE</label>
            </div>
            <div className="form-radio-group">
              <input type="radio" id="mixedPayment" name="paymentTerms" onChange={(e) => setCustomMixedPayment(e.target.value)} />
              <label htmlFor="mixedPayment">MIXED PAYMENT</label>
              <input type="radio" id="deferredPayment" name="paymentTerms" onChange={(e) => setCustomDifferedPayment(e.target.value)} />
              <label htmlFor="deferredPayment">DEFERRED PAYMENT</label>
            </div>
            <div className="form-field">
              <label className="form-label">OTHER PAYMENT DETAILS</label>
              <input type="text" className="form-input" onChange={(e) => setCustomPaymentDetails(e.target.value)} />
            </div>
          </div>
        </div>

        {/* Credit Available with Negociating Bank */}
        <div className="form-section">
          <h3 className="form-section-title">
            CREDIT AVAILABLE WITH / NEGOTIATING BANK
          </h3>
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">
                CREDIT AVAILABLE WITH / NEGOTIATING BANK
              </label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-field">
              <label className="form-label">BY</label>
              <input type="text" className="form-input" />
            </div>
          </div>
        </div>

        {/* Partial Shipment, Transshipment, Shipment From */}
        <div className="form-section flex-row">
          {/* Partial Shipment Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">PARTIAL SHIPMENT</h3>
            <label className="form-label">PARTIAL SHIPMENT</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="partialShipmentAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="partialShipmentNotAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentNotAllowed">NOT ALLOWED</label>
            </div>
          </div>

          {/* Transshipment Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">TRANSSHIPMENT</h3>
            <label className="form-label">TRANSSHIPMENT</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="transshipmentAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="transshipmentNotAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentNotAllowed">NOT ALLOWED</label>
            </div>
          </div>

          {/* Shipment Form Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">SHIPMENT FROM</h3>
            <div className="form-field">
              <label className="form-label">
                SHIPMENT FROM / PLACE OF TAKING CHARGE / DISPATCH FROM / PLACE
                OF RECEIPT
              </label>
              <input
                type="text"
                placeholder="Shipment Form/Place of Taking in Charge/Dispatch from/Place of Receipt"
                className="form-input"
                onChange={(e) => setCustomShipmentFrom(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Port of Loading, Port of Discharge */}
        <div className="form-section flex-row">
          {/* Port of Loading Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">
              PORT OF LOADING / AIRPORT OF DEPARTURE
            </h3>
            <div className="form-field">
              <label>PORT OF LOADING</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Port of Loading"
                onChange={(e) => setCustomPortOfLoading(e.target.value)}
              />
            </div>
          </div>

          {/* Port of Discharge Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">
              PORT OF DISCHARGE / AIRPORT OF DESTINATION
            </h3>
            <div className="form-field">
              <label>PORT OF DISCHARGE</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Port of Discharge"
                onChange={(e) => setCustomPortOfDischarge(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Place of Final Destination, Custom Entry Point in Nepal */}
        <div className="form-section flex-row">
          {/* Place of Final Destination Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">PLACE OF FINAL DESTINATION</h3>
            <div className="form-field">
              <label>PLACE OF FINAL DESTINATION</label>
              <input
                type="text"
                className="form-input"
                placeholder="Final Destination/Place of Delivery"
                onChange={(e) => setCustomPlaceOfFinalDestination(e.target.value)}
              />
            </div>
          </div>

          {/* Custom Entry Point Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">CUSTOM ENTRY POINT</h3>
            <div className="flex-row">
              <div className="form-field">
                <label>CUSTOM ENTRY POINT</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Custom Entry Point"
                  onChange={(e) => setCustomCustomEntry(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label>If other (specify):</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Specify if other"
                  onChange={(e) => setCustomIfOtherSpecific(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Expiry/Shipment Details */}
        <div className="form-section">
          <h3 className="form-section-title">EXPIRY / SHIPMENT DETAILS</h3>
          <div className="input-row flex-row">
            {/* Latest Date of Shipment Field */}
            <div className="form-field">
              <label>LATEST DATE OF SHIPMENT</label>
              <input type="date" className="form-input"
                onChange={(e) => setCustomLatestDateOfShipment(e.target.value)}
              />
            </div>

            {/* Expiry Date Field */}
            <div className="form-field">
              <label>EXPIRY DATE</label>
              <input type="date" className="form-input"
                onChange={(e) => setCustomExpiryShipmentDetails(e.target.value)}
              />
            </div>

            {/* Document Presentation Period Field */}
            <div className="form-field">
              <label>DOCUMENT PRESENTATION PERIOD</label>
              <input
                type="text"
                className="form-input"
                placeholder="Presentation Period"
                onChange={(e) => setCustomDocumentPresentationPeriod(e.target.value)}
              />
            </div>

            {/* Place of Expiry Field */}
            <div className="form-field">
              <label>PLACE OF EXPIRY</label>
              <input
                type="text"
                className="form-input"
                placeholder="Place of Expiry"
                onChange={(e) => setCustomPlaceOfExpiry(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* TT Reimbursement, Confirmation Status, Bank Charges */}
        <div className="form-section flex-row">
          {/* Partial Shipment Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">TT REIMBURSEMENT</h3>
            <label className="form-label">TT REIMBURSMENT</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="partialShipmentAllowed"
                name="partialShipment"
                onChange={(e) => setCustomAllowed(e.target.value)}
              />
              <label htmlFor="partialShipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="partialShipmentNotAllowed"
                name="partialShipment"
                onChange={(e) => setCustomNotAllowed(e.target.value)}
              />
              <label htmlFor="partialShipmentNotAllowed">NOT ALLOWED</label>
            </div>
            <label className="form-label">TT REIMBURSMENT</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="partialShipmentAllowed"
                name="partialShipment"
                onChange={(e) => setCustomReimAllow(e.target.value)}
              />
              <label htmlFor="partialShipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="partialShipmentNotAllowed"
                name="partialShipment"
                onChange={(e) => setCustomReimNotAllow(e.target.value)}
              />
              <label htmlFor="partialShipmentNotAllowed">NOT ALLOWED</label>
            </div>
          </div>

          {/* Transshipment Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">CONFIRMATION STATUS</h3>
            <label className="form-label">CONFIRMATION STATUS</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="transshipmentAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="transshipmentNotAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentNotAllowed">NOT ALLOWED</label>
            </div>
            <label className="form-label">CONFIRMATION STATUS</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="transshipmentAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="transshipmentNotAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentNotAllowed">NOT ALLOWED</label>
            </div>
          </div>

          {/* Shipment Form Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">BANK CHARGES</h3>
            <label className="form-label">CONFIRMATION STATUS</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="transshipmentAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="transshipmentNotAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentNotAllowed">NOT ALLOWED</label>
            </div>
            <label className="form-label">CONFIRMATION STATUS</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="transshipmentAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="transshipmentNotAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentNotAllowed">NOT ALLOWED</label>
            </div>
          </div>
        </div>

        {/* Description, Specification and Quality of Goods and/or Services */}
        <div className="form-section">
          <h3 className="form-section-title">
            DESCRIPTION, SPECIFICATION AND QUALITY OF GOODS AND/OR SERVICES
          </h3>
          <div className="form-field">
            <label>
              Description, Specification and Quality of Goods and/or Services
            </label>
            <input type="text" className="full-width form-input" onChange={(e) => setCustomDescriptionSpecificationAndQuantity(e.target.value)} />
          </div>

          <div className="form-row flex-row">
            <div className="form-field">
              <label>As Per Performa Invoice Number</label>
              <input type="text" className="form-input" onChange={(e) => setCustomAsPerInvoiceNumber(e.target.value)} />
            </div>
            <div className="form-field">
              <label>Dated (MM-DD-YY)</label>
              <input type="date" className="form-input" onChange={(e) => setCustomDated(e.target.value)} />
            </div>
            <div className="form-field">
              <label>Master Good</label>
              <input type="text" className="form-input" onChange={(e) => setCustomMasterGoods(e.target.value)} />
            </div>

            <div className="form-field">
              <label>HS Code</label>
              <input type="text" className="form-input"
                onChange={(e) => setCustomHsCode(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Selected Code</label>
              <input type="text" className="form-input" onChange={(e) => setCustomSelectedCode(e.target.value)} />
            </div>
            <div className="form-field">
              <label>Quantity</label>
              <input type="number" className="form-input" onChange={(e) => setCustomQuantity(e.target.value)} />
            </div>
            <div className="form-field">
              <label>Rate</label>
              <input type="text" className="form-input" onChange={(e) => setCustomRate(e.target.value)} />
            </div>
          </div>
        </div>2

        {/* Authorized to Debit Our Account */}
        <div className="form-section">
          <h3 className="form-section-title">
            AUTHORIZED TO DEBIT OUT ACCOUNT
          </h3>
          <label>Account Number</label>
          <input type="text" className="form-input" onChange={(e) => setCustomAccountNo(e.target.value)} />
        </div>

        {/* Documents Required */}
        <div className="form-group">
          <h3 className="form-section-title">DOCUMENTS REQUIRED</h3>

          {/* 1 */}
          <div className="document-section">
            <div className="document-form-field">
              <label>1.</label>
              <label>
                <input type="checkbox" /> Signed <input type="checkbox" />{" "}
                Commercial Invoice
                <input type="checkbox" /> Tax Invoice in{" "}
                <input type="number" className="form-input" onChange={(e) => setCustomOriginal(e.target.value)} /> Original/s and
                <input type="number" className="form-input" onChange={(e) => setCustomCeroriginNoOfCopies(e.target.value)} /> Copy/ies
              </label>
            </div>
          </div>

          {/* 2 */}
          <div className="document-section">
            <div className="document-form-field">
              <label>2.</label>
              <label>Transportation Document</label>
            </div>

            {/* A */}
            <div className="sub-document form-row">
              <div className="document-form-field">
                <label>A.</label>
                <label>
                  <input type="radio" name="transport" />
                  For Land
                </label>
              </div>
              <div className="document-form-field">
                <label className="document-margin">
                  Lorry Receipt/Truck Receipt/Consignment Note Original
                  Consignee Copy In
                  <input type="number" className="form-input" />
                  Original/s and
                  <input type="number" className="form-input" /> Copies Issued
                  by Carrier or its Authorized Agent Consigned to Global IME
                  Bank Limited Nepal Marked
                </label>
              </div>
            </div>
            <div className="form-radio-group document-margin">
              <input
                type="radio"
                id="partialShipmentAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentAllowed">Freight Prepared</label>
              <input
                type="radio"
                id="partialShipmentNotAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentNotAllowed">
                To collect and notify applicant
              </label>
            </div>

            {/* B */}
            <div className="sub-document form-row">
              <div className="document-form-field">
                <label>B.</label>
                <label>
                  <input type="radio" name="transport" />
                  For Sea
                </label>
              </div>
              <div className="document-form-field document-margin">
                <label>
                  3/3 Set of Original Clean Shipped On Board Ocean/Multimodal
                  Bill of Landing Issued by Carrier or its Authorized Agent Made
                  Out to the Order of Global IME Bank Limited Nepal Marked
                </label>
              </div>
            </div>
            <div className="form-radio-group document-margin">
              <input
                type="radio"
                id="partialShipmentAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentAllowed">Freight Prepared</label>
              <input
                type="radio"
                id="partialShipmentNotAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentNotAllowed">
                To collect and notify applicant
              </label>
            </div>

            {/* C */}
            <div className="sub-document form-row">
              <div className="document-form-field">
                <label>C.</label>
                <label>
                  <input type="radio" name="transport" />
                  FOR AIR
                </label>
              </div>
              <div className="document-form-field document-margin">
                <label>
                  Air Waybill (Original 3 for Shipper) Issued by Carrier or its
                  Authorized Agent Consigned to Global IME Bank Limited Nepal,
                  Marked
                </label>
              </div>
            </div>
            <div className="form-radio-group document-margin">
              <input
                type="radio"
                id="partialShipmentAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentAllowed">Freight Prepared</label>
              <input
                type="radio"
                id="partialShipmentNotAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentNotAllowed">
                To collect and notify applicant
              </label>
            </div>

            {/* D */}
            <div className="sub-document form-row">
              <div className="document-form-field">
                <label>D.</label>
                <label>
                  <input type="radio" name="transport" />
                  FOR RAIL
                </label>
              </div>
              <div className="document-form-field document-margin">
                <label>
                  Copy of Railway Receipt Made Out to the Order of Global IME
                  Bank Limited, Nepal and Marked Paid
                </label>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="document-section">
            <div className="document-form-field">
              <label>3.</label>
              <label>
                <input type="checkbox" /> Certificate of{" "}
                <input type="number" className="form-input" /> Origin in
                <input type="number" className="form-input" /> Original/s and
                <input type="number" className="form-input" /> Copy/ies Issued
                by
                <input type="checkbox" /> <span>Beneficiary</span>
                <input type="checkbox" /> <span>Chamber of Commerce</span>
                <input type="checkbox" /> <span>Government Authority</span>
                <input type="checkbox" /> <span>Other (Specify)</span>
                <input type="text" className="form-input" />
              </label>
            </div>
          </div>

          {/* 4 */}
          <div className="document-section">
            <div className="document-form-field">
              <label>4.</label>
              <label>
                <input type="checkbox" /> Packing List in
                <input type="number" className="form-input" /> Original/s and
                <input type="number" className="form-input" /> Copy/ies
              </label>
            </div>
          </div>

          {/*5*/}
          <div className="document-section">
            <div className="document-form-field">
              <label>5.</label>
              <label>
                <input type="checkbox" /> Weight List in
                <input type="number" className="form-input" /> Original/s and
                <input type="number" className="form-input" /> Copy/ies
              </label>
            </div>
          </div>

          {/*6*/}
          <div className="document-section">
            <div className="document-form-field">
              <label>6.</label>
              <label>
                <input type="checkbox" /> Insurance Policy or Certificate in
                <input type="number" className="form-input" /> Original/s and
                <input type="number" className="form-input" /> Copy/ies issued
                by insurance company in favor of Global IME Bank Limited, Nepal,
                mentioning that any claims shall be payable in Nepal in the
                currency of credit for invoice value plus 10 percent, covering
                the following risks as per Institute Cargo:
                <br />
                <input type="checkbox" /> <span>Clause 'A (All Risks)</span>
                <input type="checkbox" />{" "}
                <span>Institute Inland Transit Clause A</span>
                <input type="checkbox" /> <span>Air Risk</span>
                <input type="checkbox" /> <span>Marine Risk</span>
                <input type="checkbox" /> Institute War Clause SRCC TPND,
                Transshipment Risks (if applicable), Irrespective of Percentage
                and Covering
                <br />
                <span>All Risks Including Road Risks up to</span>{" "}
                <input type="number" className="form-input" />
              </label>
            </div>
          </div>

          {/*7*/}
          <div className="document-section">
            <div className="document-form-field">
              <label>7.</label>
              <label>
                <input type="checkbox" /> Other Documents (if applicable, please
                keep bullet wise)
                <input type="text" className="form-input" />
              </label>
            </div>
            <div className="document-form-field document-margin">
              <label>
                <input type="checkbox" />{" "}
                <span>Documents (file upload required)</span>
                <input type="file" />
              </label>
            </div>
          </div>
        </div>

        {/* Other Terms and Conditions */}
        <div className="form-group">
          <h3 className="form-section-title">Other Terms and Conditions</h3>
          <label>Other conditions required as per attached sheet</label>
          <input type="text" className="form-input"></input>
        </div>
        <div className="form-group">
          <label>Separate sheet attached</label>
          <div className="form-radio-group">
            <input type="radio" name="separateSheet" value="yes" />
            <label>Yes</label>
            <input type="radio" name="separateSheet" value="no" />
            <label>No</label>
          </div>
        </div>

        {/* Documents */}
        <div className="form-group">
          <h3 className="form-section-title">Documents</h3>
          <div className="form-section-container flex-row">
            <div className="file-upload-row">
              <label>Performa Invoice</label>
              <input type="file" onChange={(e) => setCustomAsPerInvoiceNumber(e.target.value)} />
            </div>
            <div className="file-upload-row">
              <label>BLBLNI</label>
              <input type="file" onChange={(e) => setCustomBibini(e.target.value)} />
            </div>
          </div>
        </div>

        {/* Advising Bank Details */}
        <div className="form-group">
          <h3 className="form-section-title">Advising Bank Details</h3>
          <label>Advising Bank Details</label>
          <input type="text" className="full-width form-input" onChange={(e) => setCustomAdvisingBankDetails(e.target.value)} />
          <div className="document-form-field text-section">
            <label>
              PLEASE ISSUE IRREVOCABLE LC AS PER ABOVE DETAIL/ TERMS AND
              CONDITION ON OUR ACCOUNT WE GUARANTEE DUE COMPLIANCE / FULFILLMENT
              OF ALL OBLIGATIONS OF THE OPENER / APPLICANT / IMPORTER / BUYER
              UNDER THIS LC AS PER TERMS AND CONDITIONS OF LC,
              GIBLPOLICIES/PRACTICES, UCPDC, NRB REGULATION, DIRECTIVE, CIRCULAR
              AND STANDARD BANKING PRACTICES, WE ALSO UNCONDITIONALLY ACCEPT THE
              SECURITY AGREEMENT PRINTED IN THIS FORM.
            </label>
          </div>
        </div>

        <br></br>
        <hr></hr>
        {/*Terms and Conditions*/}
        <div className="form-group tANDc">
          <input type="checkbox" />
          <label>Terms and Conditions Apply</label>
        </div>

        <div className="form-buttons">
          <button className="form-button submit-button" type="submit">
            Submit
          </button>
          <button className="form-button save-button" type="button" >
            Save as Draft
          </button>
        </div>
      </div>
    </form>
  );

};
export default LCIssuanceForm;
