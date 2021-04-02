import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./css";

export default function CircularUnderLoad() {
  const classes = useStyles();
  return (
    <div style={{ height: "100vh" }}>
      <CircularProgress disableShrink className={classes.loader} />
    </div>
  );
}
