import React, { useEffect } from 'react';
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

import LoginForm from './components/layout/Login';

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
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [jwtToken, setJwt] = React.useState("");
  const classes = useStyles();

  const handleLogin = (e) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    };

    fetch('http://localhost:81/api/auth/login', options)
      .then(response => {
        return response.json()
      })
      .then(json => {
        if (json["message"] === "Login Successful!") {
          setJwt(json["token_i"]);
          setEmail("");
          setPassword("");
        } else {
          window.alert(json["error"]);
          setJwt("");
          setEmail("");
          setPassword("");
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  const closedPage = (
    <div>
      <Navbar onClick={() => setDrawerOpen(!drawerOpen)} onClickLogout={() => setJwt("")}/>
    </div>
  );

  const openPage = (
    <div>
      <Navbar className={classes.appBarShift} onClick={() => setDrawerOpen(!drawerOpen)} onClickLogout={() => setJwt("")}/>
      <Sidebar /> 
    </div>
  );

  const mainApp = (
    <Router>
      { drawerOpen ? openPage : closedPage }
      <br></br>
      <main className={ drawerOpen ? classes.content : classes.contentFull }>
        <RouterSwitch />
      </main>
    </Router>
  );

  const welcomePage = (
    <LoginForm onClick={handleLogin}
    onEmailChange={(e) => setEmail(e.target.value)}
    onPasswordChange={(e) => setPassword(e.target.value)}/>
  );

  return (
    <div className='App'>
      { jwtToken === "" ? welcomePage : mainApp }
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
      <Route path="/page1">
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
