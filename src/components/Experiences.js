import React from "react";
import { Grid } from "@material-ui/core";
import ExperienceCard from "./ExperienceCard";
import { getExperiences } from "../tools/api";

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
    marginTop: 20 
  }
};

export default function Experiences({ profileName }) {
  const experiences = React.useRef(getExperiences(profileName));

  return (
    <Grid container>
      <Grid style={{ ...useStyle.content}}>
        <h2 id="experiences">Experiences</h2>
        <div>
          {experiences.current.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </Grid>
    </Grid>
  );
}
