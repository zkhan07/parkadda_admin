import { makeStyles } from "@material-ui/core/styles";
import shadows from "@material-ui/core/styles/shadows";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "276px",
    height: "600px",
    backgroundColor: "#fff",
    boxShadow: "#2C28281C",
    borderRadius: "10px",
    "& label.Mui-focused": {
      color: "#1D2B44"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#1D2B44"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black"
      },
      "&:hover fieldset": {
        borderColor: "#1D2B44"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1D2B44"
      }
    }
  },
  container: {
    minHeight: "100vh", // height of the browser viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    textTransform: "none",
    marginTop: "20px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 50,
    width: "50%",
    color: "#fff",
    backgroundColor: "#1D2B44",
    border: "1px solid #1D2B44",
    "&:hover": {
      background: "#fff",
      color: "#1D2B44",
      border: "1px solid #1D2B44"
    }
  },
  forgotcheck: {
    display: "flex",
    justifyContent: "space-between"
  },
  textbox: {
    color: "#1717172E",
    backgroundColor: "black",
    "&:hover": {
      color: "#1717172E"
    }
  },
  loginImage: {
    marginTop: "-20px",
    width: "250px",
    height: "150px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }
}));
