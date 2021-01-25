import React from 'react';

import { HiPencil, HiX } from 'react-icons/hi';
import { Container, IconsContainer } from './styles';

interface ICountry {
  id: number;
  name: string;
  local: string;
  meta: string;
  flag: string;
  translation: string;
  // -
}

interface IProps {
  country: ICountry;
  handleDeleteCountry: (id: number) => {};
  handleEditCountry: (country: ICountry) => void;
  openModal: (country: ICountry) => void;
}

const Card: React.FC<IProps> = ({
  country,
  handleDeleteCountry,
  openModal,
  handleEditCountry,
}: IProps) => {
  function setEditingCountry(): void {
    handleEditCountry(country);
    openModal(country);
  }

  return (
    <Container>
      <header>
        <div>
          <img src={country.flag} alt="flag" />
          <h2>{country.translation}</h2>
        </div>
        <IconsContainer>
          <button
            type="button"
            onClick={() => setEditingCountry()}
            data-testid={`edit-food-${country.id}`}
          >
            <HiPencil size={20} />
          </button>

          <button type="button" onClick={() => handleDeleteCountry(country.id)}>
            <HiX size={20} />
          </button>
        </IconsContainer>
      </header>

      <section>
        <div className="body">
          <p>{country.local}</p>
          <p>{country.meta}</p>
        </div>
      </section>
    </Container>
  );
};

export default Card;
