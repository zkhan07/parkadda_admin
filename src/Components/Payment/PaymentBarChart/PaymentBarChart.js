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
        hoverBackgroundColor: "#26272A",
        hoverBorderColor: "#26272A",
        data: [8500, 10000, 7000, 6500, 5900, 8000, 7600, 12000]
      }
    ]
  };

  const options = {
    cornerRadius: 20,
    responsive: true,
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
            fontColor: "black"
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Users",
            fontSize: 15,
            fontStyle: "bold",
            fontColor: "black"
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
        radius: 0,
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
          <Typography
            align="left"
            variant="h7"
            style={{ flex: 1 }}
            className={classes.discription}
          >
            OverView
          </Typography>
          <Dropdown />
          {/* <div>
            <select className={classes.dropdown}>
              <option style={{ padding: "20px !important" }}>7 Days</option>
              <option selected>1 Month</option>
              <option>3 Month</option>
              <option>6 Month</option>
              <option>1 Year</option>
              <option>All</option>
            </select>
          </div> */}
        </Toolbar>
        <Typography align="left" variant="h5" className={classes.title}>
          <b>Total Revenue</b>
        </Typography>
      </div>
      <br />
      <div className={classes.chartDiv}>
        <Bar data={bar} options={options} />
      </div>
    </div>
  );
}
