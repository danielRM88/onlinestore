import React, { Component } from "react";

class CreateOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.placeOrder(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" required>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            value={this.state.value}
            onChange={this.handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Please check that the information is correct!
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Complete Order
        </button>
      </form>
    );
  }
}

export default CreateOrderForm;
