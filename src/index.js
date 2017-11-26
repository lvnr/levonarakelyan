/* eslint-disable import/default */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './store/configureStore'
require('./favicon.ico') // Tell webpack to load favicon.ico
import './styles/index.scss'

import App from './components/App'

const store = configureStore()

render(
  <Provider store={store}>
     <Router>
        <App />
     </Router>
  </Provider>, document.getElementById('app')
)
