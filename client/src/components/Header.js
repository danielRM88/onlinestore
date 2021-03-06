import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

class Header extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/products" className="nav-link">
                Products <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="orders" className="nav-link">
                Orders
              </Link>
            </li>
          </ul>
          <SearchForm onSearch={value => onSearch(value)} />
          <ul className="navbar-nav">
            <li className="nav-item nav-link">
              <Link to="/cart" className="btn btn-primary my-2 my-sm-0">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
