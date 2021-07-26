import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Typography, Button, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    width: 250,
    textAlign: "center"
  },
  inputInfo: {
    paddingTop: 10, //px
    paddingBottom: 10
  }
}));

const LoginForm = () => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form className={classes.form} autoComplete="off">
      <Typography variant="h5">Login</Typography>
      <div className={classes.inputInfo}>
        <Typography variant="subtitle2">
          No account? <Link href="#">Register</Link>
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          onChange={handleEmailChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          onChange={handlePasswordChange}
        />
      </div>
      <Button variant="outlined" color="primary">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;