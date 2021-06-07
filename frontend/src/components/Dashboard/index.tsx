import Card from "components/Card";
import * as S from "./styles";
import { useDestination } from "hooks/useDestination";

interface Props {
  onOpenEditModalDestination: () => void;
}

export default function Dashboard({ onOpenEditModalDestination }: Props) {
  const { destinies } = useDestination();

  return (
    <S.Container>
      <S.Content>
        {destinies.map((destinie) => (
          <Card
            identify={Number(destinie.id)}
            key={destinie.id}
            destinie={destinie}
            onOpenModalEditDestination={onOpenEditModalDestination}
          />
        ))}
      </S.Content>
    </S.Container>
  );
}
