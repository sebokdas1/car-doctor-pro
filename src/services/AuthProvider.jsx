"use client";
import { SessionProvider } from "next-auth/react";
import React, { Suspense } from "react";

const AuthProvider = ({ children }) => {
  return (
    <SessionProvider>
      <Suspense>{children}</Suspense>
    </SessionProvider>
  );
};

export default AuthProvider;
