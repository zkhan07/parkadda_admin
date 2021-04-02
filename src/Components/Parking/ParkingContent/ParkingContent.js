import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import DoughnutChart from "../userDoughnutChart/UserDoughnutChart";
// import Card from "../UserCard/UserCard";
import ParkingTable from "../ParkingTable/ParkingTable";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ParkingAppBar from "../ParkingAppbar/ParkingAppbar";
import ParkingDoughnutChart from "../ParkingDoughnutChart/ParkingDoughnutChart";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";
import { useStyles } from "./css";
// import ReuseTable from "../../../util/ReuseTable/ReuseTable";

export default function FullWidthGrid(props) {
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
        <h2 className={classes.mainTitle}>Parking Overview</h2>
        <Grid container spacing={1}>
          <Grid item lg={4}>
            <ParkingDoughnutChart />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={8}
            style={{ marginTop: "90px" }}
          >
            <Grid container spacing={1}>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Typography align="center" className={classes.title}>
                  Completed Parking
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Typography variant="h7" color="inherit">
                          Total completed parking by visitors and otopark
                          registered Guests
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
                {/*  */}
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
                <Typography align="center" className={classes.title}>
                  Total Parking
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Typography variant="h7" color="inherit">
                          Total number of parking spots in facility (Active
                          Parking + Available Parking)
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
                  // className={classes.verticalBar}
                  style={{ color: "#FFC738" }}
                >
                  <b>117</b>
                </Typography>
                <div className={classes.verticalBar}></div>
              </Grid>

              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Typography align="center" className={classes.title}>
                  Active Parking
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Typography variant="h7" color="inherit">
                          Total number of vehicles parked which have not exited
                          the facility yet
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
                <Typography align="center" className={classes.title}>
                  Available Parking
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Typography variant="h7" color="inherit">
                          Total number of open parking spaces available
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
                  // className={classes.verticalBar}
                >
                  <b>107</b>
                </Typography>
                <div className={classes.verticalBar}></div>
              </Grid>
            </Grid>
          </Grid>
          {/* card end */}
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <br />
            <br />
            <br />
            <br />
            <Paper className={classes.paper}>
              <ParkingAppBar />
              <ParkingTable />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

// const [items, setItems] = useState("");

// useEffect(() => {
//   axios
//     .get(`https://jsonplaceholder.typicode.com/todos`)
//     .then(res => {
//       console.log(res.data);
//       setItems(res.data);
//     })
//     .catch(err => console.log(err));
// }, []);
// console.log(items);
