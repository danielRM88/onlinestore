import React, { Component } from "react";

class Messages extends Component {
  render() {
    const { messages, type } = this.props;

    let classType = type;
    if (type === "error") {
      classType = "danger";
    }

    if (messages !== undefined) {
      return (
        <div className="col-sm-12">
          {messages.map((message, index) => {
            return (
              <div
                key={index}
                className={`alert alert-${classType} alert-dismissible`}
                role="alert"
              >
                <p>{message}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Messages;
