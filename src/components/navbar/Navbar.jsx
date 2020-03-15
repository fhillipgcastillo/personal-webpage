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
    marginRight: 2,
    flexGrow: 1
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
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Fhillip G. Castillo</Link>
          </Typography>
        </IconButton>
        <div className={classes.grow3} />
        <Grid className={classes.grow}>
          <Typography variant="h6" className={classes.title}>
            <Link to="/portfolio">Portfolio</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/photography">Photography</Link>
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
