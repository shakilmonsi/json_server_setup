// src/utils/axiosInstance.js
import axios from "axios";
import Cookies from "js-cookie";

// ===========code by shakil munshi=========
// server run comment:
// npx json-server --watch db.json --port 3011
// npm install -g json-server
// ===========code by shakil munshi=========
// ✅ Base URL: Change korlei full project e apply hobe
// ================================================

const BASE_URL = ""; // Client er real API diley eta replace korben

// ===========code by shakil munshi=========
// Create axios instance
// ================================================

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 sec timeout for safety
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// ===========code by shakil munshi=========
// 🔐 Request Interceptor: Add Authorization token from localStorage
// ================================================

instance.interceptors.request.use(
  (config) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      // এখানে token নেওয়ার পদ্ধতি ঠিক করা হয়েছে
      const token = userInfo?.token;

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (e) {
      console.error("Failed to parse userInfo from localStorage:", e);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// ===========code by shakil munshi=========
// 🛠️ CRUD Functions
// 🔍 GET - all or by ID (optional params)
// ===========code by shakil munshi=========

export const getData = async (endpoint, id = null, params = {}) => {
  try {
    const url = id ? `/${endpoint}/${id}` : `/${endpoint}`;
    const response = await instance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(`GET Error [/${endpoint}]:`, error);
    throw error;
  }
};

// ===========code by shakil munshi=========
// ➕ POST - create new record
// ================================================

export const postData = async (endpoint, payload) => {
  try {
    const response = await instance.post(`/${endpoint}`, payload);
    return response.data;
  } catch (error) {
    console.error(`POST Error [/${endpoint}]:`, error);
    throw error;
  }
};

// ===========code by shakil munshi=========
// ✏️ PUT - update by ID
// ================================================

export const updateData = async (endpoint, id, payload) => {
  try {
    const response = await instance.put(`/${endpoint}/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error(`PUT Error [/${endpoint}/${id}]:`, error);
    throw error;
  }
};

// ===========code by shakil munshi=========
// ❌ DELETE - delete by ID
// ================================================

export const deleteData = async (endpoint, id) => {
  try {
    const response = await instance.delete(`/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`DELETE Error [/${endpoint}/${id}]:`, error);
    throw error;
  }
};

// ===========code by shakil munshi=========
// 📦 Export everything for global use
// ================================================

export default instance;
