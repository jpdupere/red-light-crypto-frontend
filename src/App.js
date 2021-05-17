import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Landing from './pages/Landing'
import { useWeb3React } from '@web3-react/core'

function App() {
  console.log(useWeb3React())
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
