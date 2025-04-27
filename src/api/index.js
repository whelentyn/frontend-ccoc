import axios from 'axios';

const API_URL = (process.env.REACT_APP_API_URL || 'http://localhost:6901') + '/api';
export const DOMAIN = process.env.REACT_APP_API_URL || 'http://localhost:3000';

console.log(API_URL)

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
