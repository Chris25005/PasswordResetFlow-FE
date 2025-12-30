import axios from "axios";

const BASE_URL = "https://recipe-sharing-platform-be-1.onrender.com";

export const registerUser = (data) =>
  axios.post(`${BASE_URL}/auth/register`, data);

export const loginUser = (data) =>
  axios.post(`${BASE_URL}/auth/login`, data);

export const forgotPassword = (email) =>
  axios.post(`${BASE_URL}/auth/forgot-password`, { email });

export const resetPassword = (token, password) =>
  axios.post(`${BASE_URL}/auth/reset-password/${token}`, { password });
