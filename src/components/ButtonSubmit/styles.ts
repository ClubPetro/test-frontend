import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  buttonStyle: {
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
    },
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },
}));
