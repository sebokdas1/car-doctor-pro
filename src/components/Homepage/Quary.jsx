import React from "react";
import { LuCalendarClock } from "react-icons/lu";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

const Quary = () => {
  return (
    <div className="container mx-auto h-[250px] bg-black mt-12 text-white flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center lg:justify-evenly items-center px-2 lg:px-7">
      <div className="flex items-center gap-2">
        <div className="text-4xl text-red-700">
          <LuCalendarClock />
        </div>
        <div>
          <small>We are open monday-friday</small>
          <p className="text-xl">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-4xl text-red-400">
          <BsFillTelephonePlusFill />
        </div>
        <div>
          <small>Have a question?</small>
          <p className="text-xl">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-4xl text-red-600">
          <ImLocation />
        </div>
        <div>
          <small>Need a repair? our address</small>
          <p className="text-xl">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Quary;
