import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';


//styles for the AppBar
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    backgroundImage: "linear-gradient(135deg,#1292fd 25%,#50BDE4 75%)", 
    // backgroundColor: "transparent",
    // boxShadow: "0px 0px 0px 0px"
    // backgroundColor: "black"
  }
}));

//background-color: #50BDE4

const Navbar = (props) => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [signup, setSignup] = React.useState(false);
  const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignup = () => {
    setSignup(true);
  }

  return (
    <div className={classes.root}>
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label= {auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      
      <AppBar 
        position="static"
        className={props.className}
        style={{
          backgroundImage: "linear-gradient(135deg,#1292fd 25%,#50BDE4 75%)", 
        }}
        >
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={props.onClick}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h5" className={classes.title}>
            CloudDash
          </Typography>

          {auth && (
            <div>
              <IconButton
                aria-label="current user account"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Menu id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMountedtransformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
                >
                  <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                      <Badge badgeContent={1} color="secondary">
                        <MailIcon />
                      </Badge>
                    </IconButton>
                    <p>Messages</p>
                  </MenuItem>
                  <MenuItem>
                    <IconButton aria-label="show 11 new notifications" color="inherit">
                      <Badge badgeContent={0} color="secondary">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <p>Notifications</p>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Account Settings</MenuItem>
                </Menu>
                <Button edge="end" color="inherit" onClick={props.onClickLogout}>
                  Logout
                </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;