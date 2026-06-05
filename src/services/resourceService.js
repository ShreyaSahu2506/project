import api from "./api";

export const getResources = async () => {
  return await api.get("/api/resources");
};