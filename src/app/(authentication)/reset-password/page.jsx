"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await axios.post("/auth/api/reset-password", { password, token });
      toast.success("Password reset successfully. You can now log in.");
      router.push("/log-in");
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="container mx-auto">
      <h1>Reset Password</h1>
      <form onSubmit={handleResetPassword}>
        <label htmlFor="password">New Password:</label>
        <br />
        <input
          className="bg-slate-300 p-3"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />{" "}
        <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <br />
        <input
          className="bg-slate-300 p-3"
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />{" "}
        <br />
        <button type="submit" className="btn btn-primary mt-3">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
