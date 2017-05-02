// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import { APP_NAME } from './config'
import Nav from './components/nav'
import HomePage from './components/pages/home'
import HelloPage from './components/pages/hello'
import HelloAsyncPage from './components/pages/hello-async'
import NotFoundPage from './components/pages/not-found'
import { HOME_PAGE_ROUTE, HELLO_PAGE_ROUTE, HELLO_ASYNC_PAGE_ROUTE } from './routes'

const App = () => (
  <div>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
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
