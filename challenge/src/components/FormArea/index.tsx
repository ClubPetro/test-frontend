import { useCallback, useEffect, useState } from 'react';
import { Formik, Form } from 'formik';

import axios from 'axios';

import schema from './schema';

import Container from '../Container';
import Input from '../Input';
import Select from '../Select';

import * as S from './styles';

interface FormData {
  country: string;
  local: string;
  goal: string;
}

export interface Country {
  translations: {
    br: string;
  };
}

const initialValues: FormData = {
  country: '',
  local: '',
  goal: '',
};

export default function FormArea() {
  const [countries, setCountries] = useState<Country[]>([]);

  const getCountriesData = useCallback(async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');

    setCountries(response.data);
  }, []);

  useEffect(() => {
    getCountriesData();
  }, [getCountriesData]);

  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <S.Wrapper>
      <Container>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={schema}
        >
          {() => (
            <Form>
              <Select
                name="country"
                id="country"
                label="País"
                options={countries.map(country => ({
                  value: country.translations.br,
                  label: country.translations.br,
                }))}
              />
              <Input
                name="local"
                id="local"
                label="Local"
                placeholder="Digite o local que deseja conhecer"
              />
              <Input name="goal" id="goal" label="Meta" placeholder="mês/ano" />
              <button type="submit">Adicionar</button>
            </Form>
          )}
        </Formik>
      </Container>
    </S.Wrapper>
  );
}
