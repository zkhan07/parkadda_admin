import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  loader: {
    color: "#1D2B44",
    display: "flex",
    flexDirection: "column",
    marginLeft: "47%",
    marginTop: "23%",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "47%",
      marginTop: "90%"
    }
  }
}));
