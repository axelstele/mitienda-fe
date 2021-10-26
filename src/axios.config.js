/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import ACCESS_TOKEN from 'utils/constants/session-storage';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api',
});

instance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem(ACCESS_TOKEN);
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  // eslint-disable-next-line consistent-return
  (error) => Promise.reject(error),
);

// Response interceptor for API calls
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { data: { accessToken } } = await axios.post('http://localhost:8000/api/refresh', null, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem(ACCESS_TOKEN)}`,
        },
      });
      sessionStorage.setItem(ACCESS_TOKEN, `Bearer ${accessToken}`);
      return instance(originalRequest);
    }
    return Promise.reject(error);
  },
);

export default instance;
