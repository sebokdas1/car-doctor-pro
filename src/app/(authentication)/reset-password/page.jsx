"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newError, setNewError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setNewError("Passwords do not match");
      return;
    }

    try {
      await axios.post("/auth/api/reset-password", { password, token });
      toast.success("Password reset successfully. You can now log in.");
      router.push("/log-in");
    } catch (error) {
      setNewErrorr(error?.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="container mx-auto">
      <div className="border-2 p-12 lg:w-[50%] mx-auto my-5">
        <h6 className="text-3xl font-semibold text-primary text-center mb-4 lg:mb-12">
          Forgot Password
        </h6>
        <form onSubmit={handleResetPassword}>
          <label htmlFor="password">Password</label> <br />
          <input
            onFocus={() => setNewError("")}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            className="mt-3 w-full input input-bordered"
          />
          <br />
          <br />
          <label htmlFor="confirmPassword">Confirm Password</label> <br />
          <input
            onFocus={() => setNewError("")}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="mt-3 w-full input input-bordered"
          />
          <br />
          {newError && <p className="text-red-500 mt-1">{newError}</p>}
          <button type="submit" className="w-full btn btn-primary mt-8 text-lg">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
