import { MdEdit, MdClose } from 'react-icons/md'
import Loading from 'react-loading'

import { Place } from '../../contexts/PlacesContext'

import { Container, ButtonsController } from './styles'

interface PlaceCardProps {
	place: Place
	isDeleting: boolean
	onDelete?: () => void
	onUpdate?: () => void
}

export function PlaceCard({ place, isDeleting, onDelete, onUpdate }: PlaceCardProps) {

	return (
		<Container>
			<header>
				<div>
					<img src={place.country.flag} alt={place.country.name} />

					<ButtonsController>
						<button
							type="button"
							title="Editar"
							onClick={() => onUpdate && onUpdate()}
						>
							<MdEdit />
						</button>

						<button
							type="button"
							title="Excluir"
							onClick={() => onDelete && onDelete()}
						>
							{isDeleting ? (
								<Loading type="spinningBubbles" color="var(--gray-550)" height={24} width={24} />
							) : (
								<MdClose />
							)}
						</button>
					</ButtonsController>
				</div>

				<h3>{place.country.translations.br}</h3>
			</header>

			<div>
				<p>Local: {place.name}</p>
				<p>Meta: {place.goal}</p>
			</div>
		</Container>
	)
}