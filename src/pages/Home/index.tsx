import { FormEvent, useCallback, useMemo, useState } from 'react'
import Loading from 'react-loading'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { PlaceCard } from '../../components/PlaceCard'
import { UpdatePlaceModal } from '../../components/UpdatePlaceModal'

import { useCountries } from '../../contexts/CountriesContext'
import { Place, usePlaces } from '../../contexts/PlacesContext'

import {
	Container,
	SearchArea,
	SearchAreaContent,
	CountriesSelect,
	CountryInputLabel,
	PlaceInputLabel,
	GoalInputLabel,
	PlaceCardsContainer,
	LoadingContainer,
} from './styles'

interface CountrySelectProps {
	value: string
	label: string
}

interface IsUpdatePlaceModalOpenProps {
	opened: boolean
	data: Place
}

export function Home() {
	const countries = useCountries()
	const { places, isLoading, deletePlace, createPlace } = usePlaces()

	const [countrySelected, setCountrySelected] = useState<CountrySelectProps | null>(null)
	const [place, setPlace] = useState('')
	const [goal, setGoal] = useState('')
	const [placeIdDeleting, setPlaceIdDeleting] = useState('')
	const [isSaving, setIsSaving] = useState(false)
	const [isUpdatePlaceModalOpen, setIsUpdatePlaceModalOpen] = useState<IsUpdatePlaceModalOpenProps>({
		opened: false,
		data: {} as Place
	})

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		if (!countrySelected || !place.trim() || !goal.trim()) {
			return
		}

		try {
			setIsSaving(true)

			const country = countries.find(country => country.name === countrySelected.value)

			if (!country) {
				return
			}

			await createPlace({
				name: place,
				goal,
				country
			})

			setPlace('')
			setGoal('')
			setCountrySelected(null)
		} finally {
			setIsSaving(false)
		}
	}

	function handleCloseModal() {
		setIsUpdatePlaceModalOpen({
			opened: false,
			data: {} as Place
		})
	}

	const handleDeletePlace = useCallback(async (id: string) => {
		try {
			setPlaceIdDeleting(id)

			await deletePlace(id)
		} finally {
			setPlaceIdDeleting('')
		}
	}, [deletePlace])

	const handleEditPlace = useCallback((data: Place) => {
		setIsUpdatePlaceModalOpen({
			opened: true,
			data
		})
	}, [])

	const countriesOptions: CountrySelectProps[] = useMemo(() => {
		return countries.map(country => {
			return {
				value: country.name,
				label: country.translations.br
			}
		})
	}, [countries])

	return (
		<>
			<UpdatePlaceModal
				isOpen={isUpdatePlaceModalOpen.opened}
				data={isUpdatePlaceModalOpen.data}
				onRequestClose={handleCloseModal}
			/>

			<Header />

			<Container>
				<SearchArea onSubmit={handleSubmit}>
					<SearchAreaContent>
						<CountryInputLabel
							htmlFor="country"
							label="País"
						>
							<CountriesSelect
								id="country"
								classNamePrefix="react-select"
								isSearchable={false}
								isClearable={true}
								isLoading={countries.length === 0}
								placeholder="Selecione"
								options={countriesOptions}
								value={countrySelected}
								onChange={(data: CountrySelectProps | null) => setCountrySelected(data)}
							/>
						</CountryInputLabel>
						<PlaceInputLabel
							htmlFor="place"
							className="place"
							label="Local"
						>
							<Input
								hasMask={false}
								id="place"
								name="place"
								type="text"
								placeholder="Digite o local que deseja conhecer"
								value={place}
								onChange={(event) => setPlace(event.target.value)}
							/>
						</PlaceInputLabel>
						<GoalInputLabel
							htmlFor="goal"
							label="Meta"
						>
							<Input
								hasMask
								id="goal"
								name="goal"
								placeholder="mês/ano"
								value={goal}
								onChange={(event) => setGoal(event.target.value)}
							/>
						</GoalInputLabel>

						<Button type="submit" isLoading={isSaving}>
							Adicionar
						</Button>
					</SearchAreaContent>
				</SearchArea>

				{isLoading ? (
					<LoadingContainer>
						<Loading
							type="bubbles"
							color="var(--green-500)"
							height={60}
							width={60}
						/>
					</LoadingContainer>
				) : (
					<PlaceCardsContainer>
						{places.map(place => {
							return (
								<PlaceCard
									key={place.id}
									place={place}
									isDeleting={placeIdDeleting === place.id}
									onDelete={() => handleDeletePlace(place.id)}
									onUpdate={() => handleEditPlace(place)}
								/>
							)
						})}
					</PlaceCardsContainer>
				)}
			</Container>
		</>
	)
}