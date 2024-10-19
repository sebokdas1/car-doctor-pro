"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newError, setNewError] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/authenticate/auth/api/forgot-password", { email });
      toast.success("Password reset link sent to your email.");
    } catch (error) {
      console.log(error);
      setNewError(error?.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="container mx-auto">
      <div className="border-2 p-12 lg:w-[50%] mx-auto my-5">
        <h6 className="text-3xl font-semibold text-primary text-center mb-4 lg:mb-12">
          Forgot Password
        </h6>
        <form onSubmit={handleForgotPassword}>
          <label htmlFor="email">Email</label> <br />
          <input
            onFocus={() => setNewError("")}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="your email"
            className="mt-3 w-full input input-bordered"
          />
          <br />
          {newError && <p className="text-red-500 mt-1">{newError}</p>}
          <button type="submit" className="w-full btn btn-primary mt-8 text-lg">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
