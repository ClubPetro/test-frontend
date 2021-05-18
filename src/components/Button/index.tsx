import { ButtonHTMLAttributes } from 'react'
import Loading from 'react-loading'

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
}

export function Button({ children, isLoading = false, ...rest }: ButtonProps) {

	return (
		<Container
			{...rest}
		>
			{
				isLoading
					? <Loading type="spinningBubbles" height={20} width={20} color="var(--white)" />
					: children
			}
		</Container>
	)
}