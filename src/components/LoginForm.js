import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsername = event => {
    this.setState({username: event.target.value})
  }

  handleUserPassword = event => {
    this.setState({password: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    if(!this.state.username || !this.state.password) return;
    this.props.handleLogin(this.state.username,this.state.password)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
               id="username"
               type="text"
               name="username"
               value={this.state.username}
               onChange={event => this.handleUsername(event)}
                />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={event => this.handleUserPassword(event)}
              />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
