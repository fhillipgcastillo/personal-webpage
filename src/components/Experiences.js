import React from "react";
import { Grid } from "@material-ui/core";
import ExperienceCard from "./ExperienceCard";

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
  }
};

export default function Experiences({ experiences = [] }) {
  return (
    <Grid container>
      <Grid style={{ ...useStyle.content, marginTop: 20 }}>
        <h2 id="experiences">Experiences</h2>
        <div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </Grid>
    </Grid>
  );
}
