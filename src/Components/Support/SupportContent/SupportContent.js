import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import DoughnutChart from "../userDoughnutChart/UserDoughnutChart";
// import Card from "../UserCard/UserCard";
import SupportTable from "../SupportTable/SupportTable";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";

import SupportAppbar from "../SupportAppbar/SupportAppbar";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div>
      <div className={classes.root}>
        <h2 className={classes.mainTitle}>Support Overview</h2>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Typography
              align="center"
              variant="body2"
              component="p"
              className={classes.title}
            >
              Opened Support
            </Typography>
            <MuiThemeProvider theme={theme}>
              <Typography
                align="center"
                variant="h2"
                component="h2"
                className={classes.subtTitle}
                className={classes.verticalBar}
                style={{ color: "#FFC738" }}
              >
                <b>87</b>
              </Typography>
            </MuiThemeProvider>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Typography
              align="center"
              variant="body2"
              component="p"
              className={classes.title}
            >
              Unopened Support
            </Typography>
            <Typography
              align="center"
              variant="h2"
              component="h2"
              className={classes.subtTitle}
              className={classes.verticalBar}
              style={{ color: "#1D2B44" }}
              // style={{ marginTop: "10px" }}
            >
              <b>20</b>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Typography
              align="center"
              variant="body2"
              component="p"
              className={classes.title}
            >
              Closed Support
            </Typography>
            <Typography
              align="center"
              variant="h2"
              component="h2"
              className={classes.subtTitle}
              className={classes.verticalBar}
              style={{ color: "#1D2B44" }}
              // style={{ marginTop: "10px" }}
            >
              <b>20</b>
            </Typography>
          </Grid>
        </Grid>

        {/* card end */}

        <Grid item xs={12}></Grid>

        <Grid item xs={12}>
          <br />
          <br />
          <Paper className={classes.paper}>
            <SupportAppbar />
            <SupportTable />
          </Paper>
        </Grid>
      </div>
    </div>
  );
}
