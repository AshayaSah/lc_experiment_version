import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Auth/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import TradeSmart from "./components/Tradesmart";
import Corporate from "./components/Corporate";
import CorporateRegistration from "./components/CorporateRegistration";
import LCIssuance from "./components/LCIssuance";
import LCIssuanceForm from "./components/LCIssuanceFormDublicate";

function App() {
  const [user, setUser] = useState("Ashaya");

  const [accounts, setAccounts] = useState([]);
  const [LcIssuances, setLcIssuances] = useState([]);

  // Check for stored user in local storage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (currentUser) => {
    setUser(currentUser);
    localStorage.setItem("currentUser ", JSON.stringify(currentUser)); // Store user in local storage
    console.log(currentUser);
  };

  const handleLogout = () => {
    setUser(null); // Reset currentUser  on logout
    localStorage.removeItem("currentUser "); // Remove user from local storage
  };

  const handleAddAccount = (account) => {
    setAccounts([...accounts, account]);
  };

  const handleAddLcIssuance = (LcIssuance) => {
    setLcIssuances([...LcIssuances, LcIssuance]);
  };

  const toggleAccountStatus = (index) => {
    const updatedAccounts = [...accounts];
    updatedAccounts[index].isActive = !updatedAccounts[index].isActive; // Toggle the active status
    setAccounts(updatedAccounts); // Update the state
  };

  return (
    <div className="App">
      <Router>
        <Navbar user={user} handleLogout={handleLogout} />{" "}
        {/* Pass user to Navbar */}
        <Routes>
          <Route path="/" element={<Homepage handleLogin={handleLogin} />} />{" "}
          {/* Default route */}
          <Route
            path="/login"
            element={
              !user ? (
                <Login handleLogin={handleLogin} />
              ) : (
                <Navigate to="/onlinelc" />
              )
            }
          />
          <Route
            path="/tradesmart"
            element={
              user ? <TradeSmart /> : <Login handleLogin={handleLogin}></Login>
            }
          />
          <Route
            path="/tradesmart/corporate"
            element={
              user ? (
                <Corporate
                  accounts={accounts}
                  onToggleStatus={toggleAccountStatus}
                />
              ) : (
                <Login handleLogin={handleLogin}></Login>
              )
            }
          />
          <Route
            path="/tradesmart/corporate/corporate-registration"
            element={
              user ? (
                <CorporateRegistration onAddAccount={handleAddAccount} />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/tradesmart/lc-issuance"
            element={
              user ? (
                <LCIssuance LcIssuances={LcIssuances} />
              ) : (
                <Login handleLogin={handleLogin}></Login>
              )
            }
          />
          <Route
            path="/tradesmart/lc-issuance/lc-issuance-apply"
            element={
              user ? (
                <LCIssuanceForm onAddLcIssuance={handleAddLcIssuance} />
              ) : (
                <Login handleLogin={handleLogin}></Login>
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
