import Axios from 'axios';

export const API = Axios.create({
  baseURL: process.env.API_URL,
  validateStatus: (status: number) => status <= 302,
});
