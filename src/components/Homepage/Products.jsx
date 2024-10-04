import React from "react";

const Products = () => {
  return (
    <div className="text-slate-800 mt-6">
      <div className="text-center container mx-auto">
        <h3 className="text-2xl font-bold text-[#FF3811]">Popular Products</h3>
        <h2 className="text-5xl">Browse Our Products</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which dont look even slightly believable.
        </p>
      </div>
      {/* <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <ServiceCard service={service} key={service._id} />
        ))}
      </div> */}
    </div>
  );
};

export default Products;
