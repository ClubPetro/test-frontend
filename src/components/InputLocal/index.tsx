import React from "react";
import { Grid, InputLabel, TextField } from "@material-ui/core";

import useStyles from "./styles";

type InputLocalProps = {
  city: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputLocal = ({ city, onChange }: InputLocalProps) => {
  const classes = useStyles();

  return (
    <Grid item md={4} sm={4} xs={12} className={classes.inputGutter}>
      <InputLabel htmlFor="local" className={classes.labelStyle}>
        Local
      </InputLabel>
      <TextField
        id="local"
        placeholder="Digite o local que deseja conhecer"
        variant="outlined"
        fullWidth
        required
        className={classes.inputStyle}
        value={city}
        onChange={onChange}
      />
    </Grid>
  );
};

export default InputLocal;
