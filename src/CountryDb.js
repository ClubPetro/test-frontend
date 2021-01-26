const API_BASE = 'https://restcountries.eu/rest/v2/all';
const Country = async () => {
    const response = await fetch(`${API_BASE}`);
    const result = await response.json();
    return result;  
}

export default Country;