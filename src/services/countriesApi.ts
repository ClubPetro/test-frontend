import axios from "axios";

export const countriesApi = axios.create({
	baseURL: 'https://restcountries.eu/rest/v2'
})