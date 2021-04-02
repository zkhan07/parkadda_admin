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
  bgImage: {
    width: "100%",
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      height: "200px"
    }
  }
}));
