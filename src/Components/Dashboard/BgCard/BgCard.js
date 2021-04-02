import React from "react";
import { useStyles } from "./css";

export default function BgCard() {
  const classes = useStyles();

  return (
    <div>
      <img
        className={classes.bgImage}
        src={require("../../../assets/parkAddaImages/parkMumbai.png")}
      />
    </div>
  );
}
