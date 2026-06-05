import api from "./api";

export const getDashboardData = async (eventId) => {
  return await api.get(`/api/dashboard/event/${eventId}`);
};