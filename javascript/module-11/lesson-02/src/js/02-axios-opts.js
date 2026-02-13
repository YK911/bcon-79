import axios from "axios";
import "../common.css";

/**
 * Робимо рефакторинг авторизації запитів з ключами
 *
 * Як у Axios передавати search params та headers
 *
 * Для прикладу використовуємо https://thecatapi.com/
 *
 */

const BASE_URL = "https://api.thecatapi.com/v1/images";
const API_KEY =
  "live_l04vokWs8d2RAPJS5bi3tkFB1jk75SXGVi8XKPG0BFZf5RWuSRjlK9YnvK3pgUEF";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers["x-api-key"] = API_KEY;

// breed_ids=beng&api_key=REPLACE_ME

function searchCatsByBreed(breed = "beng") {
  const options = {
    params: {
      breed_ids: breed,
      // api_key: API_KEY,
    },
    // headers: {
    //   "x-api-key": API_KEY,
    // },
  };

  return axios.get("/search", options).then(({ data }) => {
    return data[0].url;
  });
}

// searchCatsByBreed().then(imagePath => {
//   document.querySelector(".js-wrapper").innerHTML =
//     `<img src="${imagePath}" alt="cat">`;
// });

// searchCatsByBreed("abob").then(imagePath => {
//   document.querySelector(".js-wrapper-2").innerHTML =
//     `<img src="${imagePath}" alt="cat">`;
// });

//TODO: DummyJSON + POST request
const BASE_URL_DUMMY_JSON = "https://dummyjson.com";

const recipeInstanse = axios.create({
  baseURL: BASE_URL_DUMMY_JSON,
  timeout: 1000,
});

const addRecipe = (recipeData = {}) => {
  return recipeInstanse.post("/recipes/add", recipeData).then(response => {
    return response.data;
  });
};

const deleteRecipeById = (id = "10") => {
  return recipeInstanse.delete(`/recipes/${id}`).then(response => {
    return response.data;
  });
};

const recipeToAdd = {
  name: "Scramble Eggs",
  ingredients: [
    "Eggs",
    "Tomato sauce",
    "Fresh mozzarella cheese",
    "Fresh basil leaves",
    "Olive oil",
    "Salt and pepper to taste",
  ],
  instructions: [
    "Preheat the oven to 475°F (245°C).",
    "Roll out the pizza dough and spread tomato sauce evenly.",
    "Top with slices of fresh mozzarella and fresh basil leaves.",
    "Drizzle with olive oil and season with salt and pepper.",
    "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
    "Slice and serve hot.",
  ],
  prepTimeMinutes: 20,
  cookTimeMinutes: 15,
  servings: 4,
  difficulty: "Easy",
  cuisine: "Italian",
  caloriesPerServing: 300,
  tags: ["Eggs", "Breakfast"],
  userId: 45,
  image: "https://cdn.dummyjson.com/recipe-images/1.webp",
  rating: 4.6,
  reviewCount: 3,
  mealType: ["Breakfast"],
};

addRecipe(recipeToAdd).then(response => console.log(response));

deleteRecipeById(5).then(response => {
  console.log(response);
});
