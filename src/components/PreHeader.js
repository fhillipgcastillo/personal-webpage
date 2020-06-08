import React from "react";
import { Grid } from "@material-ui/core";

const useStyle = {
  padding20hor: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  margin20hor: {
    marginLeft: 20,
    marginRight: 20,
  },
  justContainer: {
    backgroundColor: "#0e1e25",
    width: "100%",
    height: "100%",
    minHeight: 937,
  },
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
  preHeader: {
    width: "100%",
    height: 200,
    // background: "url('https://demos.creative-tim.com/material-kit-react/static/media/profile-bg.baf6b40a.jpg')"
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


export default () => (<Grid container style={useStyle.preHeader}></Grid>);
