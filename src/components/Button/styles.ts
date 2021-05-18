import styled from "styled-components";
import { shade } from 'polished'

export const Container = styled.button`
	height: 3rem;
	width: 100%;

	border: 0;
	border-radius: 7px;

	font-size: 1.125rem;
	background: var(--green-600);
	color: var(--white);
	transition: background-color 0.2s;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background: ${shade(0.2, '#006C18')};
	}

	@media (min-width: 720px) {
		align-self: flex-end;
		max-width: 12.688rem;
	}
`