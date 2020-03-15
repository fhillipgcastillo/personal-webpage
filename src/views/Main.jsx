import React, { Component } from "react";
import { Grid, Card, CardContent } from "@material-ui/core";

const useStyle = {
  padding20hor: {
    paddingLeft: 20,
    paddingRight: 20
  },
  margin20hor: {
    marginLeft: 20,
    marginRight: 20
  },
  justContainer: {
    backgroundColor: "#0e1e25",
    width: "100%",
    height: "100%",
    minHeight: 888
  },
  content: {
    margin: 0,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: "0px 1px 5px",
    transform: "translate(0px, 0px)",
    position: "relative"
  },
  preHeader: {
    width: "100%",
    // background: "url('https://demos.creative-tim.com/material-kit-react/static/media/profile-bg.baf6b40a.jpg')"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    overflow: "hidden"
  },
  avatar: {
    width: 200,
    transform: "translate(0px, -50%)"
  },
  textCenter: {
    textAlign:'center'
  }
};
export default class Main extends Component {
  render() {
    const profile = {
      name: "Fhillip G. Castillo",
      avatar: "https://instagram.fsti4-2.fna.fbcdn.net/v/t51.2885-19/s150x150/45817362_347215099444522_4981738747088338944_n.jpg?_nc_ht=instagram.fsti4-2.fna.fbcdn.net&_nc_ohc=1zpRzqh5H1cAX-sfRE_&oh=67c4fd3a2db3412bdf81fe850fe282ab&oe=5EA640C5",
      geo: `I'm a person who loves to team work, I am also well experienced with Agile and Scrum Methodologies and my goals are to help my co-workers to grow and improve as software developers, deliver high-quality software, fast, with excellent user experience to commit the customers' needs and goals.`,
      occupation: "Software Engeneering"

    }
    return (
      <Grid container style={useStyle.justContainer}>
        <Grid container style={useStyle.preHeader}></Grid>
        <Grid container>
          <Grid
            container
            style={useStyle.content}
            direction="column"
            justify="flex-start"
            alignItems="center"
            spacing={5}
          >
            <Grid container>
              <Grid
                container
                item
                sm={12}
                style={useStyle.avatar}
                direction="column"
                justify="flex-start"
                alignItems="center"
              >
                <img
                  src="https://instagram.fsti4-2.fna.fbcdn.net/v/t51.2885-19/s150x150/45817362_347215099444522_4981738747088338944_n.jpg?_nc_ht=instagram.fsti4-2.fna.fbcdn.net&_nc_ohc=1zpRzqh5H1cAX-sfRE_&oh=67c4fd3a2db3412bdf81fe850fe282ab&oe=5EA640C5"
                  style={useStyle.image}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                className="jss4"
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                style={{...useStyle.textCenter}}
              >
                <h3 className="jss16">{profile.name} </h3>
                <h6>{profile.occupation}</h6>
                <button
                  className="MuiButtonBase-root MuiButton-root jss158 jss178 jss179 MuiButton-text"
                  type="button"
                >
                  <span className="MuiButton-label">
                    <i className="fab fa-twitter"></i>
                  </span>
                  <span className="MuiTouchRipple-root">tw</span>
                </button>
                <button
                  className="MuiButtonBase-root MuiButton-root jss158 jss178 jss179 MuiButton-text"
                  type="button"
                >
                  <span className="MuiButton-label">
                    <i className="fab fa-instagram"></i>
                  </span>
                  <span className="MuiTouchRipple-root">ig</span>
                </button>
                <button
                  className="MuiButtonBase-root MuiButton-root jss158 jss178 jss179 MuiButton-text"
                  type="button"
                >
                  <span className="MuiButton-label">
                    <i className="fab fa-facebook"></i>
                  </span>
                  <span className="MuiTouchRipple-root">fb</span>
                </button>
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item xs={6} style={{...useStyle.textCenter}}> 
                {profile.geo}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
