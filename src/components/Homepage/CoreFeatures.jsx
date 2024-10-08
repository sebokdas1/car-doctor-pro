import Image from "next/image";
import React from "react";

const CoreFeatures = () => {
  return (
    <section className="text-slate-800 mt-10">
      <div className="text-center container mx-auto">
        <h3 className="text-2xl font-bold text-[#FF3811]">Core Features</h3>
        <h2 className="text-5xl">Why Choose Us</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which dont look even slightly believable.
        </p>
      </div>
      <div className="container mx-auto mt-12 grid grid-cols-3 lg:grid-cols-6 gap-2">
        <div className="card bg-base-100 w-45  shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src={"/assets/icons/group.svg"}
              height={53.18}
              width={75.63}
              alt="Expert Team"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Expert Team</h2>
          </div>
        </div>
        <div className="card  w-45 bg-[#FF3811] shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src={"/assets/icons/Group 38729.svg"}
              height={53.18}
              width={75.63}
              alt="Timely Delivery"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">Timely Delivery</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-45  shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src={"/assets/icons/person.svg"}
              height={53.18}
              width={75.63}
              alt="24/7 Support"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">24/7 Support</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-45  shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src={"/assets/icons/wrench.svg"}
              height={53.18}
              width={75.63}
              alt="Best Equipment"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Best Equipment</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-45  shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src={"/assets/icons/check.svg"}
              height={53.18}
              width={75.63}
              alt="100% Guranty"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">100% Guranty</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-45  shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src={"/assets/icons/deliveryt.svg"}
              height={53.18}
              width={75.63}
              alt="Timely Delivery"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Timely Delivery</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
