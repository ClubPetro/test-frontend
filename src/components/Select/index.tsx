import React, { SelectHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
}

const Select: React.FC<ISelectProps> = ({ name, ...rest }: ISelectProps) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      <select defaultValue={defaultValue} ref={selectRef} {...rest} />
    </Container>
  );
};

export default Select;
