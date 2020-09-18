import React from "react";
import { Grid } from "@material-ui/core";
import { getUserProfile } from "../tools/api";

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
    width: 200
  },
  avatar: {
    width: 200,
    transform: "translate(0px, -50%)",
  },
  roundedAvatar: {
    overflow: "hidden",
    justifyContent: "center",
    display: "flex",
    position: "relative",
    borderRadius: "50%",
    width: 160,
    height: 160,
  },
  textCenter: {
    textAlign: "center",
  },
};

export default function AboutMe({ profileName }) {
  const profile = React.useRef(getUserProfile(profileName));

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
            <div 
              style={useStyle.roundedAvatar}
            >
              <img src={profile.current.avatar} style={useStyle.image} />
            </div>
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
            <h3 className="jss16">{profile.current.name} </h3>
            <h4>{profile.current.occupation}</h4>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={6} style={{ ...useStyle.textCenter }}>
            {profile.current.geo}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
