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
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Dropdown from "../../../util/Dropdown/Dropdown";
import "chartjs-plugin-datalabels";
import { useStyles } from "./css";

export default function BarChart() {
  const classes = useStyles();
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
    labels: ["January", "February", "March", "April", "May", "June", "july"],
    datasets: [
      {
        label: "Bookings",
        backgroundColor: "#1D2B44",
        borderColor: "#1D2B44",
        barThickness: 30,
        hoverBackgroundColor: "white",
        hoverBorderColor: "white",
        data: [9000, 7000, 6500, 5900, 8000, 8100, 5600, 10000]
      }
    ]
  };

  const options = {
    tooltips: {
      enabled: true
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
            labelString: "Month",
            fontSize: 15,
            fontStyle: "bold",
            fontColor: "white"
          },
          ticks: {
            fontColor: "white"
            // fontSize: 14
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Total Bookings",
            fontSize: 15,
            fontStyle: "bold",
            fontColor: "white"
          },
          ticks: {
            fontColor: "white"
            // fontSize: 14
          }
        }
      ]
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "top",
        backgroundColor: "#fff",
        color: "#262F37",
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
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#2e446b",
        color: "white",
        borderRadius: "10px"
      }}
    >
      <div className={classes.root}>
        <Toolbar>
          <Typography
            align="left"
            variant="h7"
            style={{ flex: 1 }}
            className={classes.discription}
          >
            Overview
          </Typography>
          <Dropdown />
          {/* <div>
            <select className={classes.dropdown}>
              <option>Date</option>
              <option selected>Month</option>
              <option>Year</option>
              <option>Date Between</option>
            </select>
          </div> */}
        </Toolbar>
        <Typography align="left" variant="h5" className={classes.title}>
          Total Bookings
        </Typography>
      </div>
      <br />
      <div className={classes.chartDiv}>
        <Bar data={bar} options={options} topBorderRadius={150} />
      </div>
    </div>
  );
}
