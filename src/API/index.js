import axios from 'axios';
import store from '../Store';
// eslint-disable-next-line import/no-cycle
import { refreshUserToken } from './UserApi';

const requestInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default requestInstance;

requestInstance.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${store.getState().userStorage.accessToken}`;
  return config;
}, (error) => Promise.reject(error));

requestInstance.interceptors.response.use(async (response) => response,
  async (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      try {
        const refreshTokenResult = await refreshUserToken();
        if (!refreshTokenResult) {
          return Promise.reject(error);
        }
        const originalRequest = error.config;
        return requestInstance.request(originalRequest);
      } catch (e) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  });
