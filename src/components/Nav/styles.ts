import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  appBar: {
    background: theme.palette.common.black,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  container: {
    maxWidth: "1280px",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
}));
