import Modal from "react-modal";
import * as S from "./styles";
import CloseButtonImg from "assets/close/close.svg";
import { FormEvent, useEffect, useState } from "react";
import { useDestination } from "hooks/useDestination";
import InputMask from "react-input-mask";

Modal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const Input = (props: any) => (
  <InputMask mask="99/9999" value={props.value} onChange={props.onChange}>
    {(inputProps: any) => <input {...inputProps} placeholder="mês/ano" />}
  </InputMask>
);

export function EditDestinationModal({ isOpen, onRequestClose }: ModalProps) {
  const [place, setPlace] = useState<string>("");

  const [goal, setGoal] = useState<string>("");

  const { EditDestinie } = useDestination();
  const handleChangeGoal = (event: React.ChangeEvent<{ value: string }>) => {
    setGoal(event.target.value);
  };
  const handleChangePlace = (event: React.ChangeEvent<{ value: string }>) => {
    setPlace(event.target.value);
  };
  const handleEditDestination = async (event: FormEvent) => {
    event.preventDefault();

    EditDestinie({ goal, place });
    setGoal("");
    setPlace("");

    onRequestClose();
  };

  useEffect(() => {
    console.log("Goal: ", goal);
  }, [goal]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button>
        <img
          src={CloseButtonImg}
          alt="CloseButton"
          className="close-button-modal"
          onClick={onRequestClose}
        />
      </button>

      <S.Container onSubmit={handleEditDestination}>
        <h2>Editar destino</h2>
        <input
          type="text"
          placeholder="Local"
          value={place}
          onChange={handleChangePlace}
        />

        <Input value={goal} onChange={handleChangeGoal} />

        <button type="submit">Editar</button>
      </S.Container>
    </Modal>
  );
}
