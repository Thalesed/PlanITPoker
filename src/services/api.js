import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}`;
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (req) => {

    return req;
  },

  (error) => Promise.reject(error)
);

export default api;