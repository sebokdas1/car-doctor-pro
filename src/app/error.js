"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="container mx-auto">
      <div className=" text-center flex flex-col items-center">
        <Image
          width={300}
          height={300}
          src={"/assets/images/error.avif"}
          alt="error image"
        />
        <h1>We’re Sorry, an error has occurred</h1>
        <h3>We seem to have lost this page but we don’t want to lose you.</h3>
        <Link href={"/"}>
          <button className="btn btn-primary btn-outline mt-2">
            BACK TO HOMEPAGE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
