import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { BsGoogle } from "react-icons/bs";

const SocialSignIn = () => {
  const session = useSession();
  const router = useRouter();
  const handleSocialLogin = async (provider) => {
    const resp = await signIn(provider);
  };
  if (session.status === "authenticated") {
    router.push("/");
  }
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
