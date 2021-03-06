import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import data from '../env.json';
import AudioHint from "./AudioHint";
import { Data } from "react-f/lib/src/form";
import ResponsiveImage from './ImageHint'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxwidth: 345,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 21,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 300,
    width: "auto",
    objectFit:'contain'
    
  },
  
 
});

export default function Question(props) {
  const classes = useStyles();
  
  return (
    
    <div>
      <div className="head">
        <div
          className="container neon-box"
          style={{
            textAlign: "center",
            fontSize: "29px",
            fontFamily: "'Russo One', sans-serif",
          }}
        >
          <span className="flicker">ROUND {props.day}</span>
        </div>
      </div>

      <CardContent className="question">
        <Typography
          className={classes.title}
          style={{ fontFamily: "'Montserrat', sans-serif",color:"rgb(196, 175, 153)"}}
          
          gutterBottom
        >
          Question {props.qsNo}
        </Typography>

        <Typography
          className={classes.pos}
          color="#f0f0f0"
          style={{ fontSize: "17px", fontFamily: "'Barlow', sans-serif" }}

        >
          {props.qs}
        </Typography>
        {props.image ? (
          <ResponsiveImage
          src={data.api + props.image}
          width={ 1200 }
          height={ 800 } />

        ) : (
            <div></div>
          )}

        <br />
        {props.audio ? (
          <div style={{ textAlign: "center", margin: "0 auto" }}>
            <AudioHint
              style={{ textAlign: "center", margin: "0 auto" }}
              audio={data.api + props.audio}
            />
          </div>
        ) : (
            <div></div>
          )}
      </CardContent>
    </div>
  );
}

/*<CardMedia
            className={classes.media}
            style={{ textAlign: "center", margin: "0 auto" }}
            image={data.api + props.image}
            title="Image Hint"
          />*/