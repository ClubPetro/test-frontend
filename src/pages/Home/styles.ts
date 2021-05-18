import styled from 'styled-components'
import Select from 'react-select'
import { shade } from 'polished'

import { InputLabel } from '../../components/InputLabel'

export const Container = styled.main``

export const SearchArea = styled.form`
	background: var(--green-500);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3rem 0;

	@media (min-width: 720px) {
		padding: 0;
		height: 12.688rem;
	}
`

export const SearchAreaContent = styled.div`
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 1rem;

	display: flex;
	flex-direction: column;
	justify-content: center;

	> div {
		width: 100%;
	}

	@media (min-width: 720px) {
		flex-direction: row;
		align-items: center;
	}
`

export const CountryInputLabel = styled(InputLabel)`
	@media (min-width: 1180px) {
		width: 18.938rem;	
	}
`

export const PlaceInputLabel = styled(InputLabel)`
	@media (min-width: 1180px) {
		width: 28.438rem;
	}
`

export const GoalInputLabel = styled(InputLabel)`
	@media (min-width: 1180px) {
		width: 14.875rem;
	}
`

export const CountriesSelect = styled(Select)`
	
	.react-select__control {
		border: 0;
		border-radius: 7px;
		background: var(--white);
		cursor: pointer;
		padding: 0 1rem;
		height: 3rem;
		
		font-weight: 400;

		&:hover {
			.react-select__dropdown-indicator {
				svg {
					color: var(--black);
				}
			}
		}
	}

	.react-select__control--is-focused {
		background: var(--white);
		box-shadow: none;
	}

	.react-select__indicator-separator {
		display: none;
	}
	
	.react-select__dropdown-indicator {
		svg {
			height: 18px;
			width: 18px;
			color: var(--gray-750);

			transition: color 0.2s;
		}
	}

	.react-select__placeholder {
		color: var(--gray-550);
	}

	.react-select__single-value {
		color: var(--black);
	}

	.react-select__menu {
		background-color: var(--white);
		color: var(--black);
		font-weight: 400;
		padding: 0.3rem 0;
	}

	.react-select__option {
		cursor: pointer;
		padding: 1rem 2rem;
	}

	.react-select__option--is-focused {
		background-color: ${shade(0.1, '#fff')};
	}

	.react-select__option--is-selected {
		background-color: ${shade(0.1, '#fff')};
		color: var(--black);
	}

	@media (min-width: 720px) {
		.react-select__option {
			padding: 0.6rem 2rem;
		}
	}
`

export const PlaceCardsContainer = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding: 3.313rem 1rem;

	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 1.875rem;

	@media (min-width: 720px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (min-width: 1080px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	@media (min-width: 1400px) {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}
`

export const LoadingContainer = styled.div`
	height: 30rem;
	max-width: 1440px;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: center;
`