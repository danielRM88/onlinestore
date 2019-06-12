import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  render() {
    const { img, title, description } = this.props;
    return (
      <div className="card bg-light border-secondary mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={img} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <Link to="" className="btn btn-primary">
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
