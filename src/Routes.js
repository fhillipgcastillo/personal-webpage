import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { createBrowserHistory } from "history";

// Dynamyc Import / Lazy loading import
const Main = React.lazy(() => import("./views/Main.js"));
const Navbar = React.lazy(() => import("./components/navbar/Navbar.js"));
const NotFound = React.lazy(() => import("./views/NotFound.js"));

const env = process.env.NODE_ENV;
const basename = env === "development" ? "/" : "/personal-webpage/";
const history = createBrowserHistory(basename);

function Loading() {
  return <label>loading...</label>;
}

class Routes extends Component {
  state = {};
  render() {
    return (
      <Router history={history} basename={basename}>
        <React.Suspense fallback={<Loading />}>
          <Grid container>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route component={NotFound} />
            </Switch>
          </Grid>
        </React.Suspense>
      </Router>
    );
  }
}

// define your styles
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
};

//make this component available to the app
export default withStyles(styles)(Routes);
