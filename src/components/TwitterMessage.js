import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {messageValue: ""};
  }

  handleChange = (e) => {
    this.setState({messageValue: e.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.messageValue} onChange={this.handleChange}/>        
        <h1>Remaining: {this.props.maxChars - this.state.messageValue.length}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
