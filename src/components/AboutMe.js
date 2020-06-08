import React from "react";
import { Grid } from "@material-ui/core";

const useStyle = {
  content: {
    margin: "auto",
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: "0px 1px 5px",
    transform: "translate(0px, 0px)",
    position: "relative",
    maxWidth: 800,
    padding: 10,
  },
  image: {
    width: 200,
    height: 160,
    borderRadius: "50%",
    overflow: "hidden",
  },
  avatar: {
    width: 200,
    transform: "translate(0px, -50%)",
  },
  textCenter: {
    textAlign: "center",
  },
};

export default function AboutMe({ profile }) {
  return (
    <Grid container>
      <Grid
        container
        style={useStyle.content}
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={5}
      >
        <Grid container>
          <Grid
            container
            item
            sm={12}
            style={useStyle.avatar}
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <img src={profile.avatar} style={useStyle.image} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            className="jss4"
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            style={{ ...useStyle.textCenter }}
          >
            <h3 className="jss16">{profile.name} </h3>
            <h4>{profile.occupation}</h4>
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
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={6} style={{ ...useStyle.textCenter }}>
            {profile.geo}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
