import Image from "next/image";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-[#151515] text-[#bbbbbb] p-10">
      <aside>
        <Image alt="logo" src={"/assets/logo.svg"} height={86.78} width={107} />
        <p>
          Edwin Daz is a software and web <br />
          technologies engineer, a life couch
          <br />
          trainer who is also a serial.
        </p>
        <div className="flex items-center space-x-4 text-2xl pt-2 font-bold text-white">
          <IoLogoLinkedin className="cursor-pointer" />
          <FaFacebookSquare className="cursor-pointer" />
          <FaGithubSquare className="cursor-pointer" />
          <FaTwitterSquare className="cursor-pointer" />
        </div>
      </aside>
      <nav>
        <h6 className="text-white font-semibold  uppercase pb-3">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="text-white font-semibold  uppercase pb-3">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="text-white font-semibold  uppercase pb-3">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
