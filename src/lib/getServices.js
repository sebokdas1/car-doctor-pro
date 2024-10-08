import axios from "axios";

//to get all services
export const getServices = async () => {
  try {
    const response = await axios.get(
      `${process.env.DOCTOR_PRO_BASE_URL}/services/api/get-all`
    );
    const services = response.data;
    return services;
  } catch (error) {
    console.error("Error fetching services:", error.message);
    throw error;
  }
};

//to get single service details
export const getServiceDetails = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.DOCTOR_PRO_BASE_URL}/services/api/${id}`
    );
    const service = response.data;
    return service;
  } catch (error) {
    console.error("Error fetching services:", error.message);
    throw error;
  }
};

//to get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(
      `${process.env.DOCTOR_PRO_BASE_URL}/products/api/get-all`
    );
    const products = response.data;
    return products;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
};

//to get carts details
// export const getCarts = async (email) => {
//   try {
//     const response = await axios.get(
//       `${process.env.DOCTOR_PRO_BASE_URL}/cart/get-cart/${email}`
//     );
//     const carts = response.data;
//     return carts;
//   } catch (error) {
//     console.error("Error fetching services:", error.message);
//     throw error;
//   }
// };
