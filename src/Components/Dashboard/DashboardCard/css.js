import { makeStyles } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 175,
    height: "190px",
    paddingBottom: "20px",
    borderRadius: "10px",
    // overflowX: "auto"
    "&:hover": {
      cursor: "pointer"
    }
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  iconImage: {
    width: "40px",
    height: "40px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  iconNaming: {
    color: "#1D2B44",
    fontSize: "12px",
    textAlign: "center",
    marginTop: "-5px",
    padding: "5px"
  },
  vehicle: {
    fontSize: "12px",
    textAlign: "center"
  },
  vehicleNumber: {
    marginTop: "-15px",
    fontSize: "20px",
    textAlign: "center"
  },
  verticalBar: {
    marginTop: "-60px",
    height: "40px",
    borderRight: "1px solid black",
    padding: "0.5em"
    // [theme.breakpoints.down("sm")]: {
    //   height: "80px"
    // }
  },
  divbelowcard: {
    display: "flex",
    color: "#1D2B44",
    justifyContent: "center"
  }
}));
