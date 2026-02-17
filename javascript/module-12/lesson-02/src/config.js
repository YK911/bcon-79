import axios from "axios";

axios.defaults.baseURL = "https://663bb44bfee6744a6ea2a652.mockapi.io/api/";

const { data: allContacts } = await axios.get("/contacts");

export const PER_PAGE = 4;
export const TOTAL_PAGES = Math.ceil(allContacts.length / PER_PAGE);
