import { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  isMask?: boolean;
  mask?: string;
}

export default function Input(props: InputProps & InputMaskProps) {
  const { id, label, isMask, ...rest } = props;

  const [input, { error, touched }] = useField({ id, ...rest });

  return (
    <S.Wrapper error={!!error && touched}>
      <label htmlFor={id}>{label}</label>
      {isMask && <InputMask type="text" id={id} {...input} {...rest} />}
      {isMask || <input type="text" id={id} {...input} {...rest} />}
      {error && touched && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Wrapper>
  );
}

Input.defaultProps = {
  isMask: false,
  mask: '',
};
