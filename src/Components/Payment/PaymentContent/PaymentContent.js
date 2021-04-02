import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import DoughnutChart from "../userDoughnutChart/UserDoughnutChart";
// import Card from "../UserCard/UserCard";
import Table from "../PaymentTable/PaymentTable";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";
import { useStyles } from "./css";
import PaymentBarChart from "../PaymentBarChart/PaymentBarChart";
import PaymentAppbar from "../PaymentAppbar/PaymentAppbar";

export default function FullWidthGrid() {
  const classes = useStyles();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div>
      <div className={classes.root}>
        <h2 className={classes.mainTitle}>Payment Overview</h2>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={1}>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  className={classes.title}
                >
                  Total Revenue
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
                  Net Revenue
                </Typography>
                <Typography
                  align="center"
                  variant="h2"
                  component="h2"
                  className={classes.subtTitle}
                  className={classes.verticalBar}
                  style={{ color: "#1D2B44" }}
                >
                  <b>117</b>
                </Typography>
              </Grid>

              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  className={classes.title}
                >
                  Completed Payment
                </Typography>
                <Typography
                  align="center"
                  variant="h2"
                  component="h2"
                  className={classes.subtTitle}
                  className={classes.verticalBar}
                  style={{ color: "#1D2B44" }}
                >
                  <b>450</b>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  className={classes.title}
                >
                  Pending Payments
                </Typography>
                <Typography
                  align="center"
                  variant="h2"
                  component="h2"
                  className={classes.subtTitle}
                  className={classes.verticalBar}
                  style={{ color: "#1D2B44" }}
                >
                  <b>107</b>
                </Typography>
              </Grid>
            </Grid>
            <br />
            <br />
          </Grid>
          {/* card end */}
          <Grid item sm={12} style={{ marginLeft: "10px" }}>
            <Paper className={classes.paper}>
              <PaymentBarChart />
            </Paper>
            <br />
            <br />
            <br />
            <br />
          </Grid>
          <Grid item xs={12}></Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <PaymentAppbar />
              <Table />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
