import { FormEvent, useEffect, useState } from 'react'
import Modal from 'react-modal'
import { MdClose } from 'react-icons/md'

import { Input } from '../Input'
import { InputLabel } from '../InputLabel'
import { Button } from '../Button'

import { Place, usePlaces } from '../../contexts/PlacesContext'

import { Container } from './styles'

interface UpdatePlaceModalProps {
	isOpen: boolean
	data: Place
	onRequestClose: () => void
}

export function UpdatePlaceModal({ isOpen, data, onRequestClose }: UpdatePlaceModalProps) {
	const [place, setPlace] = useState('')
	const [goal, setGoal] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const { updatePlace } = usePlaces()

	async function handleSave(event: FormEvent) {
		event.preventDefault()

		if (!place.trim() || !goal.trim()) {
			return
		}

		try {
			setIsLoading(true)

			await updatePlace({
				id: data.id,
				country: data.country,
				goal,
				name: place
			})

			onRequestClose()
		} finally {
			setIsLoading(false)
		}

	}

	useEffect(() => {
		setPlace(data.name)
		setGoal(data.goal)
	}, [data])

	return (
		<Modal
			ariaHideApp={false}
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button type="button" className="react-modal-close" onClick={onRequestClose}>
				<MdClose />
			</button>

			<Container onSubmit={handleSave}>
				<div>
					<img src={data.country?.flag} alt={data.country?.name} />

					<h3>{data.country?.translations.br}</h3>
				</div>

				<main>
					<InputLabel
						htmlFor="update-place"
						label="Local"
					>
						<Input
							id="update-place"
							type="text"
							placeholder="Digite o local que deseja conhecer"
							defaultValue={data.name}
							value={place}
							onChange={(event) => setPlace(event.target.value)}
						/>
					</InputLabel>

					<InputLabel
						htmlFor="update-goal"
						label="Meta"
					>
						<Input
							hasMask
							id="update-goal"
							type="text"
							placeholder="mês/ano"
							defaultValue={data.goal}
							value={goal}
							onChange={(event) => setGoal(event.target.value)}
						/>
					</InputLabel>
				</main>

				<Button
					type="submit"
					isLoading={isLoading}
				>
					Salvar
				</Button>
			</Container>
		</Modal>
	)
}