import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';

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
  const [auth, setAuth] = React.useState("");
  const classes = useStyles();

  const handleLogin = (e) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    };
    fetch('http://localhost:8080/api/auth/login', options)
      .then(response => {
        return response.json()
      })
      .then(json => {
        if (json["message"] === "Login Successful!") {
          setEmail("");
          setPassword("");
          setAuth(true);
        } else {
          window.alert(json["error"]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleLogout = (e) => {
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    setAuth(false);
  }

  useEffect(() => {
    if (document.cookie) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  })

  const closedPage = (
    <div>
      <Navbar onClick={() => setDrawerOpen(!drawerOpen)} onClickLogout={handleLogout}/>
    </div>
  );

  const openPage = (
    <div>
      <Navbar className={classes.appBarShift} onClick={() => setDrawerOpen(!drawerOpen)} onClickLogout={handleLogout}/>
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
      { (!auth && document.cookie === "") ? welcomePage : mainApp }
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
