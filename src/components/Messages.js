import React from "react";
class Message extends React.Component {
  render() {
    const { messages } = this.props;
    console.log("inside of message", messages);
    return messages.length ? (
      <div className="message-list" id="messages">
        <h1 style={{ margin: 0 }}>Messages👇</h1>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              <div className="message-sender">{message.senderId}</div>
              <div className="message-text">{message.text}</div>
            </li>
          ))}
        </ul>
      </div>
    ) : null;
  }
}

export default Message;
