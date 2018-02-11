'use strict'
import React from 'react'
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom'
//import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import { HashRouter } from 'react-router-dom'
//import Navbar from './components/Navbar.jsx'
import Navbar from './components/Login.jsx'
import Some from './components/Some.jsx'
import Else from './components/Else.jsx'


import store from './store.js'
import { connect, Provider } from 'react-redux'


const ExampleApp = connect(
  ({ user }) => ({ user: user })
)(
  ({ user, children }) =>
    <div>
    <Navbar />


    </div>
  )
console.log("DDD", store)
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
        <div>
          <Route exact path="/" component={ExampleApp} />
          <Route path="/some" component={Some} />
        <Route path="/else" component={Else} />

          </div>

        </HashRouter>
    </Provider>,
    document.getElementById('main')

)
