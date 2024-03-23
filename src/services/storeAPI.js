import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

const STORE_API = axios.create({ baseURL: BASE_URL });

export { STORE_API };
