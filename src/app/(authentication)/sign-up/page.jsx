"use client";
import SocialSignIn from "@/components/shared/SocialSignIn";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Signup = () => {
  const router = useRouter();
  const [newError, setNewError] = useState();
  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!email || !password) {
      setNewError("Please enter both email and password");
      return;
    }
    const newUser = {
      name,
      email,
      password,
    };
    try {
      const resp = await axios.post("/sign-up/api", newUser);

      if (resp?.status === 200) {
        router.push("/log-in");
        toast.success(resp?.data?.message);
      }
    } catch (error) {
      if (error.response) {
        setNewError(error.response.data.error || "Something went wrong");
      } else if (error.request) {
        setNewError("No response from server");
      } else {
        setNewError("Error: " + error.message);
      }
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
          <h6 className="text-3xl font-semibold text-primary text-center mb-4 lg:mb-7">
            Sign Up
          </h6>
          <form onSubmit={handleSignUp}>
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="your name"
              className="mt-3 w-full input input-bordered"
            />
            <br /> <br />
            <label htmlFor="email">Email</label> <br />
            <input
              type="text"
              name="email"
              placeholder="your email"
              className="mt-3 w-full input input-bordered"
            />
            <br /> <br />
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              name="password"
              placeholder="your password"
              className="w-full mt-3 input input-bordered"
            />
            <br />
            {newError && <p className="text-red-500 mt-1">{newError}</p>}
            <button
              type="submit"
              className="w-full btn btn-primary mt-12 text-lg"
            >
              Sign Up
            </button>
          </form>
          <div>
            <h6 className="my-4 text-center">or sign in with</h6>
            <SocialSignIn />
            <h6 className="my-4 text-center">
              Already have an account ?
              <Link className="text-primary font-semibold" href={"/log-in"}>
                Log In
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
