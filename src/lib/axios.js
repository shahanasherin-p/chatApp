import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatappserver-k9gm.onrender.com/api" : "/api",
  withCredentials: true,
});