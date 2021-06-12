import React from 'react'
import Sidebar from './components/layout/sidebar'
import Navbar from './components/layout/navbar'

function App() {

  return (    
    <div className="App">      
      <Navbar/>
      {/* Currently the sidebar is causing overlay issues. Uncomment the next line to see its behaviour. Reference: https://material-ui.com/components/drawers/ */}
      {/* <Sidebar/> */}      
    </div>    
  );
}

export default App;
