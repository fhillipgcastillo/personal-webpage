import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#2f3c42",
    color: "white",
    marginTop: 15,
    marginBottom: 15,
    width: "90%",
    textAlign: "center"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    color: "#00ad9f"
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TechnicalSkillsCard({
  title,
  description = null,
  level = 0.0,
  logo = null,
}) {
  const classes = useStyles();

  return (
    <Grid container item xs={2} lg={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" component="h6" className={classes.title}>
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          )}
          {level > 0.0 && (
            <Typography variant="body2" component="p">
              {(level * 100).toString()}%
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
