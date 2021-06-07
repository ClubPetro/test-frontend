import grey from "@material-ui/core/colors/grey";
import MaterialInput from "@material-ui/core/Input";
import { useDestination } from "hooks/useDestination";
import styled from "styled-components";

const Container = styled.div``;

const Label = styled.p`
  color: white;
  margin-bottom: 5px;
`;

const TextFieldSC = styled(MaterialInput)`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  height: 50px;
  width: 455px;
  cursor: "pointer";
  text-align: "left";
  padding: 0.5rem;
  border: 1px solid ${grey[300]};
  background-color: white;
  border-radius: 0.25rem;
`;

export default function SelectPlace() {
  const { place, handleChangePlace } = useDestination();
  return (
    <Container>
      <Label>Local</Label>
      <TextFieldSC
        placeholder="Digite o local que deseja conhecer"
        onChange={handleChangePlace}
        value={place}
        disableUnderline
      />
    </Container>
  );
}
