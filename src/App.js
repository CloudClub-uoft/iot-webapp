import React from 'react';
import Sidebar from './components/layout/sidebar';
import Navbar from './components/layout/navbar';
import CardGrid from './components/layout/cards/CardGrid';

import SidebarTemp from './components/layout/SidebarTemp';
import { makeStyles } from '@material-ui/core';


const drawerWidth = 64;

const useStyles = makeStyles(theme => ({
  appBarShift: {
    marginLeft: 64,
    width: `calc(100% - ${drawerWidth}px)`
  },
  drawer: {
    width: drawerWidth,
  },
}));

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  }

  if (!drawerOpen) {
    return (    
      <div className="App">      
        { <Navbar onClick={handleDrawerOpen}/> }
        <br></br>
        { <CardGrid />}
        {/* Currently the sidebar is causing overlay issues. Uncomment the next line to see its behaviour. Reference: https://material-ui.com/components/drawers/ */}
        {/* <Sidebar/>       */}
        {/* <SidebarTemp /> */}
      </div>    
    );
  } else {
    return (    
      <div className="App">      
        { <Navbar className={classes.appBarShift} onClick={handleDrawerOpen}/> }
        <br></br>
        { <CardGrid />}
        {/* Currently the sidebar is causing overlay issues. Uncomment the next line to see its behaviour. Reference: https://material-ui.com/components/drawers/ */}
        { <Sidebar className={classes.drawer}/> }
        {/* <SidebarTemp /> */}
      </div>    
    );
  }

}

export default App;
