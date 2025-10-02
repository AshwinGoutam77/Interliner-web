// src/services/api.js
import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://myclientwebsite.com/interliner/api",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
});

// Optional: Add auth token if needed
apiClient.interceptors.request.use(async (config) => {
    const token = "";
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

const API = {
    // Auth / Customer
    createCustomer: (data) => apiClient.post("/create-customer", data)
};

export default API;

