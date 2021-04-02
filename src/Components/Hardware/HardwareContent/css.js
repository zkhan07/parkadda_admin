import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "5px"
    }
  },
  mainTitle: {
    fontSize: "35px",
    marginTop: "20px",
    marginBottom: "40px",
    color: "#1D2B44",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      fontSize: "25px"
    }
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {
    color: "#1D1D1D",
    fontSize: 16,
    fontWeight: "bold"
    // font:" bold 20px Lato"
  },
  subTitle: {
    marginTop: "-20px",
    fontSize: "80px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px"
    },
    fontWeight: "bold"
  },
  verticalBar: {
    marginTop: "-20px",
    height: "120px",
    borderRight: "3px solid #959595",
    padding: "0.5em"
  },
  hardwareButton: {
    textTransform: "none",
    fontSize: "12px",
    marginLeft: "5px",
    width: "300px",
    height: "38px",
    color: "white",
    backgroundColor: "#1D2B44",
    border: "1px solid #1D2B44",
    borderRadius: "50px",
    "&:hover": {
      backgroundColor: "#1D2B44",
      color: "white",
      border: "1px solid #1D2B44"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px"
    }
  },
  image: {
    marginTop: "-50px",
    width: "800px",
    height: "300px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
      width: "300px",
      height: "300px"
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "50px",
      width: "450px",
      height: "400px"
    }
  }
}));
