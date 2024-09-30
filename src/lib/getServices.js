import axios from "axios";

export const getServices = async () => {
  try {
    const response = await axios.get(
      `${process.env.DOCTOR_PRO_BASE_URL}/services/api/get-all`
    );
    const services = response.data;
    return services;
  } catch (error) {
    console.error("Error fetching services:", error.message);
    throw error; // Optionally rethrow the error if you want to handle it elsewhere
  }
};

export const getServiceDetails = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.DOCTOR_PRO_BASE_URL}/services/api/${id}`
    );
    const service = response.data;
    return service;
  } catch (error) {
    console.error("Error fetching services:", error.message);
    throw error; // Optionally rethrow the error if you want to handle it elsewhere
  }
};
