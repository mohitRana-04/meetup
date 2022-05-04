import React from "react";
import classes from "./Card.module.css";
function Card(props) {
  // using props.children able to show aal the props in the MeetupItem
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
