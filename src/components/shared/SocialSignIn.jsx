import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { BsGoogle } from "react-icons/bs";

const SocialSignIn = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");
  const handleSocialLogin = async (provider) => {
    const resp = signIn(provider, {
      redirect: true,
      callbackUrl: path ? path : "/",
    });
  };
  return (
    <div className="flex items-center justify-center space-x-3">
      <button
        onClick={() => handleSocialLogin("google")}
        className="btn  flex items-center justify-center text-green-500"
      >
        <BsGoogle />
      </button>
    </div>
  );
};

export default SocialSignIn;
