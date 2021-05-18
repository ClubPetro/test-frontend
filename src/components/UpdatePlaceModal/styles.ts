import styled from "styled-components";

export const Container = styled.form`
	> div {
		display: flex;
		align-items: center;

		img {
			width: 100%;
			max-width: 60px;
		}

		h3 {
			text-transform: uppercase;
			color: var(--green-500);
			margin-left: 1rem;
		}
	}

	main {
		margin: 2rem 0 1.5rem;
		display: flex;
		flex-direction: column;

		div {
			width: 100%;

			label {
				color: var(--black);
			}	

			input {
				border: 1px solid var(--black);
			}
		}
	}

	@media (min-width: 720px) {

		main {
			flex-direction: row;

			div {

				&:first-child {
					width: 100%;
				}
				&:last-child {
					width: 100%;
					max-width: 8rem;
				}
			}
		}
	}
`