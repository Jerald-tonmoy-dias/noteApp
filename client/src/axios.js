import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Your base URL
});

export const endpoints = {
  notes: '/notes',
  login: '/login',
  signup: '/signup',
  logout: '/logout',
  check_auth: '/check-auth',
};
