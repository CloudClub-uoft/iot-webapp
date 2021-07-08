import React from 'react';
import Sidebar from './components/layout/sidebar';
import Navbar from './components/layout/navbar';
import CardGrid from './components/layout/cards/CardGrid';
import Register from './components/layout/Register';

function App() {

  return (    
    <div className="App">      
      <Navbar/>
      <br></br>
      {/* <CardGrid />  */}
      <Register />    
      {/* Currently the sidebar is causing overlay issues. Uncomment the next line to see its behaviour. Reference: https://material-ui.com/components/drawers/ */}
      {/* <Sidebar/> */}      
    </div>    
  );
}

export default App;
