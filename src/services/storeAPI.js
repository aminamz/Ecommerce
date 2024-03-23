import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const STORE_API = axios.create({ baseURL: BASE_URL });

STORE_API.interceptors.response.use((response) => {
  return response.data;
});

export { STORE_API };
