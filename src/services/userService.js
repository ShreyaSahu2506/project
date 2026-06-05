import api from "./api";

export const getUser = async (id) => {
  return await api.get(`/api/users/${id}`);
};

export const getOrganizations = async () => {
  return await api.get("/api/organizations");
};