import axios from "axios";
import useAuthStore from "../stores/auth";


const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}`;
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    
    const { auth } = useAuthStore.getState();
    
   
    if (!config.headers.Authorization && auth?.accessToken) {
      config.headers.Authorization = `Bearer ${auth.accessToken}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
);

export default api;