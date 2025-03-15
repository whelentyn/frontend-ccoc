import axios from 'axios';

const API_URL = 'https://ccoc.edicz.com/api/';

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;