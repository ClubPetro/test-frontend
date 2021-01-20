import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  image: {
    width: "56px",
    height: "34px",
    marginBottom: "10px",
  },
  font: {
    fontSize: "1rem",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  icon: {
    color: theme.palette.grey[700],
    paddingLeft: "0px",
    paddingRight: "0px",
    marginTop: "-10px",
  },
  card: {
    maxWidth: "250px",
    boxShadow: theme.shadows[3],
    marginTop: theme.spacing(4),
    margin: "0 auto",
  },
  boxContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  boxFlag: {
    marginTop: "15px",
  },
  divider: {
    marginTop: "9px",
    marginBottom: "43px",
  },
  info: {
    paddingBottom: "30px",
  },
  contentContainer: {
    paddingRight: "14px",
    paddingLeft: "14px",
  },
}));
