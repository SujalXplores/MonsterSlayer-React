import React from "react";
import classes from "./HealthBar.module.css";

const HealthBar = (props) => {
  const { gameData } = props;
  return (
    <section className={classes.player__bars}>
      <div className={classes.player__container}>
        <h1 className={classes["text-center"]}>You</h1>
        <div className={classes.healthbar}>
          <div
            className={`${classes.healthbar} ${classes["text-center"]}`}
            style={{
              width:
                gameData.playerHealth <= 0 ? "0%" : gameData.playerHealth + "%",
            }}
          >
            <span className={classes["health-digit"]}>
              {gameData.playerHealth}
            </span>
          </div>
        </div>
      </div>
      <div className={classes.player__container}>
        <h1 className={classes["text-center"]}>Monster</h1>
        <div className={classes.healthbar}>
          <div
            className={`${classes.healthbar} ${classes["text-center"]}`}
            style={{
              width:
                gameData.monsterHealth <= 0
                  ? "0%"
                  : gameData.monsterHealth + "%",
            }}
          >
            <span className={classes["health-digit"]}>
              {gameData.monsterHealth}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBar;
