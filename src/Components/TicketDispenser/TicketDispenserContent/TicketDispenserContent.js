import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HardwareAppbar from "../../Hardware/HardwareAppbar/HardwareAppbar";
import TicketDispenserTable from "../../Hardware/TicketDispenserTable/TicketDispenserTable";

import { Link } from "react-router-dom";

import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h2 className={classes.mainTitle}>Ticket Dispenser Overview</h2>
            <Paper className={classes.paper}>
              <HardwareAppbar />
              <TicketDispenserTable />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
