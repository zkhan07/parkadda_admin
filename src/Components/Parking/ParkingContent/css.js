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
    color: "#1D2B44",
    fontSize: 14,
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: "80px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px"
    },
    fontWeight: "bold"
  },
  verticalBar: {
    marginTop: "-100px",
    height: "100px",
    borderRight: "3px solid #959595",
    padding: "0.5em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-70px",
      height: "80px"
    }
  }
}));
