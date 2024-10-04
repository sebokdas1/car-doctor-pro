import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto ">
      <div className="carousel w-full">
        {banners.map((banner, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)),url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat bg-cover"
          >
            <div className="h-full w-full lg:w-[50%] flex items-center pl-8 lg:pl-36">
              <div className="lg:space-y-6">
                <h1 className="text-2xl lg:text-5xl font-bold text-white">
                  {banner?.text}
                </h1>
                <p className="text-white">{banner?.description}</p>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-primary btn-outline">
                  Latest Project
                </button>
              </div>
            </div>
            <div className="absolute bottom-1 lg:bottom-12 right-4 lg:right-12 flex  transform justify-between">
              <a href={banner.prev} className="btn btn-circle mr-3 lg:mr-6">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    text: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    text: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    text: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    text: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
