import { LabelHTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	label: string
	children: ReactNode
}

export function InputLabel({ children, label, ...rest }: InputLabelProps) {

	return (
		<Container>
			<label {...rest}>{label}</label>

			{children}
		</Container>
	)
}