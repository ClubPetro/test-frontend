import * as S from './styles';

import Place from './Place';
import Container from '../Container';

import { usePlaces } from '../../hooks/usePlaces';

export default function PlacesContainer() {
  const { places } = usePlaces();

  return (
    <S.Wrapper>
      <Container>
        {places.map(place => (
          <Place key={place.id} place={place} />
        ))}
      </Container>
    </S.Wrapper>
  );
}
