// src/services/api.js
import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://myclientwebsite.com/interliner/api",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

const API = {
    // Layout
    fetchLayoutData: () => apiClient.get("/get-setting"),

    // Auth / Customer
    createCustomer: (data) => apiClient.post("/create-customer", data),
    loginCustomer: (data) => apiClient.post("/login-customer", data),

    getCategories: (params) => apiClient.get("/categories", { params }),
    getCategoriesById: (id) => apiClient.get(`/categories/${id}`),
    getGroupsById: (id) => apiClient.get(`/groups/${id}`),
};

export default API;
