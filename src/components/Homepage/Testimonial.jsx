import Image from "next/image";
import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="container mx-auto mt-14">
      <div className="lg:w-[90%] mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#FF3811]">Testimonial</h3>
          <h2 className="text-5xl">What Customer Says</h2>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br />
            words which don`t look even slightly believable.
          </p>
        </div>

        <div className="lg:flex gap-6">
          <div className="card bg-base-100 w-full shadow-xl mt-2 lg:mt-0">
            <div className="card-body">
              <div className="flex  items-center space-x-[50%]">
                <div className="flex gap-2 items-center">
                  <Image
                    src={
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    width={60}
                    height={60}
                    alt="client"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="card-title">Title</h3>
                    <h4>Designation</h4>
                  </div>
                </div>

                <FaQuoteRight className="text-[#ffd7ce] text-[56px] " />
              </div>
              <p className="text-gray-500">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don`t look even
                slightly believable.
              </p>
              <div className="flex text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full shadow-xl mt-2 lg:mt-0">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Image
                    src={
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    width={60}
                    height={60}
                    alt="client"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="card-title">Title</h3>
                    <h4>Designation</h4>
                  </div>
                </div>
                <div>
                  <FaQuoteRight className="text-[#ffd7ce] text-[56px]" />
                </div>
              </div>
              <p className="text-gray-500">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don`t look even
                slightly believable.
              </p>
              <div className="flex text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
