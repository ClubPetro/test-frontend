import React from 'react';
import TextInputWrapper from './styles';

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
    textLabel?: string;
    blackLabel?: boolean;
    inputSize: 'medium' | 'large';
    border?: boolean;
}

const TextInput = ({
    textLabel,
    inputSize,
    blackLabel,
    border,
    ...props
}: TextInputProps): React.ReactElement => {
    return (
        <TextInputWrapper
            inputSize={inputSize}
            border={border}
            blackLabel={blackLabel}
        >
            <label htmlFor={props.id}>
                <h3>{textLabel}</h3>
            </label>
            <input
                type="text"
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </TextInputWrapper>
    );
};

TextInput.defaultProps = {
    textLabel: null,
    border: false,
    blackLabel: false,
};

export default TextInput;
