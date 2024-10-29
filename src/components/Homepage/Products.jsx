import { getProducts } from "@/lib/getServices";
import React from "react";
import ProductCard from "../Card/ProductCard";

const Products = async () => {
  const { products } = await getProducts();
  return (
    <section className="text-slate-800 mt-6">
      <div className="text-center container mx-auto">
        <h3 className="text-2xl font-bold text-[#FF3811]">Popular Products</h3>
        <h2 className="text-4xl">Browse Our Products</h2>
        <p className="text-[#808080]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which dont look even slightly believable.
        </p>
      </div>
      <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <ProductCard product={product} key={product?._id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
