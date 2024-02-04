export const baseURL = "http://localhost:12312/api/";
import axios from 'axios';
import { io } from 'socket.io-client';
export const apiService = axios.create({
  baseURL: 'http://localhost:12312/api',
});
let accessToken = localStorage.getItem("Sign")
  const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
};

export const options = {
  headers: headers,
};

