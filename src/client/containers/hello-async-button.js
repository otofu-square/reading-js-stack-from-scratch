// @flow

import { connect } from 'react-redux'

import { sayHelloAsync } from '../actions/hello'
import Button from '../components/button'

const mapStateToProps = () => ({
  label: 'Say hello asynchronously and send 1234',
})

const mapDispatcherToProps = dispatch => ({
  handleClick: () => {
    dispatch(sayHelloAsync(1234))
  },
})

export default connect(mapStateToProps, mapDispatcherToProps)(Button)
