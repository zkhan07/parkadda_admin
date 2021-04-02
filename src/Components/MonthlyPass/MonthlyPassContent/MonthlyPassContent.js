import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import MonthlyBarChart from "../MonthlyBarChart/MonthlyBarChart";
import BookingTable from "../MontlyPassTable/MonthlyPassTable";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const [twoWheeler, setTwoWheeler] = useState("");
  const [threeWheeler, setThreeWheeler] = useState("");

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

  const fetchValue = e => {
    console.log({ [e.target.value]: e.target.value });
    // setThreeWheeler({ [e.target.value]: e.target.value });
  };

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.flexBox}>
          <div>
            <h2 className={classes.mainTitle}>Monthly Pass Overview</h2>
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

          <Grid item xs={6} sm={6} md={3} lg>
            <Typography
              align="center"
              variant="body2"
              component="p"
              className={classes.title}
            >
              Total Monthly Passes
              <br />
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography variant="h7" color="inherit">
                      Total Monthly Passes issued and currently active
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
                <b>98</b>
              </Typography>
              <div className={classes.verticalBar}></div>
            </MuiThemeProvider>
          </Grid>

          <Grid item xs={6} sm={6} md={3} lg>
            <Typography
              align="center"
              variant="body2"
              component="p"
              className={classes.title}
            >
              Total Transactions <br />
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography variant="h7" color="inherit">
                      Total parking lot entry and exit transactions completed
                      from Monthly Pass holders
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
              style={{ color: "#FFC738" }}
              className={classes.subtTitle}
            >
              <b>450</b>
            </Typography>
            <div className={classes.verticalBar}></div>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg>
            <Typography
              align="center"
              variant="body2"
              component="p"
              className={classes.title}
            >
              Total Entries
              <br />
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography variant="h7" color="inherit">
                      Total parking lot entries completed by Monthly Pass
                      holders
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
          <Grid item xs={6} sm={6} md={3} lg>
            <Typography
              align="center"
              variant="body2"
              component="p"
              className={classes.title}
            >
              Total Exits <br />
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography variant="h7" color="inherit">
                      Total parking lot exits and payments completed by Monthly
                      Pass holders
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
          <Grid item xs={6} sm={6} md={3} lg>
            <Typography
              align="center"
              variant="body2"
              component="p"
              className={classes.title}
            >
              Total Revenue <br />
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography variant="h7" color="inherit">
                      Total parking fee revenue collected by Monthly Pass
                      holders
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
              <b>205</b>
            </Typography>
            <div className={classes.verticalBar}></div>
          </Grid>
          {/* card end */}

          <Grid item sm={12}></Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <br />
            <br />
            {threeWheeler && threeWheeler}
            <div>
              <select
                onChange={value => fetchValue(value)}
                className={classes.dropdown}
              >
                <option
                  value="2 Wheeler"
                  name="two wheel"
                  selected
                  onClick={value => fetchValue(value)}
                >
                  2 Wheeler
                </option>
                <option onClick={value => fetchValue(value)} value="3 Wheeler">
                  3 Wheeler
                </option>
                <option onClick={value => fetchValue(value)} value="4 Wheeler">
                  4 Wheeler
                </option>
                <option
                  onClick={value => fetchValue(value)}
                  value="4 Wheeler Heavy"
                >
                  4 Wheeler Heavy
                </option>
                <option onClick={value => fetchValue(value)} value="Truck">
                  Truck
                </option>
                <option onClick={value => fetchValue(value)} value="E-Cars">
                  E-Cars
                </option>
              </select>
              <br />
              <br />
            </div>
          </Grid>

          <Grid item sm={12}></Grid>

          <Grid item sm={12}>
            <Paper className={classes.paper}>
              <MonthlyBarChart />
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
