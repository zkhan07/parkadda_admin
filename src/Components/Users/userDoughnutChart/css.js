import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  chartText: {
    position: "absolute",
    top: "38%",
    left: "28%",
    zIndex: 1
  },
  innerDiv: {
    textAlign: "center",
    marginTop: "-220px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginTop: "-205px"
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: "-190px"
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      marginTop: "-190px"
    }
  },
  dis1: {
    color: "#606060",
    fontSize: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px"
    }
  },
  head: {
    color: "#FFC738",
    fontSize: "70px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px"
    }
  },
  dis2: {
    color: "#1D2B44",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px"
    }
  },
  chart: {
    marginLeft: "0px",
    [theme.breakpoints.up("xs")]: {
      marginLeft: "50px"
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "120px"
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "220px"
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "10px"
    }
  }
}));
