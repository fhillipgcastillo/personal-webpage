//import liraries
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/navbar/Navbar.jsx";
import Main from "./views/Main.jsx";

// create a component
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Grid container>
          <Navbar />
          <Switch>
            <Route path="/">
              <Main />
            </Route>
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
        </Grid>
      </Router>
    );
  }
}

// define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//   },
// });

//make this component available to the app

