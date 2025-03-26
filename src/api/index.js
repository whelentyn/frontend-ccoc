import axios from 'axios';

const API_URL = 'https://dev.ccoc.edicz.com/api/';
export const DOMAIN = 'https://dev.ccoc.edicz.com';

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;