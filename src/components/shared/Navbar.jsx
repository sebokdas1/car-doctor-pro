"use client";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { React, useState, useEffect } from "react";
import { IoSearch, IoCart } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname();
  const session = useSession();
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/cart/get-cart/${session?.data?.user?.email}`
        );
        setCarts(response?.data);
      } catch (err) {
        console.log(err?.message);
      }
    };
    if (session?.data?.user?.email) {
      fetchData();
    }
  }, [session?.data?.user?.email, carts]);

  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blogs",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  const userNavItems = [
    {
      title: "myBookings",
      path: "/my-bookings",
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
                className="h-10 w-10"
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
            {/* small device menu */}
            <div className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-52 p-2">
              {navItems.map((item) => (
                <Link
                  key={item?.title}
                  href={item?.path}
                  className={`uppercase font-semibold mt-3 mb-3 text-xl  border-b border-gray-500 hover:text-primary duration-300 ${
                    pathname === item.path && "text-primary"
                  }`}
                >
                  {item?.title}
                </Link>
              ))}
              {session.status === "authenticated" &&
                userNavItems.map((item) => (
                  <Link
                    key={item?.title}
                    href={item?.path}
                    className={`uppercase font-semibold mt-3 mb-3 text-xl  border-b border-gray-500 hover:text-primary duration-300 ${
                      pathname === item.path && "text-primary"
                    }`}
                  >
                    {item?.title}
                  </Link>
                ))}
              {session.status === "authenticated" && (
                <button
                  onClick={() => signOut()}
                  className="lg:hidden btn bg-orange-600 mt-2 text-white"
                >
                  Log Out
                </button>
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

        {/* large device menu */}
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item?.title}
                href={item?.path}
                className={` font-semibold hover:text-primary duration-300 ${
                  pathname === item?.path && "text-primary"
                }`}
              >
                {item?.title}
              </Link>
            ))}
            {session?.status === "authenticated" &&
              userNavItems.map((item) => (
                <Link
                  key={item?.title}
                  href={item?.path}
                  className={` font-semibold hover:text-primary duration-300 ${
                    pathname === item?.path && "text-primary"
                  }`}
                >
                  {item?.title}
                </Link>
              ))}
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-3">
            <Link href={"/my-cart"} className="indicator">
              {carts?.length > 0 && (
                <span className="indicator-item indicator-center text-red-500 font-bold">
                  {carts?.length}
                </span>
              )}
              <IoCart className="text-4xl lg:text-xl" />
            </Link>
            <IoSearch className="text-4xl lg:text-xl" />

            {session?.status === "unauthenticated" && (
              <Link href="/log-in" className="btn btn-primary px-3 lg:px-8">
                Login
              </Link>
            )}

            {session?.status === "loading" && (
              <div className="flex justify-center items-center">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            {session?.status === "authenticated" && (
              <button
                onClick={() => signOut()}
                className="btn btn-primary hidden lg:block px-8"
              >
                LogOut
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
