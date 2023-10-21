import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Your base URL
});

export const endpoints = {
  notes: '/notes',
  user: '/user',
};
