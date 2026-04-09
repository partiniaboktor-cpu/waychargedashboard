import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import RichTextField from "../Components/RichTextField";
import { InlineMessage } from "../Components/UIStates";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setMessage({ type: "error", text: "Please fill email and password." });
      return;
    }
    setMessage({ type: "success", text: "Login successful. Redirecting..." });
    setTimeout(() => navigate("/dashboard"), 450);
  };

  return (
    <div className="loginPage">
      <div className="loginCard">
        <h1>WayCharge Admin</h1>
        <p>Sign in to access your dashboard</p>
        <InlineMessage type={message.type} message={message.text} />

        <label>Email</label>
        <RichTextField placeholder="admin@waycharge.com" minHeight={50} showToolbar={false} onChangeText={setEmail} />

        <label>Password</label>
        <RichTextField placeholder="Enter password" minHeight={50} showToolbar={false} onChangeText={setPassword} />

        <button type="button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
