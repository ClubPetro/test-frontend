import { Container } from "./style";

import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="Lugares que eu quero conhecer" />
    </Container>
  );
};

export default Header;
