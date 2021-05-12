import { useCallback } from 'react';
import { Formik } from 'formik';
import { usePlaces } from '../../../../hooks/usePlaces';
import { useToast } from '../../../../hooks/useToast';

import api from '../../../../services/api';
import schema from './schema';

import Input from '../../../Input';

import * as S from './styles';

interface FormData {
  editlocal: string;
  editgoal: string;
}

interface EditPlaceProps {
  id: number;
  local: string;
  goal: string;
  hide(): void;
}

export default function EditPlace(props: EditPlaceProps) {
  const { places, setPlaces } = usePlaces();
  const { addToast } = useToast();

  const { id, local, goal, hide } = props;

  const initialValues: FormData = {
    editlocal: local,
    editgoal: goal,
  };

  const handleSubmit = useCallback(
    async (data: FormData) => {
      const response = await api.patch(`places/${id}`, {
        local: data.editlocal,
        goal: data.editgoal,
      });

      const updatedPlace = places.findIndex(place => place.id === id);

      const newPlaces = places;
      newPlaces.splice(updatedPlace, 1, response.data);

      setPlaces([...newPlaces]);
      hide();
      addToast({
        type: 'success',
        title: 'Sucesso',
        description: 'Local editado com sucesso.',
      });
    },
    [hide, id, places, setPlaces, addToast],
  );

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={schema}
    >
      {() => (
        <S.Container>
          <Input
            name="editlocal"
            id="editlocal"
            label="Local"
            placeholder="Digite o local que deseja conhecer"
          />
          <Input
            name="editgoal"
            id="editgoal"
            label="Meta"
            placeholder="mês/ano"
            isMask
            mask="99/9999"
          />
          <S.Buttons>
            <button type="button" onClick={hide}>
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </S.Buttons>
        </S.Container>
      )}
    </Formik>
  );
}
