import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Logout = () => {
  const navigate = useNavigate();

  return (
    <div className="loginPage">
      <div className="loginCard">
        <h1>Logged Out</h1>
        <p>You have been logged out successfully.</p>
        <button type="button" onClick={() => navigate("/")}>
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default Logout;
