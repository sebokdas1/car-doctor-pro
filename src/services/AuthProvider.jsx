"use client";
import { SessionProvider } from "next-auth/react";
import React, { Suspense } from "react";

const AuthProvider = ({ children }) => {
  return (
    <SessionProvider>
      <Suspense basePath="/api/auth">{children}</Suspense>
    </SessionProvider>
  );
};

export default AuthProvider;
