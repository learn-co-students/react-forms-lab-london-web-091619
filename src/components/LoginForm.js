import React from 'react'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    // check that none of state's values are empty
    Object.values(this.state).every(val => val.length) &&
      this.props.handleLogin(e)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              value={this.state.username}
              onChange={this.handleChange}
              id="username"
              name="username"
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
              name="password"
              type="password"
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm
