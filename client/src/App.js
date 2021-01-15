import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import TeamCreate from './components/football/TeamCreate'
import TeamIndex from './components/football/TeamIndex'
import TeamShow from './components/football/TeamShow'
import PlayerIndex from './components/football/PlayerIndex'
import PlayerShow from './components/football/PlayerShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teams" component={TeamIndex} />
        <Route path="/teams/new" component={TeamCreate} />
        <Route path="/teams/:id" component={TeamShow} />
        <Route exact path="/players" component={PlayerIndex} />
        <Route path="/players/:id" component={PlayerShow} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
