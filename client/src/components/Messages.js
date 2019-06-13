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
                className={`alert alert-${classType} alert-dismissible fade show`}
                role="alert"
              >
                <p>{message}</p>
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
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
