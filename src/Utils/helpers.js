// src/services/apiService.js
import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:12312/api',
});

export default apiService;
