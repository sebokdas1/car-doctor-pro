export const getServices = async () => {
  const services = (
    await fetch("http://localhost:3000/services/api/get-all")
  ).json();
  return services;
};
export const getServiceDetails = async (id) => {
  const service = (
    await fetch(`http://localhost:3000/services/api/${id}`)
  ).json();
  return service;
};
