import React from "react";
import "./css/Tradesmart.css";
import { useNavigate } from "react-router-dom";
import BankGuaranteeIcon from "../assets/bankguarantee.png";
import CorporateIcon from "../assets/corporate.png";
import DebitCardIcon from "../assets/debitcard.png";
import LCInsuranceIcon from "../assets/lcinsurance.png";

const TradeSmart = () => {
  const services = [
    {
      title: "Debit Card",
      description: "Description of feature 1",
      route: "/tradesmart/debitcard",
      image: DebitCardIcon,
    },
    {
      title: "Corporate",
      description: "Description of feature 2",
      route: "/tradesmart/corporate",
      image: CorporateIcon,
    },
    {
      title: "LC Issuance",
      description: "Description of feature 3",
      route: "/tradesmart/lc-issuance",
      image: LCInsuranceIcon,
    },
    {
      title: "Bank Guarantee",
      description: "Description of feature 4",
      route: "/tradesmart/bank-guarantee",
      image: BankGuaranteeIcon,
    },
  ];

  const navigate = useNavigate();
  const handleFeatureClick = (route) => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="tradesmart">
      <h2>Trade Services</h2>
      <p className="tradeservicesparagraph">
        CAS, in partnership with Newgen, offers a powerful TradeSmart designed
        to support banks in managing and optimizing their trade finance operations.
        Our solution seamlessly integrates with your core banking systems and
        third-party applications while providing advanced features powered by
        cutting-edge technologies like AI. This module covers multiple critical
        areas of trade finance, including Letters of Credit, Bank Guarantees,
        Supply Chain Financing, Trade Loans, and Bills, each tailored to address
        specific business needs.
      </p>
      <div className="services-list">
        {services.map((service, index) => (
          <div
            className="feature"
            key={index}
            onClick={() => handleFeatureClick(service.route)}
            style={{ cursor: "pointer" }}
          >
            <img src={service.image} alt={service.title} />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeSmart;
