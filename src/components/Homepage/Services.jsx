import React from "react";
import ServiceCard from "../Card/ServiceCard";
import { getServices } from "@/lib/getServices";

const Services = async () => {
  const { services } = await getServices();
  return (
    <section className="text-slate-800 ">
      <div className="text-center container mx-auto">
        <h3 className="text-2xl font-bold text-[#FF3811]">Service</h3>
        <h2 className="text-4xl">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.
        </p>
      </div>
      <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <ServiceCard service={service} key={service._id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
