import axios from "axios";

const API = axios.create({
  baseURL: "https://recipe-sharing-platform-be-1.onrender.com",
  withCredentials: true
});

export const registerUser = (data) =>
  API.post("/auth/register", data);

export const loginUser = (data) =>
  API.post("/auth/login", data);

export const forgotPassword = (email) =>
  API.post("/auth/forgot-password", { email });

export const resetPassword = (token, password) =>
  API.post(`/auth/reset-password/${token}`, { password });


