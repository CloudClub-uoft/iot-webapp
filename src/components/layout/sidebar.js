import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemText, makeStyles} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import TimelineIcon from '@material-ui/icons/Timeline';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { CallMissedSharp } from '@material-ui/icons';
import { findByLabelText, getRoles } from '@testing-library/react';

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
          <SearchIcon fontSize='large'/>
        </ListItem>
        <ListItem button>
          <HomeIcon fontSize='large'/>
        </ListItem>
        <ListItem button>
          <TimelineIcon fontSize='large'/>
        </ListItem>
        <ListItem button>
          <AssessmentIcon fontSize='large'/>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar