import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Landing from './pages/Landing'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
        <Route path="/restricted">
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
