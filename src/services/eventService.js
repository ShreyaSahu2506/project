import api from "./api";

export const getEvents = async () => {
  return await api.get("/api/events");
};

export const getEventById = async (id) => {
  return await api.get(`/api/events/${id}`);
};

export const getEventStatus = async (id) => {
  return await api.get(`/api/events/${id}/coordination-status`);
};

export const getEventReadiness = async (id) => {
  return await api.get(`/api/events/${id}/readiness`);
};