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
  menuButton: {
    marginRight: 2
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    position: "fixed",
    top: 25,
    color: "white"
  },
  grow: {
    flexGrow: 1
  },
  grow3: {
    flexGrow: 3
  }
});

export default function Navba() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          {/* <MenuIcon /> */}
          Fhillip Castillo
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link to="/"></Link>
        </Typography>
        <div className={classes.grow3} />
        <Typography variant="h6" className={classes.title}>
          <Link to="/portfolio">Portfolio</Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link to="/photography">Photography</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
