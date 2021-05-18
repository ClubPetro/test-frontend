import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { countriesApi } from "../services/countriesApi";

export interface Country {
	numericCode: string
	name: string
	translations: {
		"br": string
	}
	flag: string
}

interface CountriesProviderProps {
	children: ReactNode
}

const CountriesContext = createContext<Country[]>([])

export function CountriesProvider({ children }: CountriesProviderProps) {
	const [countries, setCountries] = useState<Country[]>(() => {
		const countriesStoraged = localStorage.getItem('@FrontendChallenge.countries')

		if (countriesStoraged) {
			return JSON.parse(countriesStoraged)
		}

		return []
	})

	useEffect(() => {
		countriesApi.get<Country[]>('/all').then(response => {
			setCountries(response.data)

			localStorage.setItem('@FrontendChallenge.countries', JSON.stringify(response.data))
		})
	}, [])

	return (
		<CountriesContext.Provider value={countries}>
			{children}
		</CountriesContext.Provider>
	)
}

export const useCountries = () => useContext(CountriesContext)