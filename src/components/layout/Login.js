import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Typography, Button, Link } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from '@material-ui/core/Input';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { InputAdornment } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/VisibilityOff';
import { OutlinedInput } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    maxWidth: 220,
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

const LoginForm = (props) => {
  const [showPassword, setShow] = React.useState(false);
  const classes = useStyles();

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  }

  const handleClickShowPassword = (e) => {
    setShow(!showPassword);
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form className={classes.form} >
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
              margin='normal'
              onChange={props.onEmailChange}
              maxwidth
              InputProps={{style: { padding:"0px 1.5ch 0px 1.5ch"},}}
            />
            <TextField
              label="Password"
              variant="outlined"
              id="Password"
              autoComplete="current-password"
              margin='normal'
              onChange={props.onPasswordChange}
              showPassword={showPassword}
              maxwidth
              InputProps={{
                style: { padding:"0px 0px 0px 1.5ch"},
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                type: (showPassword ? "text" : "password"),
              }} /> 

          </div>
          <Button type="submit" variant="contained" className={classes.button} onClick={props.onClick}>
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;