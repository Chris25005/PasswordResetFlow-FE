import axios from "axios";

const API = axios.create({
  baseURL: "https://passwordresetflow-be-2mll.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = (data) =>
  API.post("/auth/register", data);

export const loginUser = (data) =>
  API.post("/auth/login", data);

export const forgotPassword = (email) =>
  API.post("/auth/forgot-password", { email });

export const resetPassword = (token, password) =>
  API.post(`/auth/reset-password/${token}`, { password });
