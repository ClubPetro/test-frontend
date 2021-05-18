import { darken } from 'polished'
import { createGlobalStyle, keyframes } from 'styled-components'

const modalFadeAnimation = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-5%);
	}

	100% {
		opacity: 1;
		transform: translateY(0%);
	}
`

export default createGlobalStyle`
	:root {
		--background: #fafafa;

		--white: #fff;
		--black: #000;

		--gray-400: #ababab;
		--gray-550: #868686;
		--gray-750: #545454;

		--green-500: #4F9419;
		--green-600: #006C18;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;
		}

		@media (max-width: 720px) {
			font-size: 87.5%;
		}
	}

	body {
		font-size: 1rem;
		background: var(--background);
		-webkit-font-smoothing: antialiased;
	}

	body, input, button {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 700;
	}

	button {
		cursor: pointer;
	}

	.react-modal-overlay {
		background: rgba(0, 0, 0, 0.7);

		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.react-modal-content {
		width: 90%;
		max-width: 576px;
		background: var(--background);
		padding: 3rem 1.5rem;
		position: relative;
		border-radius: 0.25rem;
		outline: none;

		animation: ${modalFadeAnimation} 700ms;
	}

	.react-modal-close {
		position: absolute;
		right: 1.5rem;
		top: 1.5rem;
		background: transparent;
		border: 0;
		color : var(--gray-550);

		transition: color 0.2s;

		&:hover {
			color: ${darken(0.2, '#868686')}
		}

		svg {
			height: 24px;
			width: 24px;
		}
	}
`