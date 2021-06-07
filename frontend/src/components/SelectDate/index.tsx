import grey from "@material-ui/core/colors/grey";
import styled from "styled-components";
import InputMask from "react-input-mask";
import MaterialInput from "@material-ui/core/Input";
import { useDestination } from "hooks/useDestination";

const Container = styled.div``;

const Label = styled.p`
  color: white;
  margin-bottom: 5px;
`;

const TextFieldSC = styled(MaterialInput)`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  height: 50px;
  width: 240px;
  cursor: "pointer";
  text-align: "left";
  padding: 0.5rem;
  border: 1px solid ${grey[300]};
  background-color: white;
  border-radius: 0.25rem;
`;

const Input = (props: any) => (
  <InputMask mask="99/9999" value={props.value} onChange={props.onChange}>
    {(inputProps: any) => (
      <TextFieldSC {...inputProps} disableUnderline placeholder="mês/ano" />
    )}
  </InputMask>
);

export default function SelectDate() {
  const { goal, handleChangeGoal } = useDestination();

  return (
    <Container>
      <Label>Meta</Label>
      <Input value={goal} onChange={handleChangeGoal} />
    </Container>
  );
}
