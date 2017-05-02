// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
} from '../routes'

const pages = [
  { route: HOME_PAGE_ROUTE, label: 'Home' },
  { route: HELLO_PAGE_ROUTE, label: 'Say Hello' },
  { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Asynchronously' },
  { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' },
]

const Nav = () => (
  <nav>
    <ul>
      {pages.map(page => (
        <li key={page.route}>
          <NavLink to={page.route} activeStyle={{ color: 'limegreen' }} exact>{page.label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
