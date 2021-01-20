import axios from 'axios'
import { Country } from '../../domain/entities/country'

export async function listCountries(): Promise<Country[]> {
  return (await axios.get('https://restcountries.eu/rest/v2/all')).data
}
