import { useCallback } from 'react';
import { usePlaces } from '../../hooks/usePlaces';
import { useToast } from '../../hooks/useToast';

import api from '../../services/api';

import * as S from './styles';

interface ConfirmationProps {
  id: number;
  local: string;
  country: string;
  hide(): void;
}

export default function Confirmation(props: ConfirmationProps) {
  const { id, local, country, hide } = props;

  const { places, setPlaces } = usePlaces();
  const { addToast } = useToast();

  const handleRemovePlace = useCallback(async () => {
    await api.delete(`places/${id}`);

    const placeRemoved = places.findIndex(place => place.id === id);

    const newPlaces = places;
    newPlaces.splice(placeRemoved, 1);

    setPlaces([...newPlaces]);
    hide();
    addToast({
      type: 'success',
      title: 'Sucesso',
      description: 'Local removido com sucesso.',
    });
  }, [id, places, setPlaces, hide, addToast]);

  return (
    <S.Container>
      <p>
        Você tem certeza que deseja excluir{' '}
        <b>
          {local} - {country}
        </b>{' '}
        como lugar que quer conhecer?
      </p>
      <div>
        <button type="button" onClick={hide}>
          Cancelar
        </button>
        <button type="button" onClick={handleRemovePlace}>
          Excluir
        </button>
      </div>
    </S.Container>
  );
}
