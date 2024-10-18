"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/api/forgot-password", { email });
      toast.success("Password reset link sent to your email.");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-xl">Forgot Password</h1>
      <form onSubmit={handleForgotPassword}>
        <label htmlFor="email">Email Address:</label> <br />
        <input
          className="bg-gray-300 px-3 py-2 my-2"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
