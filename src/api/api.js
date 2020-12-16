import axios from 'axios';

const api = axios.create({
    baseURL: process.env.BACKEND_URL,
    responseType: 'json',
});

export const setAuthToken = (token) => {
    api.defaults.headers.common.Authorization = token;
};

export default api;
