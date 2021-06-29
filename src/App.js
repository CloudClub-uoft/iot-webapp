import React from 'react';
import Sidebar from './components/layout/sidebar';
import Navbar from './components/layout/navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import {
  Main,
  Page1,
  Page2,
  HttpNotFound
} from './components/Routes';

function App() {

  return (    
    <div className="App">      
      <Navbar/>
      <Router>
        {/* Sidebar should be within this router tag, and should have the "Link to=" as well */}
        <nav>
            <Link to="/">Main</Link>
            <Link to="/page1">Page1</Link>
            <Link to="/page2">Page2</Link>
        </nav>
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

      {/* Currently the sidebar is causing overlay issues. Uncomment the next line to see its behaviour. Reference: https://material-ui.com/components/drawers/ */}
      {/* <Sidebar/> */}      
    </div>    
  );
}

export default App;
