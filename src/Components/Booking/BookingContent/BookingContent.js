import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import BookingBarChart from "../BookingBarChart/BookingBarChart";
import BookingTable from "../BookingTable/BookingTable";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  const HtmlTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9"
    }
  }))(Tooltip);

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.flexBox}>
          <div>
            <h2 className={classes.mainTitle}>Booking Overview</h2>
          </div>
          <div style={{ marginTop: "30px" }}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ color: "grey" }} />
              </div>
              <InputBase
                placeholder="Search by Name, Date, Type"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
        </div>

        <Grid container spacing={1}>
          {/* card */}

          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Typography
              align="center"
              variant="body2"
              component="p"
              className={classes.title}
            >
              Total Bookings
              <br />
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography variant="h7" color="inherit">
                      Total parking listings booked by Guests
                    </Typography>
                  </React.Fragment>
                }
              >
                <IconButton aria-label="discription">
                  <img
                    src={require("../../../assets/icons/question-markIcon.svg")}
                  />
                </IconButton>
              </HtmlTooltip>
            </Typography>
            <MuiThemeProvider theme={theme}>
              <Typography
                align="center"
                variant="h2"
                component="h2"
                className={classes.subtTitle}
                style={{ color: "#1D2B44" }}
              >
                <b>87</b>
              </Typography>
            </MuiThemeProvider>
            <div className={classes.verticalBar}></div>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Typography
              align="center"
              variant="body2"
              component="p"
              className={classes.title}
            >
              Awaiting Confirmation <br />
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography variant="h7" color="inherit">
                      Total pending bookings made by Guests that are awaiting
                      confirmation by Hosts
                    </Typography>
                  </React.Fragment>
                }
              >
                <IconButton aria-label="discription">
                  <img
                    src={require("../../../assets/icons/question-markIcon.svg")}
                  />
                </IconButton>
              </HtmlTooltip>
            </Typography>
            <Typography
              align="center"
              variant="h2"
              component="h2"
              className={classes.subtTitle}
              style={{ color: "#FFC738" }}
            >
              <b>117</b>
            </Typography>
            <div className={classes.verticalBar}></div>
          </Grid>

          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Typography
              align="center"
              variant="body2"
              component="p"
              className={classes.title}
            >
              Pending Bookings <br />
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography variant="h7" color="inherit">
                      Total bookings confirmed in advance by Hosts
                    </Typography>
                  </React.Fragment>
                }
              >
                <IconButton aria-label="discription">
                  <img
                    src={require("../../../assets/icons/question-markIcon.svg")}
                  />
                </IconButton>
              </HtmlTooltip>
            </Typography>
            <Typography
              align="center"
              variant="h2"
              component="h2"
              className={classes.subtTitle}
              style={{ color: "#1D2B44" }}
            >
              <b>450</b>
            </Typography>
            <div className={classes.verticalBar}></div>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Typography
              align="center"
              variant="body2"
              component="p"
              className={classes.title}
            >
              Completed Bookings <br />
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography variant="h7" color="inherit">
                      Total bookings successfully completed with payment settled
                    </Typography>
                  </React.Fragment>
                }
              >
                <IconButton aria-label="discription">
                  <img
                    src={require("../../../assets/icons/question-markIcon.svg")}
                  />
                </IconButton>
              </HtmlTooltip>
            </Typography>
            <Typography
              align="center"
              variant="h2"
              component="h2"
              className={classes.subtTitle}
              style={{ color: "#1D2B44" }}
            >
              <b>107</b>
            </Typography>
            <div className={classes.verticalBar}></div>
          </Grid>

          {/* card end */}

          <Grid item sm={12}>
            <br />
            <br />
            <Paper
              className={classes.paper}
              className={classes.containerAdjust}
            >
              <BookingBarChart />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <br />
            <br />
            <Paper className={classes.paper}>
              <BookingTable />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
