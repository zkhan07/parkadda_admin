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
  flexBox: {
    display: "flex",
    justifyContent: "space-between"
  },
  heading: {
    flex: 1,
    color: "black",
    marginLeft: "-40px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-20px",
      marginBottom: "30px",
      fontSize: "20px"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      backgroundColor: "#F7FAFC"
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    height: "35px",
    backgroundColor: "#F7FAFC",
    boxShadow: "0px 3px 6px #1717172D",
    borderRadius: "5px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7FAFC"
  },
  inputRoot: {
    color: "black"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "100px"
    }
  },
  containerAdjust: {
    marginLeft: "0px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "12px"
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
    marginTop: "-125px",
    height: "120px",
    borderRight: "3px solid #959595",
    padding: "0.5em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-95px",
      height: "100px"
    }
  }
}));
