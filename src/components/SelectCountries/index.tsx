import React from "react";
import { Grid, InputLabel, MenuItem, Select } from "@material-ui/core";

import { getAllCountries } from "../../api";
import useStyles from "./styles";

type CountrieProps = {
  name: string;
  translations?: {
    br?: string;
  };
};

type SelectCountriesProps = {
  countrie: string;
  onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void;
};

const SelectCountries = ({ countrie, onChange }: SelectCountriesProps) => {
  const classes = useStyles();
  const [countries, setCountries] = React.useState<[CountrieProps]>();

  React.useEffect(() => {
    (async () => {
      const json = await getAllCountries();
      setCountries(json);
    })();
  }, []);

  return (
    <Grid item md={3} sm={4} xs={12} className={classes.inputGutter}>
      <InputLabel htmlFor="País" className={classes.labelStyle}>
        País
      </InputLabel>

      <Select
        id="País"
        value={countrie}
        displayEmpty
        className={classes.selectStyle}
        fullWidth
        required
        variant="outlined"
        onChange={onChange}
      >
        <MenuItem value="" disabled>
          Selecione...
        </MenuItem>
        {countries?.map(({ name }) => (
          <MenuItem value={name} key={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};

export default SelectCountries;
