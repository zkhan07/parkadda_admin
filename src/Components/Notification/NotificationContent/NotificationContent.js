import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NotificationAppbar from "../NotificationAppbar/NotificationAppbar";
import NotificationTable from "../NotificationTable/NotificationTable";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <h2 className={classes.mainTitle}>Notification Overview</h2>
        <Grid container spacing={1}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <NotificationAppbar />
              <NotificationTable />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
