import Image from "next/image";
import React from "react";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { FaTelegram, FaDiscord } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMail } from "react-icons/md";

const Page = () => {
  return (
    <div className="container mx-auto">
      <div className="p-[10px]">
        <h1 className="text-[#FF3811] text-[55px] font-bold text-center leading-none">
          Contact
        </h1>
        <h2 className="text-[#262626] text-[22px] font-bold text-center leading-none">
          Connect with me
        </h2>
      </div>
      <div className="my-[25px] pb-45px lg:flex">
        <div className="bg-gradient-to-br from-white to-[#e7ecef] shadow-md transition-all duration-300 p-8 rounded-[20px] lg:mr-[18px]">
          <Image
            height={178}
            width={284}
            src={"/assets/images/contact/contact1.png"}
            alt="Contact_img"
          />
          <div>
            <h1 className="text-[#FF3811] text-[32px] font-bold">Sebok Das</h1>
            <h2 className="text-[#262626] text-[18px] font-semibold">
              Web Developer (Mern)
            </h2>
            <p className="font-light mb-[15px] leading-[1.6em] text-[#262626]">
              Are You Looking For Your Business Online Presence? I am here.
            </p>
            <div>
              <h2 className="flex items-center gap-3">
                <span className="text-[18px] font-normal text-[#735BE2]">
                  <BsFillPhoneVibrateFill />
                </span>
                <span className="text-[#262626] text-[18px] font-semibold">
                  <a href="tel:+8801730661569">+8801730661569</a>
                </span>
              </h2>
              <h2 className="flex items-center gap-3">
                <span className="text-[18px] font-normal text-[#735BE2]">
                  <MdMail />
                </span>
                <span className="text-[#262626] text-[18px] font-semibold">
                  <a href="mailto:sebok.das66@gmail.com">
                    sebok.das66@gmail.com
                  </a>
                </span>
              </h2>
            </div>
            <div className="flex justify-center items-center gap-4 mt-3">
              <a
                className="text-2xl text-[#229ED9]"
                href="https://t.me/sebokdas1"
                target="_blank"
              >
                <FaTelegram />
              </a>
              <a
                className="text-2xl text-[#075E54]"
                href="https://wa.me/+8801730661569?text"
                target="_blank"
              >
                <IoLogoWhatsapp />
              </a>
              <a
                className="text-2xl text-[#7289da]"
                href="https://discord.com/users/885250899038060605"
                target="_blank"
              >
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-white to-[#e7ecef] shadow-md transition-all duration-300 p-8 rounded-[20px] mr-[10px] ml-[10px] mt-6 lg:mt-0 mx-[10px]">
          <form>
            <label className="font-semibold" for="email">
              Your email
            </label>
            <input
              className="w-full p-3 my-2 inline-block border border-gray-300 rounded-md box-border focus:outline-primary"
              type="email"
              id="email"
              name="email"
              // required
            />

            <label className="font-semibold" for="subject">
              Subject
            </label>
            <input
              className="w-full p-3 my-2 inline-block border border-gray-300 rounded-md box-border focus:outline-primary"
              type="text"
              id="subject"
              name="subject"
              autoComplete="off"
              // required
            />
            <label className="font-semibold" for="message">
              Your message
            </label>
            <textarea
              className="w-full p-3 my-2 inline-block border border-gray-300 rounded-md box-border focus:outline-primary"
              name="message"
              id="message"
              cols="30"
              rows="7"
              autoComplete="off"
              // required
            />
            <input
              className="btn btn-primary"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
