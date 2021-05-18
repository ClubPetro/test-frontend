import styled from 'styled-components'

export const Container = styled.header`
	background: var(--black);
	height: 6.3rem;

	@media (min-width: 720px) {
		height: 5.125rem;	
	}
`

export const Content = styled.div`
	height: 100%;
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 1rem;

	display: flex;
	align-items: center;

	color: var(--white);

	img {
		height: 100%;
	}
`