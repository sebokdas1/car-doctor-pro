import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-6 bg-[#f3f3f3] py-6">
        <Image
          height={153}
          width={156}
          alt={product?.title}
          src={product?.img}
          className="rounded"
        />
      </figure>
      <div className="card-body items-center text-center">
        <small className="card-title text-yellow-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </small>
        <p>{product?.title}</p>
        <div className="card-actions flex justify-between items-center">
          <p className="text-[#FF3811]">${product?.price}</p>{" "}
          <button className="btn  btn-outline">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
