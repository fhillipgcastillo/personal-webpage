//import liraries
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/navbar/Navbar.jsx";
import Main from "./views/Main.jsx";
import { withStyles } from "@material-ui/styles";
import NotFound from "./views/NotFound.jsx";

// create a component
class Routes extends Component {
  render() {
    return (
      <Router>
        <Grid container>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Grid>
      </Router>
    );
  }
}

// define your styles
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
};

//make this component available to the app


export default withStyles(styles)(Routes);