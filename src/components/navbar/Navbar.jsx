import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuIcon
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 2
  },
  title: {
    flexGrow: 1
  }
});

export default function Navba() {
  const classes = useStyles();

  return <div className={classes.root}>
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </div>;
}
