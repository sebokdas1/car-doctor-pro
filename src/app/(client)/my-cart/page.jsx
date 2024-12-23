"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { React, useState, useEffect } from "react";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const Page = () => {
  const router = useRouter();
  const session = useSession();
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/cart/get-cart/${session?.data?.user?.email}`
        );
        setCarts(response?.data);
      } catch (err) {
        console.log(err?.message);
      }
    };
    if (session?.data?.user?.email) {
      fetchData();
    }
    return;
  }, [session?.data?.user?.email, carts]);

  //Delete single cart
  const handleDeleteCart = async (id) => {
    try {
      const res = await axios.delete(`/cart/delete-cart/api/${id}`);
      toast.success(res?.data?.message);
    } catch (err) {
      toast.error(err?.message);
    }
  };

  //Delete all cart items
  const handleDeleteAll = async (email) => {
    try {
      const res = await axios.delete(`/cart/get-cart/${email}`);
      toast.success(res?.data?.message);
    } catch (err) {
      toast.error(err?.message);
    }
  };

  //back to shopping functionality
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="container mx-auto">
      <div className="relative  h-72">
        <Image
          className="absolute h-72 w-full  lg:w-[90vw] left-0 top-0 object-cover"
          src={"/assets/images/about_us/parts.jpg"}
          alt="service"
          width={1920}
          height={1080}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center  items-center ml-8">
            My Carts
          </h1>
        </div>
      </div>

      {carts?.map((cart) => (
        <div
          key={cart?._id}
          className="lg:flex justify-between  items-center mt-6 px-2 shadow-md pb-2 lg:pb-0"
        >
          <div className="flex items-center space-x-6">
            <button
              onClick={() => handleDeleteCart(cart?._id)}
              className=" bg-[#444444]  text-white font-bold  btn-circle"
            >
              X
            </button>
            <Image
              src={cart?.img}
              alt="image"
              width={150}
              height={150}
              className="rounded"
            />
            <div>
              <h4 className="text-xl font-bold">{cart?.title}</h4>
              <h6 className="text-gray-500">Color: Green</h6>
              <h6 className="text-gray-500">Size: S</h6>
            </div>
          </div>
          <h6 className="font-bold">${cart?.price}</h6>
          <h6 className="font-bold">22-10-2022</h6>
          <button className="bg-rose-500 px-3 text-white font-semibold py-2 rounded-lg  ">
            Checkout
          </button>
        </div>
      ))}

      <div className="flex justify-between mx-2 items-center mt-5">
        <button
          onClick={handleBack}
          className="flex items-center lg:space-x-3 hover:underline"
        >
          <h3>
            <HiArrowUturnLeft />
          </h3>
          <h3>Continue Shopping</h3>
        </button>
        <button
          onClick={() => handleDeleteAll(session?.data?.user?.email)}
          className="flex btn items-center lg:space-x-3 hover:bg-red-500 hover:text-white"
        >
          <h3>
            <RiDeleteBin6Line />
          </h3>
          <h3>Clear Shopping Cart</h3>
        </button>
      </div>
    </div>
  );
};

export default Page;
