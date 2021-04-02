import { makeStyles } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
    height: "40px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  dropdown: {
    backgroundColor: "#1D2B44",
    color: "white",
    width: "120px",
    height: "40px",
    borderColor: "#1D2B44",
    boder: "1px solid #1D2B44",
    borderRadius: "50px",
    // border: "0px",
    outline: "0px",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      height: "35px"
    }
  },
  title: {
    marginTop: "-20px",
    color: "#1D1D1D",
    marginLeft: "20px",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      marginTop: "-20px"
    }
  },
  discription: {
    color: "#1D1D1D",
    fontSize: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px"
    }
  },
  chartDiv: {
    width: "78vw",
    height: "50vh",
    [theme.breakpoints.down("sm")]: {
      width: "93vw",
      height: "30vh"
    }
  }
}));
