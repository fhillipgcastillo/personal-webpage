import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#2f3c42",
    color: "white",
    marginTop: 15,
    marginBottom: 15,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    color: "#00ad9f",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ExperienceCard({
  title = "",
  company,
  jobType,
  startedDate,
  endedDate,
  description,
  id,
}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.pos}>
          {jobType} at {company}
        </Typography>
        <Typography variant="body2" component="p">
          {`${startedDate} - ${endedDate}`}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
