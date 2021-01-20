import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  inputGutter: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  },
  inputStyle: {
    background: theme.palette.common.white,
    borderRadius: "7px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
    },
  },
  labelStyle: {
    paddingBottom: theme.spacing(1),
    color: theme.palette.common.white,
  },
}));
