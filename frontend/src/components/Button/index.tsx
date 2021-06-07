import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useDestination } from "hooks/useDestination";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  height: 50px;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
  background-color: var(--darkGreen);
  border-radius: 0.5rem;

  .MuiButton-text {
    color: white;
  }
`;

const ButtonSC = styled(Button)`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  height: 50px;
  width: 200px;
  cursor: "pointer";
  text-align: "left";
  padding: 0.5rem;

  text-decoration-color: white;
`;

export default function ButtonForm() {
  const { CreateDestinie } = useDestination();

  return (
    <Container>
      <ButtonSC onClick={() => CreateDestinie()}>Adicionar</ButtonSC>
    </Container>
  );
}
