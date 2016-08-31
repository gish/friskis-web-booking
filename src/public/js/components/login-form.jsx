import React, { PropTypes } from 'react'

export default React.createClass({
  getInitialState () {
    return {
      username: '',
      password: ''
    }
  },

  propTypes: {
    onSubmit: PropTypes.func.isRequired
  },

  setUsername (evt) {
    const username = evt.target.value
    this.setState({ username })
  },

  setPassword (evt) {
    const password = evt.target.value
    this.setState({ password })
  },

  submit (evt) {
    const { username, password } = this.state

    evt.preventDefault()

    this.props.onSubmit({
      username,
      password
    })
  },

  render () {
    return (
      <form onSubmit={this.submit}>
        <ul>
          <li>
            <label>Kortnummer eller e-postadress</label>
            <input type='text' value={this.state.username} onChange={this.setUsername} />
          </li>
          <li>
            <label>Lösenord (födelsedatum)</label>
            <input type='password' value={this.state.password} onChange={this.setPassword} />
          </li>
          <li>
            <button type='submit'>Logga in</button>
          </li>
        </ul>
      </form>
    )
  }
})
