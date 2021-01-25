/* eslint-disable @typescript-eslint/no-explicit-any */
import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';

import { Container } from './styles';

interface IInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    InputProps {
  name: string;
  width?: 'small' | 'large';
}

const InputMask2: React.FC<IInputProps> = ({
  name,
  width,
  ...rest
}: IInputProps) => {
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
    <Container width={width}>
      <ReactInputMask defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  );
};

export default InputMask2;
