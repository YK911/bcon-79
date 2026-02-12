import { BASE_URL } from "./config";
import "../common.css";

const apiKey = import.meta.env.VITE_CAT_APIKEY;
// console.log("🚀 ~ apiKey:", apiKey);

/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string
 * - у хедерах
 *
 * Для прикладу використовуємо https://thecatapi.com/
 */

// const requerstUrl = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_l04vokWs8d2RAPJS5bi3tkFB1jk75SXGVi8XKPG0BFZf5RWuSRjlK9YnvK3pgUEF"

const endPoints = {
  search: "/images/search",
  breads: "breeds",
};

const requerstUrl = `${BASE_URL}${endPoints.search}`;

const urlParams = new URLSearchParams({
  limit: 10,
  breed_ids: "beng",
});

const headers = new Headers({
  "x-api-key": apiKey,
});

headers.append("Content-Type", "application/json");

const options = {
  method: "GET",
  headers,
  urlParams,
};

fetch(requerstUrl, options);
