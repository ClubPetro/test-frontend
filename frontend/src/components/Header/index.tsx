import * as S from "./styles";
import ImgHeader from "assets/Header/Lugares.png";

export default function Header() {
  return (
    <S.Container>
      <img src={ImgHeader} alt="Logo" />
    </S.Container>
  );
}
