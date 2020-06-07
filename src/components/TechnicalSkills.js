import React from "react";
import { Grid } from "@material-ui/core";
import TechnicalSkillsCard from "./TechnicalSkillsCard";
import { useStyle } from "../views/Main";

export default function TechnicalSkills({ skills = [] }) {
  return (
    <Grid container >
      <Grid style={{ ...useStyle.content, marginTop: 20 }}>
        <h2 id="skills">Technical Skills/ Technical Stack </h2>
        <Grid container direction="row">
          {skills.map((exp, index) => (
            <TechnicalSkillsCard key={index} {...exp} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
