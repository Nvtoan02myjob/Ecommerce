import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://localhost:7230/api/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
