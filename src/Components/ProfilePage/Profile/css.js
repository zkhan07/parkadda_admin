import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  mainRoot: {
    flexGrow: 1,
    marginTop: "-60px",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
      marginLeft: "-4px",
      marginRight: "-4px",
      marginTop: "-50px"
    }
  },
  root: {
    flexGrow: 1,
    zIndex: 9999,

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
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  fixedAppbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: "1",
    width: "100%"
  },
  myProfileText: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#1D2B44"
  },
  profileImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100px",
    height: "100px"
  },
  passwordBtn: {
    textTransform: "none",
    padding: "5px",
    fontSize: "15px",
    width: "200px",
    borderRadius: "50px",
    color: "#1D2B44",
    backgroundColor: "#fff",
    border: "2px solid #1D2B44",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    "&:hover": {
      background: "#1D2B44",
      color: "#fff",
      border: "2px solid #1D2B44"
    }
  },
  saveButton: {
    textTransform: "none",
    padding: "5px",
    fontSize: "18px",
    width: "250px",
    borderRadius: "50px",
    color: "#1D2B44",
    backgroundColor: "#fff",
    border: "2px solid #1D2B44",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    "&:hover": {
      background: "#1D2B44",
      color: "#fff",
      border: "2px solid #1D2B44"
    }
  },
  cancelButton: {
    textTransform: "none",
    marginRight: "10px",
    padding: "5px",
    width: "100px",
    borderRadius: "10px",
    color: "#1D2B44",
    backgroundColor: "#fff",
    border: "2px solid #1D2B44",
    "&:hover": {
      background: "#1D2B44",
      color: "#fff",
      border: "2px solid #1D2B44"
    }
  }
}));
