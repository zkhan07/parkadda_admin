import { makeStyles, fade } from "@material-ui/core/styles";
import { height } from "@material-ui/system";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  // button: {
  //   "&:click": {
  //     backgroundColor: "#D9F9FF"
  //   },
  //   "&:active": {
  //     backgroundColor: "blue"
  //   },
  //   "&:hover": {
  //     backgroundColor: "#D9F9FF"
  //   }
  //   // "&:active": {
  //   //   backgroundColor: "blue"
  //   // }
  // },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  linkstyleprimary: {
    textDecoration: "none",
    backgroundColor: "#1D2B44",
    color: "white",
    "&:focus": {
      backgroundColor: "#1D2B44"
    }
  },
  linkstylesecondary: {
    backgroundColor: "#1D2B44",
    color: "white"
  }
}));
