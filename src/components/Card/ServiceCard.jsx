import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl mx-2 lg:mx-0">
      <figure>
        <Image
          height={120}
          width={430}
          alt={service?.title}
          src={service?.img}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service?.title}</h2>
        <div className="card-actions justify-between items-center">
          <h6 className="text-primary text-semibold text-[20px]">
            price : ${service?.price}
          </h6>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
