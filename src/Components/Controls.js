import React from "react";
import classes from "./Controls.module.css";

const Controls = (props) => {
  return (
    <section className={classes.controls}>
      <div>
        <button className={classes.attack} onClick={props.attack}>
          Attack
        </button>
        <button
          className={classes["special-attack"]}
          onClick={props.onSpecialAttack}
        >
          Special Attack
        </button>
        <button className={classes.heal} onClick={props.heal}>
          Heal
        </button>
        <button className={classes["give-up"]} onClick={props.onGiveup}>
          Give up
        </button>
      </div>
    </section>
  );
};
export default Controls;
