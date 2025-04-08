import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatappserver-k9gm.onrender.com/api",

  withCredentials: true,
});