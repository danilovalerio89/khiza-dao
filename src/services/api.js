import axios from "axios";

const BASE_URL = "https://www.mercadobitcoin.net/api/";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
