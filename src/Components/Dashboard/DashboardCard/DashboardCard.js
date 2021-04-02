import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import InfoIcon from "@material-ui/icons/Info";
import { useStyles } from "./css";

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const HtmlTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9"
    }
  }))(Tooltip);
  console.log(props);
  return (
    <Card className={classes.root} onClick={props.handleOpenModal}>
      <CardContent>
        <div align="right" style={{ marginTop: "-20px", marginRight: "-20px" }}>
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography variant="h7" color="inherit">
                  Click the box to view a detailed list of vehicles entered and
                  exited
                </Typography>
              </React.Fragment>
            }
          >
            <IconButton aria-label="discription">
              <InfoIcon style={{ color: "#1D2B44" }} />
            </IconButton>
          </HtmlTooltip>
        </div>
        <Typography component="p" style={{ marginTop: "-20px" }}>
          <img className={classes.iconImage} src={props.iconImage} />
          <p className={classes.iconNaming}>
            <b>{props.iconNaming}</b>
          </p>
        </Typography>
        <Grid container style={{ marginTop: "-15px" }}>
          <Grid item xs={6}>
            <p className={classes.vehicle}>
              <b>{props.vehicleOut}</b>
            </p>
            <p className={classes.vehicleNumber}>
              <b style={{ color: "#1D2B44" }}>{props.vehicleOutNumber}</b>
            </p>
            <div className={classes.verticalBar}></div>
          </Grid>
          <Grid item xs={6}>
            <p className={classes.vehicle}>
              <b>{props.vehicleIn}</b>
            </p>
            <p className={classes.vehicleNumber}>
              <b style={{ color: "#FFC738" }}>{props.vehicleInNumber}</b>
            </p>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.divbelowcard}>Capacity : {props.slots}</div>
          </Grid>
        </Grid>
        <Typography variant="body2" component="p"></Typography>
      </CardContent>
    </Card>
  );
}
