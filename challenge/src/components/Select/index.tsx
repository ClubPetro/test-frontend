import { SelectHTMLAttributes } from 'react';
import ReactSelect, { OptionTypeBase, Props } from 'react-select';
import { useField } from 'formik';

import * as S from './styles';

interface SelectProps extends Props<OptionTypeBase> {
  name: string;
  label: string;
}

export default function Select(
  props: SelectProps & SelectHTMLAttributes<HTMLSelectElement>,
) {
  const { id, label, options, ...rest } = props;

  const [field, meta, helpers] = useField({ id, ...rest });

  const { error, touched } = meta;
  const { setValue } = helpers;

  return (
    <S.Wrapper error={!!error && touched}>
      <label htmlFor={id}>{label}</label>
      <ReactSelect
        {...field}
        {...rest}
        inputId={id}
        classNamePrefix="react-select"
        placeholder="Selecione..."
        options={options}
        value={options?.find(option => option.value === field.value)}
        onChange={option => setValue(option?.value)}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: 'black',
          },
        })}
      />
      {error && touched && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Wrapper>
  );
}
