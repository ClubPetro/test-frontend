import React from "react";
import {
  Box,
  Card,
  Typography,
  CardContent,
  IconButton,
  Divider,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import InputMask from "react-input-mask";
import CloseIcon from "@material-ui/icons/Close";
import CreateIcon from "@material-ui/icons/Create";

import SearchContext from "../../context/useSearchContext";
import useStyles from "./styles";

type CardComponentProps = {
  id: string;
  countrie?: string;
  countrieTranslation: string;
  city: string;
  date: string;
  flag: string;
};

const CardComponent = ({
  id,
  countrieTranslation,
  city,
  date,
  flag,
}: CardComponentProps) => {
  const classes = useStyles();
  const { setIdDelete, setDataEdit } = React.useContext(SearchContext);
  const [edit, setEdit] = React.useState(false);
  const [newCity, setNewCity] = React.useState(city);
  const [newDate, setNewDate] = React.useState(date);

  function activeEditMode() {
    setEdit((prev) => !prev);
  }

  function handleUpdate() {
    setDataEdit({ id, city: newCity, date: newDate });
    setEdit((prev) => !prev);
  }

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.card}>
        <CardContent className={classes.contentContainer}>
          <Box className={classes.boxContainer}>
            <Box className={classes.boxFlag}>
              <img
                src={flag}
                alt={countrieTranslation}
                className={classes.image}
              />
              <Typography variant="h2" color="primary" className={classes.font}>
                {countrieTranslation}
              </Typography>
            </Box>
            <Box>
              <IconButton aria-label="Editar card" onClick={activeEditMode}>
                <CreateIcon fontSize="small" className={classes.icon} />
              </IconButton>
              <IconButton
                aria-label="Deletar card"
                onClick={() => setIdDelete(id)}
              >
                <CloseIcon fontSize="small" className={classes.icon} />
              </IconButton>
            </Box>
          </Box>
          <Divider className={classes.divider} />
          <Box className={classes.info}>
            {edit ? (
              <>
                <TextField
                  value={newCity}
                  placeholder="Local"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setNewCity(e.target.value)}
                />
                <InputMask
                  mask="99/9999"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                >
                  {() => (
                    <TextField
                      placeholder="Meta"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  )}
                </InputMask>

                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  onClick={handleUpdate}
                >
                  Atualizar
                </Button>
              </>
            ) : (
              <>
                <Typography variant="body1">Local: {city}</Typography>
                <Typography variant="body1">Meta: {date}</Typography>
              </>
            )}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardComponent;
