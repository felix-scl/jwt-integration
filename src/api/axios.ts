import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const REFRESH_TOKEN_URL = "/users/token/refresh/";
const LOGOUT_URL = "/users/logout/";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      const refreshToken = localStorage.getItem("refreshToken");

      try {
        const response = await api.post(REFRESH_TOKEN_URL, {
          refresh: refreshToken,
        });
        const { access, refresh } = response.data;

        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);

        originalRequest.headers.Authorization = `Bearer ${access}`;
        originalRequest._retry = true;

        return api(originalRequest);
      } catch {
        const response = await api.post(LOGOUT_URL, {
          refresh: refreshToken,
        });

        if (response.status === 200) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        }
      }
    }

    return Promise.reject(error);
  },
);

export default api;
