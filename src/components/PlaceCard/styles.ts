import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
	width: 100%;
	height: 18rem;
	padding: 1.625rem 0.875rem;
	background: var(--white);
	border-radius: 10px;
	box-shadow: 0 3px 4px #ababab;

	header {
		div {
			display: flex;
			justify-content: space-between;
			
			img {
				width: 4.5rem;
			}
		}

		h3 {
			margin-top: 1.5rem;
			font-size: 1.2rem;
			color: var(--green-500);
			text-transform: uppercase;

			padding-bottom: 9px;
			border-bottom: 1px solid var(--gray-400);
		}
	}

	> div {
		margin-top: 2.688rem;
		padding: 0 0.75rem;
		display: flex;
		flex-direction: column;
		justify-content: center;

		p {
			& + p {
				margin-top: 0.688rem;
			}
		}
	}

	@media (min-width: 720px) {
		height: 15.625rem;
		max-width: 15.625rem;

		header {
			div {
				img {
					width: 3.5rem;	
				}
			}

			h3 {
				margin-top: 1rem;
				font-size: 1rem;
			}
		}
	}
`

export const ButtonsController = styled.div`
	
	button {
		background: transparent;
		border: 0;
		color: var(--gray-550);
		transition: color 0.2s;

		&:hover {
			color: ${shade(0.3, '#868686')};
		}

		svg {
			height: 24px;
			width: 24px;
		}

		& + button {
			margin-left: 1rem;
		}
	}
`