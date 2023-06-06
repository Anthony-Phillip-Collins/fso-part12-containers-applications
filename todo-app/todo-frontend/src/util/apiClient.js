import axios from 'axios';
console.log('apiClient', process.env.REACT_APP_BACKEND_URL);
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default apiClient;
