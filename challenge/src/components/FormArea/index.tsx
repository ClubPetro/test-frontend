import { useCallback, useEffect, useState } from 'react';
import { Formik, Form } from 'formik';

import axios from 'axios';

import { usePlaces } from '../../hooks/usePlaces';
import { useToast } from '../../hooks/useToast';

import api from '../../services/api';
import schema from './schema';

import Container from '../Container';
import Select from '../Select';
import Input from '../Input';

import * as S from './styles';

interface FormData {
  country: string;
  local: string;
  goal: string;
}

export interface Country {
  flag: string;
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
  const { setPlaces, places } = usePlaces();
  const { addToast } = useToast();

  const [countries, setCountries] = useState<Country[]>([]);

  const getCountriesData = useCallback(async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');

    setCountries(response.data);
  }, []);

  useEffect(() => {
    getCountriesData();
  }, [getCountriesData]);

  const handleSubmit = useCallback(
    async (data, { resetForm }) => {
      try {
        const { country: nameOfTheCountry } = data;

        const countryFinded = countries.find(
          country => country.translations.br === nameOfTheCountry,
        );

        const response = await api.post('places', {
          ...data,
          flag: countryFinded?.flag,
        });

        resetForm(initialValues);
        setPlaces([...places, response.data]);
        addToast({
          type: 'success',
          title: 'Sucesso',
          description: 'Local adicionado com sucesso.',
        });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro',
          description:
            'Ocorreu um erro ao tentar adicionar um novo local, tente novamente.',
        });
      }
    },
    [countries, setPlaces, places, addToast],
  );

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
              <Input
                name="goal"
                id="goal"
                label="Meta"
                placeholder="mês/ano"
                isMask
                mask="99/9999"
              />
              <button type="submit">Adicionar</button>
            </Form>
          )}
        </Formik>
      </Container>
    </S.Wrapper>
  );
}
