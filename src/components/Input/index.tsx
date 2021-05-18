import { InputHTMLAttributes } from 'react'

import { Container, ContainerMask } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	hasMask?: boolean
}

export function Input({ hasMask = false, ...rest }: InputProps) {

	if (hasMask) {
		return (
			<ContainerMask
				mask="99/9999"
				{...rest}
			/>
		)
	} else {
		return (
			<Container
				{...rest}
			/>
		)
	}
}