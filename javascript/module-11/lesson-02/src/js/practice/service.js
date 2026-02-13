import axios from "axios";

export function fetchBreeds() {
  return axios.get("/breeds").then(({ data }) => data);
}

export function fetchBreedById(breed_ids) {
  return axios
    .get("/images/search", {
      params: { breed_ids },
    })
    .then(({ data }) => data);
}
