import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import TeamCreate from './components/football/TeamCreate'
import TeamIndex from './components/football/TeamIndex'
import TeamShow from './components/football/TeamShow'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/teams" component={TeamIndex} />
        <Route path="/teams/new" component={TeamCreate} />
        <Route path="/teams/:id" component={TeamShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
