export const getServices = async () => {
  const services = (
    await fetch(`${process.env.DOCTOR_PRO_BASE_URL}/services/api/get-all`)
  ).json();
  return services;
};
export const getServiceDetails = async (id) => {
  const service = (
    await fetch(`${process.env.DOCTOR_PRO_BASE_URL}/services/api/${id}`)
  ).json();
  return service;
};
