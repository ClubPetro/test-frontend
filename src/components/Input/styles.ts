import ReactInputMask from "react-input-mask";
import styled, { css } from "styled-components";

const inputStyles = css`
	display: block;
	height: 3rem;
	width: 100%;
	max-width: 100%;
	border-radius: 7px;
	border: 0;
	padding: 0 1.125rem;
	font-size: 1rem;

	&::placeholder {
		color: var(--gray-550);
	}
`

export const Container = styled.input`
	${inputStyles}
`

export const ContainerMask = styled(ReactInputMask)`
	${inputStyles}
`
