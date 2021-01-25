import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';

import { Container } from './styles';

interface IInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    InputProps {
  name: string;
}

const InputMask: React.FC<IInputProps> = ({ name, ...rest }: IInputProps) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <ReactInputMask defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  );
};

export default InputMask;
