import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemText, makeStyles} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import TimelineIcon from '@material-ui/icons/Timeline';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { CallMissedSharp } from '@material-ui/icons';
import { findByLabelText, getRoles } from '@testing-library/react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import {
  Main,
  Page1,
  Page2,
  HttpNotFound
} from './Routes';

const useStyles = makeStyles(theme => ({
  list: {
    alignItems: 'center',
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();
  return (
    <Drawer variant="permanent" >
      <Router>        
        <List className={classes.list}>
          <ListItem button>
            <Link to="/">
              <SearchIcon fontSize='large'/>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/page1">
              <HomeIcon fontSize='large'/>  
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/page2">
              <TimelineIcon fontSize='large'/>  
            </Link>
          </ListItem>
          <ListItem button>
            <AssessmentIcon fontSize='large'/>
          </ListItem>
        </List>
      </Router>
    </Drawer>
  );
}

export default Sidebar;