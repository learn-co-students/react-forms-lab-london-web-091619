import React from 'react'

class TwitterMessage extends React.Component {
  state = {
    message: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <br />
        <span>
          Remaining characters:{' '}
          {this.props.maxChars - this.state.message.length}
        </span>
      </div>
    )
  }
}

export default TwitterMessage
