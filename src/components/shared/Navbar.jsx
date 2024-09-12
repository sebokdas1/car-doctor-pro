import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSearch, IoCart } from "react-icons/io5";

const Navbar = () => {
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
      title: "Services",
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
      <div className="navbar container mx-auto">
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
                  className="font-semibold hover:text-primary duration-300"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <Link href={"/"}>
            <Image
              alt="logo"
              src="assets/logo.svg"
              height={86.78}
              width={107}
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
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-3">
            <IoCart className="text-xl" />
            <IoSearch className="text-xl" />
            <a className="btn btn-primary btn-outline px-8 hover:text-white">
              Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
