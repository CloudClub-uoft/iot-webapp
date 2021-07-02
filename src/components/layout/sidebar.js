import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemText, makeStyles} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import TimelineIcon from '@material-ui/icons/Timeline';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { CallMissedSharp } from '@material-ui/icons';
import { findByLabelText, getRoles } from '@testing-library/react';


const Sidebar = (props) => {
  return (
    <Drawer variant="permanent" >
      <List className={props.className}>
        <ListItem button>
          <SearchIcon />
        </ListItem>
        <ListItem button>
          <HomeIcon />
        </ListItem>
        <ListItem button>
          <TimelineIcon />
        </ListItem>
        <ListItem button>
          <AssessmentIcon />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar