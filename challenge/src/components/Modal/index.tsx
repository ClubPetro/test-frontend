import { useState, useEffect } from "react";

import { Modal, IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import InputMask from "react-input-mask";

import { Container, InputContainer } from "./style";

import { DataProps } from "../CardsList";
import { api } from "../../services/api";

interface ModalProps {
  id: number;
}

const ModalContainer = ({ id }: ModalProps) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<DataProps>({
    country: "",
    goal: "",
    place: "",
    id: 0,
  });

  useEffect(() => {
    api.get(`/places/${id}`).then((res) => setData(res.data));
  }, [id]);

  const editForm = (e: any) => {
    e.preventDefault();

    const { goal, place } = data;

    const editData = {
      goal,
      place,
    };

    api.patch(`/places/${id}`, editData).then((res) => setOpen(false));
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <Edit />
      </IconButton>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container onSubmit={(e) => editForm(e)}>
          <InputContainer>
            <label>Local</label>
            <input
              value={data.place}
              onChange={(e) => setData({ ...data, place: e.target.value })}
            />
          </InputContainer>

          <InputContainer>
            <label>Meta</label>
            <InputMask
              mask="99/9999"
              value={data.goal}
              onChange={(e) => setData({ ...data, goal: e.target.value })}
            />
          </InputContainer>

          <button>Editar</button>
        </Container>
      </Modal>
    </>
  );
};

export default ModalContainer;
