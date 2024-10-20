"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const session = useSession();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/my-bookings/api/${session?.data?.user?.email}`
        );
        setBookings(response?.data?.bookings);
      } catch (err) {
        console.log(err?.message);
      }
    };

    fetchData();
  }, [session?.data?.user?.email, bookings]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/my-bookings/api/booking/${id}`);

      if (res.status === 200) {
        toast.success(res?.data?.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="relative  h-72">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover"
          src={"/assets/images/about_us/parts.jpg"}
          alt="service"
          width={1920}
          height={1080}
          style={{ width: "90vw" }}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            My Bookings
          </h1>
        </div>
      </div>
      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings?.map((booking, index) => (
                <tr key={booking?._id}>
                  <th>{index + 1}</th>
                  <td>{booking?.serviceTitle}</td>
                  <td>{booking?.price}</td>
                  <td>{booking?.date}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <Link
                        href={`/my-bookings/update-booking/${booking?._id}`}
                      >
                        <button className="btn btn-primary">Edit</button>
                      </Link>
                      <button
                        onClick={() => handleDelete(booking?._id)}
                        className="btn btn-error"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
