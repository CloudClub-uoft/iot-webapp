import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

//styles for the AppBar
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
    
  const classes = useStyles();

  //Component state variables?
  const [setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          id="navbar"
        >        
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Dash
        </Typography>
        <Button edge="end" color="inherit" onClick={handleOpen}>
          Signup
        </Button>
      </Toolbar>      
    </AppBar>
  );

};

export default Navbar;