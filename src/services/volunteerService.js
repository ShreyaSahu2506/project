import api from "./api";

export const getVolunteers = async () => {
  return await api.get("/api/volunteers");
};