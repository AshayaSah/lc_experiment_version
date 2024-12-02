import React, { useState, useEffect } from "react";
import "./css/LCIssuanceForm.css";
import { useNavigate } from "react-router-dom";
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="lc-form-container"></div>
      </form>
    </>
  );
};
export default LCIssuanceForm;
