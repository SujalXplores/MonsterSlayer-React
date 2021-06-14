import React from "react";
import classes from "./Logs.module.css";

const Logs = (props) => {
  const { turns } = props;

  return (
    <section className={classes.log}>
      <ul>
        {turns
          .map((msg) => {
            return (
              <div key={Math.random().toString()}>
                <li className={classes["player-turn"]}>{msg.playerText}</li>
                <li className={classes["monster-turn"]}>{msg.monsterText}</li>
              </div>
            );
          })
          .reverse()}
      </ul>
    </section>
  );
};
export default Logs;
