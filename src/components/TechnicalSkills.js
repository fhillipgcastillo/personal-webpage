import React from "react";
import { Grid } from "@material-ui/core";
import TechnicalSkillsCard from "./TechnicalSkillsCard";
import { getStacks } from "../tools/api";

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

export default function TechnicalSkills({ profileName = "" }) {
  const stack = React.useRef(getStacks(profileName));

  return (
    <Grid container >
      <Grid style={{ ...useStyle.content, marginTop: 20 }}>
        <h2 id="skills">Technical Skills/ Technical Stack</h2>
        <Grid container direction="row">
          {stack.current.map((exp, index) => (
            <TechnicalSkillsCard key={index} {...exp} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
