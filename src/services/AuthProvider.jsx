// "use client";
// import { SessionProvider } from "next-auth/react";
// import React, { Suspense } from "react";

// const AuthProvider = ({ children }) => {
//   return (
//     <SessionProvider>
//       <Suspense>{children}</Suspense>
//     </SessionProvider>
//   );
// };

// export default AuthProvider;

"use client";
import { SessionProvider } from "next-auth/react";
import React, { Suspense } from "react";

const AuthProvider = ({ children }) => {
  return (
    <SessionProvider>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </SessionProvider>
  );
};

export default AuthProvider;
