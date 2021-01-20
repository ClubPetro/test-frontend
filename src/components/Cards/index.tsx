import React from "react";
import { Grid, Typography } from "@material-ui/core";

import CardComponent from "../Card";
import SearchContext from "../../context/useSearchContext";

import useStyles from "./styles";

const Cards = () => {
  const classes = useStyles();
  const { allData } = React.useContext(SearchContext);

  return (
    <>
      <Grid container className={classes.container}>
        {allData[0]?.id &&
          allData.map(
            ({ id, countrie, countrieTranslation, date, city, flag }) => (
              <CardComponent
                key={id}
                id={id}
                countrie={countrie}
                countrieTranslation={countrieTranslation}
                date={date}
                city={city}
                flag={flag}
              />
            )
          )}
      </Grid>
      {!allData[0] && (
        <Typography variant="h3" color="initial" className={classes.text}>
          Não há registros ainda.
        </Typography>
      )}
    </>
  );
};

export default Cards;
