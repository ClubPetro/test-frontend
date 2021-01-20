import React from "react";
import InputMask from "react-input-mask";
import { Grid, InputLabel, TextField } from "@material-ui/core";

import useStyles from "./styles";

type InputDateProps = {
  date: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputDate = ({ date, onChange }: InputDateProps) => {
  const classes = useStyles();

  return (
    <Grid item md={2} sm={4} xs={12} className={classes.inputGutter}>
      <InputLabel htmlFor="meta" className={classes.labelStyle}>
        Meta
      </InputLabel>
      <InputMask mask="99/9999" value={date} onChange={onChange}>
        {() => (
          <TextField
            id="meta"
            placeholder="mês/ano"
            variant="outlined"
            fullWidth
            required
            className={classes.inputStyle}
          />
        )}
      </InputMask>
    </Grid>
  );
};

export default InputDate;
