import axios from "axios";

const BASE_URL = "https://recipe-sharing-platform-be-1.onrender.com/"; // ✅ FIXED

export const forgotPassword = (email) => {
  return axios.post(`${BASE_URL}/auth/forgot-password`, { email });
};

export const resetPassword = (token, password) => {
  return axios.post(`${BASE_URL}/auth/reset-password/${token}`, {
    password,
  });
};
