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

  labelStyle: {
    paddingBottom: theme.spacing(1),
    color: theme.palette.common.white,
  },

  selectStyle: {
    background: theme.palette.common.white,
    borderRadius: "7px",
    border: "none",
    color: "#A3A3A3",
    paddingLeft: theme.spacing(2),
  },
}));
