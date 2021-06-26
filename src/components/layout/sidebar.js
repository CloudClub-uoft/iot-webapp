import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemText } from '@material-ui/core';

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List >
        <ListItem button>
          <ListItemText primary="ABC" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="ABC" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="ABC" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="ABC" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar