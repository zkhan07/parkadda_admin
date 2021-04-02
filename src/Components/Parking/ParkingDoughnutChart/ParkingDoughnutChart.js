import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useStyles } from "./css";

export default function DoughnutChart() {
  const classes = useStyles();

  const doughnut = {
    labels: [
      "Completed Parking",
      "Total Parking",
      "Active Parking",
      "Available Parking"
    ],
    datasets: [
      {
        data: [200, 150, 80, 100],
        backgroundColor: ["#1D2B44", "#dbe3f0", "#5d81bb", "#3c5c90"],
        hoverBackgroundColor: ["#1D2B44", "#dbe3f0", "#5d81bb", "#3c5c90"]
      }
    ]
  };

  const options = {
    cutoutPercentage: 80,
    tooltips: {
      enabled: true
    },
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    },
    plugins: {
      datalabels: {
        display: false
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
    <div className={classes.chart}>
      <Doughnut data={doughnut} options={options} height={250} />
      {/* start */}
      <div className={classes.innerDiv}>
        <span className={classes.dis1}>
          <b>Parking Overview</b>
        </span>
        <br />
        <span className={classes.head}>
          <b>200</b>
        </span>
        <br />
        <span className={classes.dis2}>
          <b>Active Parkings</b>
        </span>
      </div>
      {/* end */}
    </div>
  );
}
