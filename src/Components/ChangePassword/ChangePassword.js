import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import LockIcon from "@material-ui/icons/Lock";
import { useStyles } from "./css";
import { useForm, Controller } from "react-hook-form";
import { Router } from "react-router-dom";

export const baseUrl = "/otopark/admin";

export default function ChangePassword() {
  const history = useHistory();
  const classes = useStyles();
  const { handleSubmit, reset, watch, control, register } = useForm();
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit = data => {
    console.log(data);
    if (data.password && data.email) {
      history.push(baseUrl + "/dashboard");
      setRedirect(true);
    } else {
      setError(true);
    }
  };

  // if(Redirect){

  // }

  return (
    <>
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

              <div className={classes.paper} style={{ marginTop: "20px" }}>
                <Typography component="h9" variant="h9">
                  Request a password change to your registered email. parkAdda
                  will send a message to the email address in your profile.
                  Click the link in the message, and enter a new password on the
                  page that opens.
                </Typography>
                <form
                  className={classes.form}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <label>
                    <b>Email Address</b>
                  </label>
                  <TextField
                    size="small"
                    style={{
                      backgroundColor: "#fff",
                      color: "1px solid #1717172E"
                    }}
                    inputRef={register}
                    className="textbox"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    // label="Username or email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter Your Email Address"
                    autoFocus
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlineIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                  <br />
                  <br />
                  <Grid container>
                    <Grid item xs>
                      <Button
                        align="center"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Send Password Reset
                      </Button>
                      <br />
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
    </>
  );
}
