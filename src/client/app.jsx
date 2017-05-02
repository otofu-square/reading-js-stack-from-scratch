// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import { APP_NAME } from '../shared/config'
import Nav from './components/nav'
import HomePage from './components/pages/home'
import HelloPage from './components/pages/hello'
import HelloAsyncPage from './components/pages/hello-async'
import NotFoundPage from './components/pages/not-found'
import { HOME_PAGE_ROUTE, HELLO_PAGE_ROUTE, HELLO_ASYNC_PAGE_ROUTE } from '../shared/routes'

const App = () => (
  <div>
    <h1>{APP_NAME}</h1>
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
      <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
)

export default App
