import axios from 'axios';

const countryApi = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2',
});
// use https://restcountries.eu/rest/v2/all?fields=name;translations;flag
// use https://restcountries.eu/rest/v2/name/brazil?fields=name;translations;flag

export default countryApi;
