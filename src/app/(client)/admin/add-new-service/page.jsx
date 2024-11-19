"use client";
import Image from "next/image";
import React from "react";

const Page = () => {
  const facility = [
    {
      name: "Instant Car Services",
      details:
        "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
    },
    {
      name: "24/7 Quality Service",
      details:
        "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
    },
    {
      name: "Easy Customer Service",
      details:
        "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
    },
    {
      name: "Quality Cost Service",
      details:
        "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
    },
  ];
  const handleAddProduct = (event) => {
    event.preventDefault();
    const serviceName = event.target.serviceName.value;
    const servicePrice = event.target.servicePrice.value;
    const serviceIImage = event.target.image.value;
    const serviceDescription = event.target.description.value;
    const serviceType = event.target.serviceType.value;

    console.log({
      title: serviceName,
      description: serviceDescription,
      img: serviceIImage,
      price: servicePrice,
      type: serviceType,
      facility: facility,
    });
  };
  return (
    <div className="container mx-auto">
      <div className="relative  h-72">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover"
          src="/assets/images/checkout/checkout.png"
          alt="service"
          width={1920}
          height={1080}
          style={{ width: "90vw" }}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            Add New Service
          </h1>
        </div>
      </div>
      <div className="my-6 lg:my-12 bg-slate-200 p-6 lg:p-12">
        <form onSubmit={handleAddProduct}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <input
                type="text"
                name="serviceName"
                placeholder="Service Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                placeholder="Service Price"
                type="number"
                name="servicePrice"
                className=" input input-bordered"
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                name="serviceType"
                placeholder="Service Type"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="file"
                name="image"
                placeholder="Image"
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <textarea
                placeholder="Product Description"
                rows={12}
                cols={7}
                type="text"
                name="description"
                className="textarea input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
