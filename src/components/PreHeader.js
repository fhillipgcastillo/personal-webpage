import React from "react";
import { Grid } from "@material-ui/core";

const useStyle = {
  preHeader: {
    width: "100%",
    height: 200,
    // background: "url('https://demos.creative-tim.com/material-kit-react/static/media/profile-bg.baf6b40a.jpg')"
  }
};


export default () => (<Grid container style={useStyle.preHeader}></Grid>);
