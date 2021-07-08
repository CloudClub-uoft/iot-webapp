import React from 'react';
import Sidebar from './components/layout/sidebar';
import Navbar from './components/layout/navbar';

import SidebarTemp from './components/layout/SidebarTemp';
import { makeStyles } from '@material-ui/core';

import CardGrid from './components/layout/cards/CardGrid';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  Main,
  Page1,
  Page2,
  HttpNotFound
} from './components/layout/Routes';

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
    <div>
      <Navbar onClick={handleDrawerOpen}/>
    </div>
  );

  const page2 = (
    <div>
      <Navbar className={classes.appBarShift} onClick={handleDrawerOpen}/>
      <Sidebar /> 
    </div>
  );

  return (
    <div className="App"> 
      { drawerOpen ? page2 : page1 }
      <br></br>
      <main className={ drawerOpen ? classes.content : "" }>
        <RouterSwitch />
      </main>
    </div>
  );

}

const RouterSwitch = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="*">
            <HttpNotFound />  
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
