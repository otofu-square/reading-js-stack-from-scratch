// @flow

import { STATIC_PATH } from '../shared/config'

const renderApp = (title: string) =>
  `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
    </head>
    <body>
      <h1>${title}</h1>
    </body>
  </html>
  `

export default renderApp
