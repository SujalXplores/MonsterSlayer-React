import React from "react";
import classes from "./StartScreen.module.css";

const StartScreen = (props) => {
  return (
    <section className={classes.controls}>
      <h1>Click on play button to start the game.</h1>
      <button className={classes.play_btn} onClick={props.onNewGame}></button>
    </section>
  );
};

export default StartScreen;
