import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './../actions.js'
import LoginFormComponent from './../components/login-form.jsx'

const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onSubmit: actions.setCredentials
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormComponent)
