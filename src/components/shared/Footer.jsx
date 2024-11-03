import Image from "next/image";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-[#151515] text-[#bbbbbb] mt-6 p-10">
      <aside>
        <Image alt="logo" src={"/assets/logo.svg"} height={60} width={80} />
        <p>
          Edwin Daz is a software and web <br />
          technologies engineer, a life couch
          <br />
          trainer who is also a serial.
        </p>
        <div className="flex items-center space-x-4 text-2xl pt-2 font-bold text-white">
          <Link href={"https://www.linkedin.com/in/sebokdasbd"} target="_blank">
            <IoLogoLinkedin />
          </Link>
          <Link href={"https://www.facebook.com/sebokdasbd"} target="_blank">
            <FaFacebookSquare />
          </Link>
          <Link href={"https://github.com/sebokdas1"} target="_blank">
            <FaGithubSquare />
          </Link>
          <FaTwitterSquare className="cursor-pointer" />
        </div>
      </aside>
      <nav>
        <h6 className="text-white font-semibold  uppercase pb-3">About</h6>
        <Link href={"/"} className="link link-hover">
          Home
        </Link>
        <a className="link link-hover">Service</a>
        <Link href={"/contact"} className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <h6 className="text-white font-semibold  uppercase pb-3">Company</h6>
        <a className="link link-hover">Why Car Doctor</a>
        <Link href={"/about"} className="link link-hover">
          About
        </Link>
      </nav>
      <nav>
        <h6 className="text-white font-semibold  uppercase pb-3">Support</h6>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accesbility</a>
      </nav>
    </footer>
  );
};

export default Footer;
