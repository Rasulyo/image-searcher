import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default apiClient
