import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const STORE_API = axios.create({ baseURL: BASE_URL });

STORE_API.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export { STORE_API };
