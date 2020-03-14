import React, { Component } from "react";
import { Grid, Card, CardContent } from "@material-ui/core";

const useStyle = {
  padding20hor: {
    paddingLeft: 20,
    paddingRight: 20
  },
  margin20hor: {
    marginLeft: 20,
    marginRight: 20
  },
  justContainer: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    minHeight: 800
  },
  content: {
    margin: 0,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: "0px 1px 5px",
    transform: "translate(0px, 0px)",
    position: "relative"
  },
  preHeader: {
    width: "100%",
    background:
      "url('https://demos.creative-tim.com/material-kit-react/static/media/profile-bg.baf6b40a.jpg')"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    overflow: "hidden",
    transform: "translate(0px, -50%)"
  },
  avatar: {
    width: 200
  }
};
export default class Main extends Component {
  render() {
    return (
      <Grid container style={useStyle.justContainer}>
        <Grid container style={useStyle.preHeader}></Grid>
        <Grid
          container
          style={useStyle.content}
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Grid container style={useStyle.avatar}>
            <img
              src="https://demos.creative-tim.com/material-kit-react/static/media/christian.56633ed3.jpg"
              style={useStyle.image}
            />
          </Grid>
          <Grid container style={useStyle.avatar}>
            <div className="jss4">
              <h3 className="jss16">Christian Louboutin</h3>
              <h6>DESIGNER</h6>
              <button
                className="MuiButtonBase-root MuiButton-root jss158 jss178 jss179 MuiButton-text"
                type="button"
              >
                <span className="MuiButton-label">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="MuiTouchRipple-root">tw</span>
              </button>
              <button
                className="MuiButtonBase-root MuiButton-root jss158 jss178 jss179 MuiButton-text"
                type="button"
              >
                <span className="MuiButton-label">
                  <i className="fab fa-instagram"></i>
                </span>
                <span className="MuiTouchRipple-root">ig</span>
              </button>
              <button
                className="MuiButtonBase-root MuiButton-root jss158 jss178 jss179 MuiButton-text"
                type="button"
              >
                <span className="MuiButton-label">
                  <i className="fab fa-facebook"></i>
                </span>
                <span className="MuiTouchRipple-root">fb</span>
              </button>
            </div>
          </Grid>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <p>
              An artist of considerable range, Chet Faker — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure.
            </p>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
