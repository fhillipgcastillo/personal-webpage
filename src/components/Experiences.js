import React from "react";
import { Grid } from "@material-ui/core";
import ExperienceCard from "./ExperienceCard";
import { useStyle } from "../views/Main";

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
