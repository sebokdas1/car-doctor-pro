import Image from "next/image";
import Link from "next/link";
import React from "react";

const login = () => {
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
            Sign In
          </h6>
          <form>
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
            <button
              type="submit"
              className="w-full btn btn-primary mt-12 text-lg"
            >
              Sign In
            </button>
          </form>
          <div>
            {/* <h6 className="my-12 text-center">or sign in with</h6> */}
            {/* <SocialSignin /> */}
            <h6 className="my-12 text-center">
              Not have account ?{" "}
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

export default login;
