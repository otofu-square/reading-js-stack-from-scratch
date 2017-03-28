import 'babel-polyfill'

import { APP_CONTAINER_SELECTOR } from '../shared/config'

// eslint-disable-next-line no-undef
document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = '<h1>Hello Webpack !!</h1>'
