"use client";
import React, { useEffect, useState } from "react";
import ServicesLoadings from "../Loadings/servicesLoadings.jsx";
import ServiceCard from "../Card/ServiceCard";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_DOCTOR_PRO_PRODUCTION_URL}/services/api/get-all`
        );
        setServices(response.data.services);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);
  return (
    <section className="text-slate-800 ">
      <div className="text-center container mx-auto">
        <h3 className="text-2xl font-bold text-[#FF3811]">Service</h3>
        <h2 className="text-4xl">Our Service Area</h2>
        <p className="text-[#808080]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.
        </p>
      </div>
      {loading === true ? (
        <ServicesLoadings />
      ) : (
        <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services?.map((service) => (
            <ServiceCard service={service} key={service?._id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
