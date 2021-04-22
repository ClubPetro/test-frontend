import { useState, useEffect } from "react";

import { Container } from "./style";
import Card from "../Card";

import { api } from "../../services/api";

export interface DataProps {
  country: string;
  place: string;
  goal: string;
  id: number;
}

const CardsList = () => {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    api.get("/places").then((res) => setData(res.data));
  }, [data]);

  return (
    <Container>
      {data.map((data) => (
        <Card
          country={data.country}
          goal={data.goal}
          id={data.id}
          place={data.place}
          key={data.id}
        />
      ))}
    </Container>
  );
};

export default CardsList;
