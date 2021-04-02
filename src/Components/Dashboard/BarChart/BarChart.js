import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./css";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography,
  Grid
} from "@material-ui/core";
import "chartjs-plugin-datalabels";
import { fontWeight } from "@material-ui/system";

export default function BarChart() {
  const classes = useStyles();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const bar = {
    labels: [
      "2 Wheeler",
      "3 Wheeler",
      "4 Wheeler",
      "Heavy SUV",
      "Truck",
      "E-Cars"
    ],
    datasets: [
      {
        barThickness: 30,
        label: "Goregaon Summary",
        backgroundColor: "#1D2B44",
        borderColor: "#1D2B44",
        hoverBackgroundColor: "#8898AA",
        hoverBorderColor: "#8898AA",
        data: [8000, 4500, 3000, 8000, 6000, 2500, 11000]
      }
    ]
  };

  const options = {
    tooltips: {
      enabled: true
      // custom: CustomTooltips
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Vehicles",
            fontSize: 15,
            fontStyle: "bold",
            fontColor: "black"
          },
          ticks: {
            fontColor: "#1D1D1D",
            fontWeight: "bold"
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Revenue",
            fontSize: 15,
            fontStyle: "bold",
            fontColor: "black"
          },
          ticks: {
            fontColor: "#1D1D1D",
            fontWeight: "bold"
          }
        }
      ]
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "top",
        backgroundColor: "#262F37",
        color: "white",
        font: {
          weight: "bold",
          family: "FontAwesome"
        }
      }
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 10,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  };
  return (
    <div
      style={{
        color: "white",
        borderRadius: "10px"
      }}
    >
      <div className={classes.root}>
        <Toolbar>
          <MuiThemeProvider theme={theme}>
            <Typography
              align="left"
              variant="h7"
              style={{ flex: 1, color: " #8898AA" }}
            >
              OVERVIEW
            </Typography>
          </MuiThemeProvider>

          <div className={classes.desktopView}>
            <div className={classes.paper} style={{ marginTop: "10px" }}>
              <Typography align="left" variant="h7">
                <b className={classes.totolCollection}>Total Collection</b>
              </Typography>
              <br />
              <img
                className={classes.rupeeIcon}
                src={require("../../../assets/icons/indianRupeeIcon.svg")}
              />
              <b className={classes.amount}>25,000</b>
              <img
                className={classes.growIcon}
                src={require("../../../assets/images/growupImg.svg")}
              />
            </div>
          </div>
          <div>
            <select className={classes.dropdown}>
              <option selected>Total Collection</option>
              <option>Pending Fees</option>
            </select>
          </div>
        </Toolbar>
        <MuiThemeProvider theme={theme}>
          <Typography
            align="left"
            variant="h5"
            // component="h2"
            style={{ marginLeft: "20px", marginTop: "-15px", color: "#1D1D1D" }}
          >
            Goregaon Summary
          </Typography>
        </MuiThemeProvider>
      </div>
      <br />

      <div className={classes.chartDiv}>
        <Bar data={bar} options={options} />
      </div>
    </div>
  );
}
