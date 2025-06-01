import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ecommerce-backend-xz8d.onrender.com/api',
});

export default api; 