"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import SocialSignIn from "@/components/shared/SocialSignIn";
import { useSearchParams } from "next/navigation";

const Login = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect") || "/";
  const [newError, setNewError] = useState();

  const handleLogIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email || !password) {
      setNewError("Please enter both email and password");
      return;
    }

    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: path,
    });

    if (resp.error) {
      setNewError(resp.error);
    } else {
      window.location.href = resp?.url || "/";
    }
  };

  return (
    <div className="container lg:px-24 mx-auto py-18">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="hidden lg:block">
          <Image
            src="/assets/images/login/login.svg"
            height="540"
            width="540"
            alt="login image"
          />
        </div>
        <div className="border-2 p-12">
          <h6 className="text-3xl font-semibold text-primary text-center mb-4 lg:mb-12">
            Log In
          </h6>
          <form onSubmit={handleLogIn}>
            <label htmlFor="email">Email</label> <br />
            <input
              onFocus={() => setNewError("")}
              type="email"
              name="email"
              placeholder="your email"
              className="mt-3 w-full input input-bordered"
            />
            <br /> <br />
            <label htmlFor="password">Password</label> <br />
            <input
              onFocus={() => setNewError("")}
              type="password"
              name="password"
              placeholder="your password"
              className="w-full mt-3 input input-bordered"
            />
            <br />
            {newError && <p className="text-red-500 mt-1">{newError}</p>}
            <button
              type="submit"
              className="w-full btn btn-primary mt-8 text-lg"
            >
              Log In
            </button>
          </form>
          <Link
            href={"/forgot-password"}
            className="text-orange-400 mt-2 hover:underline"
          >
            Forgot Password?
          </Link>
          <div>
            <h6 className="my-4 text-center">or sign in with</h6>
            <SocialSignIn />
            <h6 className="my-4 text-center">
              Not have account ?
              <Link className="text-primary font-semibold" href={"/sign-up"}>
                Sign Up
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
