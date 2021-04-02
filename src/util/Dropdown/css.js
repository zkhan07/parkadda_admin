import { makeStyles, fade } from "@material-ui/core/styles";
import { borderColor } from "@material-ui/system";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  dropdown: {
    textTransform: "none",
    width: "150px",
    height: "40px",
    color: "#1D2B44",
    backgroundColor: "white",
    border: "1px solid #1D2B44",
    borderRadius: "50px",
    outline: "0px",
    padding: "10px",
    "&:hover": {
      color: "#1D2B44",
      backgroundColor: "white",
      border: "1px solid #1D2B44"
    },
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      height: "35px"
    }
  },
  button: {
    padding: "10px",
    marginLeft: "5px"
  }
}));
