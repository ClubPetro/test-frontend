import styled from "styled-components";

export const Container = styled.div`
	margin-bottom: 1.5rem;

	display: flex;
	flex-direction: column;

	> label {
		color: var(--white);
		margin-bottom: 3px;
	}

	@media (min-width: 720px) {
		margin-bottom: 0;
		margin-right: 2.125rem;
	}
`