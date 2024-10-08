"use client";
import Image from "next/image";
import { React, useState, useEffect } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";

const Testimonial = () => {
  const [testomials, setTestomonials] = useState([]);
  const [previous, setPrevious] = useState(0);
  const [current, setCurrent] = useState(2);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setTestomonials(data));
  }, []);

  const handlePrevSlide = async () => {
    await setPrevious(previous - 2);
    await setCurrent(current - 2);
  };
  const handleNextSlide = async () => {
    await setPrevious(previous + 2);
    await setCurrent(current + 2);
  };
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
          {testomials.slice(previous, current).map((test) => (
            <div
              className="card bg-base-100 w-full shadow-xl mt-2 lg:mt-0"
              key={test?.id}
            >
              <div className="card-body">
                <div className="flex  items-center space-x-[50%]">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={
                        test?.img
                          ? test?.img
                          : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                      width={60}
                      height={60}
                      alt="client"
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold ">{test?.name}</h3>
                      <h4>{test?.designation}</h4>
                    </div>
                  </div>

                  <FaQuoteRight className="text-[#ffd7ce] text-[56px] " />
                </div>
                <p className="text-gray-500">{test?.coment}</p>
                <>
                  {test?.rating === 5 && (
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  )}
                  {test?.rating === 4 && (
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  )}
                  {test?.rating === 3 && (
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  )}
                  {test?.rating === 2 && (
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                    </div>
                  )}
                  {test?.rating === 1 && (
                    <div className="flex text-yellow-400">
                      <FaStar />
                    </div>
                  )}
                </>
              </div>
            </div>
          ))}
        </div>
        <p className="text-2xl font-bold text-red-600 flex space-x-4 justify-center mt-3 ">
          <button
            disabled={testomials.length === 1 || current <= 2}
            onClick={handlePrevSlide}
          >
            <TiArrowLeft className="shadow cursor-pointer" />
          </button>
          <button
            disabled={
              testomials.length === current || testomials.length < current
            }
            onClick={handleNextSlide}
          >
            <TiArrowRight className="shadow cursor-pointer" />
          </button>
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
