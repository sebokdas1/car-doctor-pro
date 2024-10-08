"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const handleAddToCart = async () => {
    try {
      const res = await axios.post("/add-to-cart/api", product);
      toast.success(res?.data?.message);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

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
          <p className="text-[#FF3811]">${product?.price}</p>
          <button
            onClick={handleAddToCart}
            className="btn btn-xs bg-orange-400 hover:bg-orange-500 text-white"
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
