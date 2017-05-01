// @flow

import { connect } from 'react-redux'

import MessageAsync from '../components/message'

const mapStateToProps = state => ({
  messageAsync: state.hello.get('messageAsync'),
})

export default connect(mapStateToProps)(MessageAsync)
