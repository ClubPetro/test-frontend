import axios from 'axios'
import { Location, UpdateLocation } from '../../domain/entities/location'

export async function listLocations(): Promise<Location[]> {
  return (await axios.get(`${process.env.REACT_APP_API}/locations`)).data
}

export async function addLocation(location: UpdateLocation): Promise<void> {
  return axios.post(`${process.env.REACT_APP_API}/locations`, location)
}

export async function deleteLocation(id: number): Promise<void> {
  return axios.delete(`${process.env.REACT_APP_API}/locations/${id}`)
}

export async function editLocation(location: Location): Promise<Location> {
  return axios.put(
    `${process.env.REACT_APP_API}/locations/${location.id}`,
    location,
  )
}
