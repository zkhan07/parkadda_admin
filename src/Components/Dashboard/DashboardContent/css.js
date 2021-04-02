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
  containerAdjust: {
    marginLeft: "0px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      marginRight: "10px"
    }
  },
  flexBox: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    marginBottom: "10px"
  },
  title: {
    fontSize: "35px",
    color: "white",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      fontSize: "25px"
    }
  },
  paper: {
    borderRadius: "10px",
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  mainRoot: {
    backgroundColor: "#1D2B44"
    // backgroundImage: require("../../../assets/images/mumbai.png")
    // opacity: "0.8",
    // backgroundColor: "#1D2B44"

    // background: `#1D2B44 ${require("../../../assets/images/mumbai.png")} no-repeat right top`
  },
  dropdown: {
    backgroundColor: "white",
    color: "#1D2B44",
    // marginRight: "-40px",
    width: "130px",
    height: "40px",
    borderColor: "#1D2B44",
    boder: "1px solid #1D2B44",
    borderRadius: "50px",
    // border: "0px",
    outline: "0px",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      // width: "40",
      height: "35px"
    }
  }
}));
