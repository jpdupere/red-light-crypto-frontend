import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './pages/Home'
import Restricted from './pages/Restricted'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/restricted">
          <Restricted />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
