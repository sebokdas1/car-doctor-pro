"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const { token } = router.query; // get the token from the URL

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await axios.post("/auth/api/reset-password", { password, token });
      toast.success("Password reset successfully. You can now log in.");
      router.push("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="container">
      <h1>Reset Password</h1>
      <form onSubmit={handleResetPassword}>
        <label htmlFor="password">New Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
