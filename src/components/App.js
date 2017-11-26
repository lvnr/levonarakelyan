import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../components/HomePage'
import Languages from '../components/Languages'
import Interests from '../components/Interests'
import NotFoundPage from '../components/NotFoundPage'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
         <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/languages' component={Languages} />
            <Route path='/interests' component={Interests} />
            <Route component={NotFoundPage} />
         </Switch>
      </div>
    )
  }
}

export default App
