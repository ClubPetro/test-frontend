import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const countriesApi = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/",
});
