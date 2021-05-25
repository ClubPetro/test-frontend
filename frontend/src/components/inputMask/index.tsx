import React from 'react';
import InputMask from 'react-input-mask';
import Wrapper from './styles';

interface InputMaskProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    id: string;
    placeholder: string;
    border?: boolean;
    blackLabel?: boolean;
    textLabel?: string;
    inputSize: 'medium' | 'large';
}

const InputMaskComponent = ({
    onChange,
    value,
    id,
    border,
    blackLabel,
    inputSize,
    textLabel,
    placeholder,
}: InputMaskProps): React.ReactElement => {
    return (
        <Wrapper
            border={border}
            inputSize={inputSize}
            data-testid={id}
            blackLabel={blackLabel}
        >
            {textLabel ? (
                <label htmlFor={id}>
                    <h3>{textLabel}</h3>
                </label>
            ) : null}
            <InputMask
                mask="99/9999"
                onChange={onChange}
                value={value}
                id={id}
                placeholder={placeholder}
            />
        </Wrapper>
    );
};

InputMaskComponent.defaultProps = {
    border: false,
    textLabel: '',
    blackLabel: false,
};

export default InputMaskComponent;
