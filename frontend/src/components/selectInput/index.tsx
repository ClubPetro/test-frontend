import React from 'react';
import Select from './styles';

interface SelectInputProps extends React.HTMLProps<HTMLSelectElement> {
    options: string[];
    textLabel?: string;
    blackLabel?: boolean;
    border?: boolean;
    inputSize: 'medium' | 'large';
}

const SelectInput = ({
    options,
    textLabel,
    border,
    blackLabel,
    inputSize,
    ...props
}: SelectInputProps): React.ReactElement => {
    return (
        <Select border={border} inputSize={inputSize} blackLabel={blackLabel}>
            <label htmlFor={props.id}>
                <h3>{textLabel}</h3>
            </label>
            <select
                onChange={props.onChange}
                value={props.value}
                id={props.id}
                data-testid="select"
            >
                <option value="">Selecione...</option>
                {options.map(item => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
        </Select>
    );
};

SelectInput.defaultProps = {
    textLabel: null,
    border: false,
    blackLabel: false,
};

export default SelectInput;
