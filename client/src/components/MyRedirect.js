import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class MyRedirect extends Component {
  render() {
    if (this.props.toProducts === true) {
      return <Redirect to="/products" />;
    }
    return <div />;
  }
}

export default MyRedirect;
