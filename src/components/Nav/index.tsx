import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import useStyles from "./styles";
import iconLogo from "../../assets/icon.svg";

const Nav = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <img src={iconLogo} alt="logo" className={classes.container} />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
