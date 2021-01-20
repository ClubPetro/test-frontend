import React from "react";
import { Button, Grid } from "@material-ui/core";
import useStyles from "./styles";

const ButtonSubmit = () => {
  const classes = useStyles();

  return (
    <Grid item md={2} sm={12} xs={12} className={classes.container}>
      <Button
        variant="text"
        color="default"
        fullWidth
        className={classes.buttonStyle}
        type="submit"
      >
        Adicionar
      </Button>
    </Grid>
  );
};

export default ButtonSubmit;
