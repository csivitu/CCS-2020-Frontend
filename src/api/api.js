import axios from 'axios';

const api = axios.create({
    baseURL: process.env.BACKEND_URL,
    responseType: JSON,
});

export default api;
