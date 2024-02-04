import axios from 'axios';
import { io } from 'socket.io-client';
const apiService = axios.create({
  baseURL: 'http://localhost:12312/api',
});

export default apiService;
export const socket = io("http://localhost:12312");