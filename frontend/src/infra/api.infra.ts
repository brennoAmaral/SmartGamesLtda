import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.29:3000/api/', // Substitua pela sua URL base
});

export default axiosInstance;