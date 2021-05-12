import { useState } from 'react';
import { FiEdit2, FiX } from 'react-icons/fi';
import { Place as IPlace } from '../../../hooks/usePlaces';

import Modal from '../../Modal';
import Confirmation from '../../Confirmation';
import EditPlace from './EditPlace';

import * as S from './styles';

interface PlaceProps {
  place: IPlace;
}

export default function Place(props: PlaceProps) {
  const { place } = props;

  const [removeModalIsShown, setRemoveModalIsShown] = useState(false);
  const [editModalIsShown, setEditModalIsShown] = useState(false);

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <img src={place.flag} alt={place.country} />
          <strong>{place.country}</strong>
        </S.Header>
        <S.Infos>
          <p>Local: {place.local}</p>
          <p>Meta: {place.goal}</p>
        </S.Infos>
        <S.Buttons>
          <button
            type="button"
            onClick={() => setEditModalIsShown(state => !state)}
          >
            <FiEdit2 size={16} />
          </button>
          <button
            type="button"
            onClick={() => setRemoveModalIsShown(state => !state)}
          >
            <FiX size={20} />
          </button>
        </S.Buttons>
      </S.Wrapper>
      <Modal
        title="Excluir local"
        isShown={removeModalIsShown}
        hide={() => setRemoveModalIsShown(state => !state)}
      >
        <Confirmation
          id={place.id}
          local={place.local}
          country={place.country}
          hide={() => setRemoveModalIsShown(state => !state)}
        />
      </Modal>
      <Modal
        title="Editar local"
        isShown={editModalIsShown}
        hide={() => setEditModalIsShown(state => !state)}
      >
        <EditPlace
          id={place.id}
          local={place.local}
          goal={place.goal}
          hide={() => setEditModalIsShown(state => !state)}
        />
      </Modal>
    </>
  );
}
