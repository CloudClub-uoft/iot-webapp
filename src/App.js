import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import { makeStyles } from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  Main,
  Page1,
  Page2,
  Page3,
  HttpNotFound
} from './components/layout/Routes';

const drawerWidth = 64; // px

const useStyles = makeStyles(theme => ({
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  },
  content: {
    marginLeft: drawerWidth,
    paddingLeft: 12,
    paddingRight: 12,
  },
  contentFull: {
    paddingLeft: 12, 
    paddingRight: 12,
  },
}));

// Main App
function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  }

  const closedPage = (
    <div>
      <Navbar onClick={handleDrawerOpen}/>
    </div>
  );

  const openPage = (
    <div>
      <Navbar className={classes.appBarShift} onClick={handleDrawerOpen}/>
      <Sidebar /> 
    </div>
  );

  return (
    <div className="App"> 
      <Router>
        { drawerOpen ? openPage : closedPage }
        <br></br>
        <main className={ drawerOpen ? classes.content : classes.contentFull }>
          <RouterSwitch />
        </main>
      </Router>
    </div>
  );
}

// Routes for react-router-dom
const RouterSwitch = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/device">
        <Page1 />
      </Route>
      <Route path="/page2">
        <Page2 />
      </Route>
      <Route path="/page3">
        <Page3 />
      </Route>
      <Route path="*">
        <HttpNotFound />  
      </Route>
    </Switch>

  );
}

export default App;
