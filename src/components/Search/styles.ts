import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  containerGutter: {
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(9),
    background: theme.palette.primary.main,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
}));
