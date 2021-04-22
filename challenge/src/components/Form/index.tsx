import { useState, useEffect } from "react";
import { Container, InputContainer, Button } from "./style";
import InputMask from "react-input-mask";

import { api, countriesApi } from "../../services/api";

interface CountriesProps {
  translations: {
    br: string;
  };
  name: string;
}

const Form = () => {
  const [country, setCountry] = useState("");
  const [place, setPlace] = useState("");
  const [goal, setGoal] = useState("");
  const [countries, setCountries] = useState<CountriesProps[]>([]);

  useEffect(() => {
    countriesApi.get("/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const submitForm = (e: any) => {
    e.preventDefault();

    const data = {
      country,
      place,
      goal,
    };

    api.post("/places", data).then((res) => {
      setCountry("Selecione...");
      setPlace("");
      setGoal("");
    });
  };

  return (
    <Container onSubmit={submitForm}>
      <form>
        <InputContainer>
          <label htmlFor="country">País</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>Selecione...</option>
            {countries.map((country, index) => (
              <option value={country.name} key={index}>
                {country.translations.br}
              </option>
            ))}
          </select>
        </InputContainer>

        <InputContainer>
          <label htmlFor="place">Local</label>
          <input
            id="place"
            placeholder="Digite o local que deseja conhecer"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="goal">Meta</label>
          <InputMask
            mask="99/9999"
            placeholder="mês/ano"
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </InputContainer>

        <Button>Adicionar</Button>
      </form>
    </Container>
  );
};

export default Form;
