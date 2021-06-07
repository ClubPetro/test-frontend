import * as S from "./styles";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import { useDestination } from "hooks/useDestination";

import IconButton from "@material-ui/core/IconButton";

interface Props {
  identify: number;
  onOpenModalEditDestination: () => void;
  destinie: {
    flag: string;
    country: string;
    goal: string;
    place: string;
  };
}

export default function Card({
  onOpenModalEditDestination,
  destinie,
  identify,
}: Props) {
  const { SetIdToEdit, DeleteDestinie } = useDestination();
  return (
    <S.Container>
      <S.Presentation>
        <S.Row>
          <S.Flag src={destinie.flag} alt="country" />
          <S.ContainerIcons>
            <IconButton
              color="primary"
              size="small"
              onClick={() => {
                SetIdToEdit(identify);
                onOpenModalEditDestination();
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="primary"
              size="small"
              onClick={() => {
                const load = async () => {
                  DeleteDestinie(Number(identify));
                };

                load();
              }}
            >
              <CloseIcon />
            </IconButton>
          </S.ContainerIcons>
        </S.Row>
        <S.Row>
          <S.Text>{destinie.country.toUpperCase()}</S.Text>
        </S.Row>
      </S.Presentation>
      <S.Content>
        <S.Description>Local: {destinie.place}</S.Description>
        <S.Description>Meta: {destinie.goal}</S.Description>
      </S.Content>
    </S.Container>
  );
}
