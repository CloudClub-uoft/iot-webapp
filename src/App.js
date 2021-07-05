import React from 'react';
import Sidebar from './components/layout/sidebar';
import Navbar from './components/layout/navbar';
import CardGrid from './components/layout/cards/CardGrid';

import SidebarTemp from './components/layout/SidebarTemp';
import { makeStyles } from '@material-ui/core';


const drawerWidth = 64;

const useStyles = makeStyles(theme => ({
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  },
  content: {
    marginLeft: drawerWidth,
    padding: 15,
  },
}));

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  }

  const page1 = (
  <div className="App"> 
    { <Navbar onClick={handleDrawerOpen}/> }
    <br></br>
    { <CardGrid />}
  </div> );

  const page2 = (
    <div className="App"> 
      { <Navbar className={classes.appBarShift} onClick={handleDrawerOpen}/> }
      <br></br>
      { <Sidebar /> }
      <main className={classes.content}>
        {<CardGrid />}
      </main>
  </div> );

  return (
    drawerOpen ? page2 : page1
  );

}

export default App;
