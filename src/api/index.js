import axios from 'axios';


const API_URL = (window.REACT_APP_API_URL || 'http://localhost:6901') + '/api';
export const DOMAIN = window.REACT_APP_API_URL || 'http://localhost:3000';

console.log(API_URL)

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
