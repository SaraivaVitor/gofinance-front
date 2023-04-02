import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Access-Control-Allow-Origin': true,
    'Content-Type': 'application/json',
    credentials: 'same-origin',
  },
  withCredentials: true,
});

export default api;
