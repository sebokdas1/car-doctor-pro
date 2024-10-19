"use client";
import { SessionProvider } from "next-auth/react";
import React, { Suspense } from "react";

const AuthProvider = ({ children }) => {
  return (
    <SessionProvider basePath="/api/auth">
      <Suspense>{children}</Suspense>
    </SessionProvider>
  );
};

export default AuthProvider;
