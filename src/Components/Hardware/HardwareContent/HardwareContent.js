import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HardwareAppbar from "../HardwareAppbar/HardwareAppbar";
import HardwareRFIDTable from "../HardwareRFIDTable/HardwareRFIDTable";
import TicketDispenser from "../TicketDispenserTable/TicketDispenserTable";
import HardwareTable from "../HardwareTable/HardwareTable";
import { Link } from "react-router-dom";

import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <h2 className={classes.mainTitle}>Hardware Overview</h2>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            {/* <Button className={classes.button} variant="outlined">
              <img
                className={classes.image}
                src={require("../../../assets/icons/hardwareCCTVIcon.svg")}
                style={{
                  width: "25px",
                  height: "25px",
                  marginLeft: "-180px",
                  marginTop: "5px"
                }}
              />
              <b style={{ marginLeft: "20px" }}>CCTV</b>
            </Button> */}
            <br />
            <br />
            <Button className={classes.hardwareButton} variant="outlined">
              <img
                className={classes.image}
                src={require("../../../assets/icons/hardwarePrinterIcon.svg")}
                style={{
                  width: "25px",
                  height: "25px",
                  marginLeft: "-170px",
                  marginTop: "5px"
                }}
              />
              <b style={{ marginLeft: "20px" }}>Printer</b>
            </Button>
            <br />
            <br />
            <Link to="/rfid" style={{ textDecoration: "none" }}>
              <Button className={classes.hardwareButton} variant="outlined">
                <img
                  className={classes.image}
                  src={require("../../../assets/icons/hardwareRFIDIcon.svg")}
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "-135px",
                    marginTop: "5px"
                  }}
                />
                <b style={{ marginLeft: "20px" }}>FASTag RFID</b>
              </Button>
            </Link>
            <br />
            <br />
            <Link to="/ticketdispenser" style={{ textDecoration: "none" }}>
              <Button className={classes.hardwareButton} variant="outlined">
                <img
                  className={classes.image}
                  src={require("../../../assets/icons/hardwareTicketDispenserIcon.svg")}
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "-115px",
                    marginTop: "5px"
                  }}
                />
                <b style={{ marginLeft: "20px" }}>Ticket Dispenser</b>
              </Button>
            </Link>
            <br />
            <br />
            <Button className={classes.hardwareButton} variant="outlined">
              <img
                className={classes.image}
                src={require("../../../assets/icons/hardwareANPRIcon.svg")}
                style={{
                  width: "25px",
                  height: "25px",
                  marginLeft: "-180px",
                  marginTop: "5px"
                }}
              />
              <b style={{ marginLeft: "20px" }}>ANPR</b>
            </Button>
          </Grid>

          <Grid item xs={12} sm={12} md={8} lg={8}>
            <img
              className={classes.image}
              src={require("../../../assets/images/hardwarePageImg.svg")}
            />
          </Grid>

          <Grid item xs={12}>
            <br />
            <br />
            <br />
            <br />

            <Paper className={classes.paper}>
              <HardwareTable />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
