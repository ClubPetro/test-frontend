import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    marginBottom: "50px",
    maxWidth: "1280px",
  },
  text: {
    fontSize: "14px",
    textAlign: "center",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(2),
    },
  },
}));
