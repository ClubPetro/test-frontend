import * as S from './styles';

import Container from '../Container';
import FormArea from '../FormArea';

import logoImg from '../../assets/logo.svg';

export default function Header() {
  return (
    <S.Wrapper>
      <nav>
        <Container>
          <img src={logoImg} alt="Lugares que eu quero conhecer" />
        </Container>
      </nav>
      <FormArea />
    </S.Wrapper>
  );
}
