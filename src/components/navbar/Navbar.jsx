import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

export default class Navbar extends Component {
  render() {
    return (
      <Grid container spacing={0} > 
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </Grid>
    );
  }
}
