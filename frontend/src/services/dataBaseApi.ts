import axios from 'axios';

const dataBaseApi = axios.create({
    baseURL: 'http://localhost:8000',
});

export default dataBaseApi;
