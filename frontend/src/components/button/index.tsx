import React from 'react';
import ButtonWrapper from './styles';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    theme: 'primary' | 'secondary';
}

const Button = ({ children, type, theme }: ButtonProps): React.ReactElement => {
    return (
        <ButtonWrapper type={type} theme={theme}>
            {children}
        </ButtonWrapper>
    );
};

Button.defaultProps = {
    type: 'button',
};

export default Button;
