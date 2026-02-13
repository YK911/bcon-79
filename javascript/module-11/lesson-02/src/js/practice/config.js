import axios from "axios";

const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY =
  "live_l04vokWs8d2RAPJS5bi3tkFB1jk75SXGVi8XKPG0BFZf5RWuSRjlK9YnvK3pgUEF";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers["x-api-key"] = API_KEY;
