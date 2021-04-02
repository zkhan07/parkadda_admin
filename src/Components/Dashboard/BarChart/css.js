import { makeStyles } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
    height: "40px"
  },
  paper: {
    marginRight: "180px",
    padding: "10px",
    borderRadius: "10px",
    // padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "2px 2px 2px 2px grey",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
      padding: "5px"
    }
  },
  totolCollection: {
    fontSize: "15px",
    color: "black",
    marginLeft: "-40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      marginLeft: "0px"
    }
  },
  rupeeIcon: {
    width: "23px",
    height: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "10px",
      height: "10px"
    }
  },
  amount: {
    fontSize: "30px",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px"
    }
  },
  growIcon: {
    marginLeft: "20px",
    width: "23px",
    height: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2px",
      width: "10px",
      height: "10px"
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  dropdown: {
    backgroundColor: "#1D2B44",
    color: "white",
    width: "150px",
    height: "40px",
    boder: "1px solid #1D2B44",
    borderRadius: "50px",
    outline: "0px",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "35px"
    }
  },
  chartDiv: {
    width: "78vw",
    height: "50vh",
    [theme.breakpoints.down("sm")]: {
      width: "92vw",
      height: "30vh"
    }
  },
  desktopView: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));
