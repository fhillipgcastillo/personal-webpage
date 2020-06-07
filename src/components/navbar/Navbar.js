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
  MenuIcon,
} from "@material-ui/core";

const useStyles = makeStyles({
  menuButton: {
    marginRight: 2,
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    position: "fixed",
    top: 25,
    color: "white",
  },
  grow: {
    flexGrow: 1,
  },
  flexGrow: {
    display: "flex",
    flexGrow: 1,
  },
  grow3: {
    flexGrow: 3,
  },
});

import logo from "../../assets/FC logo.png";

export default function Navba() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#0e1e25", top: 0 }}
      className={classes.appBar}
    >
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
        <div className={classes.flexGrow}>
          <Typography variant="h6" className={classes.title}>
            <Link to="https://www.linkedin.com/in/fhillip-g-castillo-5567a18b/">Linkedin</Link>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
