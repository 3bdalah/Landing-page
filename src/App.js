import React from 'react';
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home"
import Error from "./pages/Error"
import Navbar from "./components/Navbar"

import  {Route, Switch } from 'react-router-dom'
function App() {
  return (
    <>
    <Navbar/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route  component={Error}/>
      </Switch>
     </>
  );
}

export default App;
