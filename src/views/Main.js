import React, { Component } from "react";
import { Grid, Card, CardContent } from "@material-ui/core";
import profileImage from "../assets/profile.jpg";
import Experiences from "../components/Experiences";
import AboutMe from "../components/AboutMe";
import TechnicalSkills from "../components/TechnicalSkills";

export const useStyle = {
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
    height: 200,
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


export default function Main() {
  const profile = React.useRef({
    name: "Fhillip G. Castillo",
    avatar: profileImage,
    geo: `I'm a person who loves to team work, I'm well experienced with Agile and Scrum Methodologies and my goals are to help my co-workers to grow and improve as software developers, by delivering high-quality reliable software, fast, with excellent user experience to commit the customers' needs and goals.`,
    occupation: "Front-end Software Engeneering",
  });
  const experiences = React.useRef([
    {
      title: "Jr. Full Stack developer for a brand protection company",
      company: "Intellisys D. Corp.",
      startedDate: "Aug 2015",
      endedDate: "Present (4 yrs 11 mos)",
      description:
        "Help my customer and my team to improve the project priorities, give the respective suggestions, add consistency, add new behaviors and visuals, and all that with the highest quality possible.",
      technologies: [
        "c sharp",
        ".Net Framework",
        "ElasticSearch",
        "Microsoft SQL Server",
        "MongoDB",
        "Spring Framework",
        "Entity Framework",
        "bootstrap",
        "Java",
        "Git",
        "Bitbucket",
      ],
      jobType:"Fulltime"
    },
    {
      title: "Full Stack Developer for some magazine media based company",
      company: "Intellisys D. Corp.",
      startedDate: "Feb 2015 ",
      endedDate: "Jul 2015 (6 mos)",
      description: `My role was to mantain, refactor, improve and add all the functionality for the magazine.`,
      technologies: [
        "php",
        "html",
        "css",
        "js",
        "wordpress",
        "MySql server",
        "Git",
        "Bitbucket",
      ],
      jobType:"Fulltime"
    },
    {
      title: "Full Stack Developer for a Mom's blog",
      company: "Intellisys D. Corp.",
      startedDate: "Nov 2014 ",
      endedDate: "Feb 2015 (4 mos)",
      description: `My role was as a front end developer, where I recreate what the designer ask for and as a backend developer, recreating WordPress plugins, modules and manage the cms. 
        All of those base on the customer needs.`,
      technologies: [
        "php",
        "html",
        "css",
        "js",
        "wordpress",
        "wordpress cms",
        "bootstrap framework",
        "MySql server",
        "Git",
        "Bitbucket",
      ],
      jobType:"Intern"
    },
  ]);
  const stack = React.useRef([{title: "UI/UX Designer"}, {title: "React JS"}, {title: "React Native"}, {title: "React Hooks"}, {title: "Elasticsearch"}, {title: "MongoDB"}, {title: "bootstrap"}, {title: "git"}, {title: "javascript"}, {title: "NodeJs"}, {title: "es5"}, {title: "es6"}, {title: "css"}, {title: "html"}, {title: "c#"}, {title: "asp .Net"}])
  
  return (
    <Grid container style={useStyle.justContainer}   direction="row" justify="center">
      <Grid container style={useStyle.preHeader}></Grid>
      <AboutMe profile={profile.current} />
      <Experiences experiences={experiences.current} />
      <TechnicalSkills skills={stack.current} />
    </Grid>
  );
}



