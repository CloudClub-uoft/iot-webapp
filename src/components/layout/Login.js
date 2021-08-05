import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Typography, Button, Link } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  form: {
    maxWidth: 200,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: theme.spacing(1),
    display: 'flex', 
    flexDirection: 'column',
  },
  inputInfo: {
    paddingTop: 15, //px
    paddingBottom: 15
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundImage: "linear-gradient(135deg,#1292fd 25%,#50BDE4 75%)", 
  },
  button: {
    backgroundColor: '#1292fd', 
    color: 'white'
  },
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
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon/>
        </Avatar>
        <form className={classes.form}>
          <Typography variant="h4">Login</Typography>
          <div className={classes.inputInfo}>
            <Typography variant="subtitle2">
              No account?{""} <a href="https://cloudclub.ca/register?r=/">Register</a>
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              id="Email"
              name="Email"
              autoComplete="email"
              autoFocus
              margin='normal'
              onChange={handleEmailChange}
            />
            <TextField
              label="Password"
              variant="outlined"
              id="Password"
              autoComplete="current-password"
              autoFocus
              margin='normal'
              onChange={handlePasswordChange}
            />
          </div>
          <Button type="submit" variant="contained" className={classes.button}>
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;