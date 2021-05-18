import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { Country } from './CountriesContext'

import { api } from "../services/api";

export interface Place {
	id: string
	country: Country
	name: string
	goal: string
}

interface PlacesContextData {
	places: Place[]
	isLoading: boolean
	createPlace: (data: Omit<Place, 'id'>) => Promise<void>
	updatePlace: (data: Place) => Promise<void>
	deletePlace: (id: string) => Promise<void>
}

interface PlacesProviderProps {
	children: ReactNode
}

const PlacesContext = createContext({} as PlacesContextData)

export function PlacesProvider({ children }: PlacesProviderProps) {
	const [places, setPlaces] = useState<Place[]>([])
	const [isLoading, setIsLoading] = useState(true)

	async function createPlace(data: Omit<Place, 'id'>) {
		const response = await api.post<Place>('/places', { ...data })

		setPlaces([...places, response.data])
	}

	async function updatePlace(data: Place) {
		const response = await api.put(`/places/${data.id}`, { ...data })

		const placesUpdated = places.map(place => {
			if (place.id === data.id) {
				return response.data
			}

			return place
		})

		setPlaces(placesUpdated)
	}

	async function deletePlace(id: string) {
		await api.delete(`/places/${id}`)

		const placesUpdated = places.filter(place => place.id !== id)

		setPlaces(placesUpdated)
	}

	useEffect(() => {
		api
			.get('/places')
			.then(response => {
				setPlaces(response.data)
			})
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<PlacesContext.Provider value={{ places, isLoading, createPlace, updatePlace, deletePlace }}>
			{children}
		</PlacesContext.Provider>
	)
}

export const usePlaces = () => useContext(PlacesContext)