"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post("", { email });
      toast.success("Password reset link sent to your email.");
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="container">
      <h1>Forgot Password</h1>
      <form onSubmit={handleForgotPassword}>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
