import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, makeStyles} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import TimelineIcon from '@material-ui/icons/Timeline';
import AssessmentIcon from '@material-ui/icons/Assessment';

import {
  Link
} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  list: {
    alignItems: 'center',
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();
  return (
    <Drawer variant="permanent" >
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
            <Link to="/page3">
              <AssessmentIcon fontSize='large'/>
            </Link>
          </ListItem>
        </List>
    </Drawer>
  );
}

export default Sidebar;