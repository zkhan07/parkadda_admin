import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./css";
import { useForm, Controller } from "react-hook-form";
import LoginModal from "../../util/LoginModal/LoginModal";
import { UserLogin } from "../../util/Services/Services";
import { Link, HashRouter, Redirect } from "react-router-dom";

export const baseUrl = "/otopark/admin";

export default function SignIn(props) {
  const history = useHistory();
  const classes = useStyles();
  const { handleSubmit, reset, watch, control, register, errors } = useForm();
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("payload")) {
      setRedirect(true);
      setError(false);
    }
  }, []);

  console.log(error);

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);

    if (data) {
      let formData = new FormData();
      formData.append("mobile", data.mobile);
      formData.append("password", data.password);
      setError(false);

      UserLogin(formData)
        .then(res => {
          console.log(res);
          if (res.data.message == "Success") {
            setError(false);
            sessionStorage.setItem("payload", JSON.stringify(res.data));
            setRedirect(true);
          } else {
            setRedirect(false);
            setError(true);
            setErrorMessage(res.data.message);
          }
        })
        .catch(err => {
          console.log(err.message);
          setError(true);
        });
    }
  };

  const handleOpenModal = () => {
    setError(true);
  };

  const handleCloseModal = () => {
    setError(false);
  };

  if (redirect) {
    return <Redirect to="/otopark/admin/dashboard" />;
  }

  return (
    <div>
      {error && (
        <LoginModal
          isOpen={error}
          openModal={handleOpenModal}
          closeModal={handleCloseModal}
          message={errorMessage}
        />
      )}
      <div
        style={{
          height: "100vh",
          backgroundColor: "#1D2B44"
        }}
      >
        <Container component="main" maxWidth="xs" className={classes.container}>
          <Card
            className={classes.root}
            style={{ marginTop: "0px", zIndex: "1", height: "550px" }}
          >
            <CardContent>
              <CssBaseline />
              <img
                className={classes.loginImage}
                src={require("../../assets/parkAddaImages/whiteLogo.jpg")}
              />

              <div className={classes.paper} style={{ marginTop: "0px" }}>
                <Typography component="h5" variant="h5">
                  <b style={{ color: "#1D2B44" }}>PICCS Admin</b>
                </Typography>
                <Typography
                  component="h9"
                  variant="h9"
                  style={{ color: "#1D2B44" }}
                >
                  Welcome back! Please login to continue
                </Typography>
                <form
                  className={classes.form}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <TextField
                    size="small"
                    style={{
                      backgroundColor: "#fff",
                      color: "1px solid #1717172E"
                    }}
                    inputRef={register({ required: true, maxLength: 30 })}
                    className="mobile"
                    variant="outlined"
                    margin="normal"
                    // required
                    fullWidth
                    id="mobile"
                    // label="Username or email"
                    name="mobile"
                    type="number"
                    placeholder="Mobile Number"
                    autoFocus
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneAndroidIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                  {errors.mobile && errors.mobile.type === "required" && (
                    <div
                      className="container"
                      style={{ margin: "10px", color: "red", width: "500px" }}
                    >
                      <div className="row">
                        <i
                          class="fa fa-exclamation-triangle"
                          aria-hidden="true"
                          style={{ margin: "5px" }}
                        ></i>
                        <span>Mobile No can not be Empty</span>
                      </div>
                    </div>
                  )}
                  <TextField
                    style={{ backgroundColor: "#fff" }}
                    size="small"
                    inputRef={register({ required: true, maxLength: 30 })}
                    className="password"
                    variant="outlined"
                    margin="normal"
                    // required
                    fullWidth
                    name="password"
                    // label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlinedIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                  {errors.password && errors.password.type === "required" && (
                    <div
                      className="container"
                      style={{ margin: "10px", color: "red", width: "500px" }}
                    >
                      <div className="row">
                        <i
                          class="fa fa-exclamation-triangle"
                          aria-hidden="true"
                          style={{ margin: "5px" }}
                        ></i>
                        <span>Password cannot be Empty</span>
                      </div>
                    </div>
                  )}
                  {/* new */}
                  {/* <div className={classes.forgotcheck}>
                    <div>
                      <FormControlLabel
                        control={
                          <Checkbox
                            inputRef={register}
                            value="remember"
                            name="checkbox"
                            color="grey"
                            // style={{ fontSize: "1px" }}
                          />
                        }
                        label="Remember me"
                      />
                    </div>
                    <div align="right">
                      <Link
                        to="/otopark/admin/changepassword"
                        variant="body2"
                        style={{ color: "#172B4D" }}
                      >
                        <p>Forgot password?</p>
                      </Link>
                    </div>
                  </div> */}
                  {/* new */}

                  <Grid container>
                    <Grid item xs>
                      <Link to="/dashboard">
                        <Button
                          align="center"
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                        >
                          Sign In
                        </Button>
                      </Link>
                      <br />
                      {/* <div align="center">
                        Now to Product?
                        <Link
                          href="#"
                          variant="body2"
                          style={{ color: "#1D2B44" }}
                        >
                          {"Sign Up"}
                        </Link>
                      </div> */}
                    </Grid>
                  </Grid>
                </form>
              </div>
            </CardContent>
          </Card>
        </Container>
        <footer
          style={{
            marginTop: "-300px",
            height: "300px",
            width: "100%",
            display: "flex",
            alignItems: "flex-end"
          }}
        >
          <img
            style={{ width: "100%", height: "auto" }}
            src={require("../../assets/parkAddaImages/parkMumbai.png")}
          />
        </footer>
      </div>
    </div>
  );
}
