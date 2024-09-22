import { signIn } from "next-auth/react";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SocialSignIn = () => {
  const handleSocialLogin = async (provider) => {
    const resp = await signIn(provider);
    console.log(resp);
  };
  return (
    <div className="flex items-center justify-center space-x-3">
      <button
        onClick={() => handleSocialLogin("google")}
        className="btn  flex items-center justify-center text-green-500"
      >
        <BsGoogle />
      </button>

      {/* <button
        onClick={() => handleSocialLogin("github")}
        className="btn  flex items-center justify-center text-primary"
      >
        <BsGithub />
      </button> */}
    </div>
  );
};

export default SocialSignIn;
