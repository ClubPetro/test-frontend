import React from "react";

import { Grid, Container } from "@material-ui/core";
import { v4 as uuid } from "uuid";

import SelectCountries from "../SelectCountries";
import InputLocal from "../InputLocal";
import InputDate from "../InputDate";
import ButtonSubmit from "../ButtonSubmit";
import SearchContext from "../../context/useSearchContext";
import { getCountrieByName } from "../../api";

import useStyles from "./styles";

const Search = () => {
  const classes = useStyles();
  const [countrie, setCountrie] = React.useState("");
  const [city, setCity] = React.useState("");
  const [date, setDate] = React.useState("");
  const { setNewData, setIsFinish } = React.useContext(SearchContext);

  async function handleChange(event: React.FormEvent) {
    event.preventDefault();
    if (countrie && city && date) {
      const data = await getCountrieByName(countrie);
      setNewData({
        id: uuid(),
        countrieTranslation: data.countrieTranslation,
        countrie,
        city,
        date,
        flag: data.flag,
      });
      setIsFinish(true);
      setCountrie("");
      setCity("");
      setDate("");
    }
  }

  return (
    <Grid container className={classes.containerGutter}>
      <Container maxWidth="lg" component="section">
        <form className={classes.container} onSubmit={handleChange}>
          <SelectCountries
            countrie={countrie}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
              setCountrie(e.target.value as string)
            }
          />
          <InputLocal
            city={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCity(e.target.value)
            }
          />
          <InputDate
            date={date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDate(e.target.value)
            }
          />
          <ButtonSubmit />
        </form>
      </Container>
    </Grid>
  );
};

export default Search;
