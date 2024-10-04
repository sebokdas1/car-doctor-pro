"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { IoSearch, IoCart } from "react-icons/io5";

const Navbar = () => {
  const session = useSession();
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/",
    },
    {
      title: "Blog",
      path: "/",
    },
    {
      title: "Contact",
      path: "/",
    },
  ];
  return (
    <nav className=" bg-base-100">
      <div className="navbar container justify-center mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <div className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-52 p-2">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.path}
                  className="font-semibold mt-3  border-b border-gray-500 hover:text-primary duration-300"
                >
                  {item.title}
                </Link>
              ))}
              {session.status === "authenticated" && (
                <Link
                  href={"/my-bookings"}
                  className="font-semibold mt-3  border-b border-gray-500 hover:text-primary duration-300"
                >
                  myBookings
                </Link>
              )}
            </div>
          </div>
          <Link href={"/"}>
            <Image
              alt="logo"
              src="/assets/logo.svg"
              height={86.78}
              width={107}
              className="ml-12 lg:ml-0"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="font-semibold hover:text-primary duration-300"
              >
                {item.title}
              </Link>
            ))}
            {session.status === "authenticated" && (
              <Link
                href={"/my-bookings"}
                className="font-semibold hover:text-primary duration-300"
              >
                myBookings
              </Link>
            )}
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-3">
            <IoCart className="text-xl" />
            <IoSearch className="text-xl" />

            {session.status === "unauthenticated" && (
              <Link href="/log-in" className="btn btn-primary px-3 lg:px-8">
                Login
              </Link>
            )}

            {session.status === "loading" && (
              <div class="flex justify-center items-center">
                <div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            {session.status === "authenticated" && (
              <button
                onClick={() => signOut()}
                className="btn btn-primary hidden lg:block px-8"
              >
                LogOut
              </button>
            )}
            {session.status === "authenticated" && (
              <button onClick={() => signOut()} className="lg:hidden">
                <FiLogOut />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
