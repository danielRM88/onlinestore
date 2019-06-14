import React, { Component } from "react";

class Product extends Component {
  render() {
    const {
      img,
      title,
      description,
      cart,
      remove,
      price,
      addToCart,
      removeFromCart,
      quantity
    } = this.props;
    return (
      <div className="card bg-light border-secondary mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={img} className="card-img" alt={title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">
                  Price:{" "}
                  {new Intl.NumberFormat("en-EU", {
                    style: "currency",
                    currency: "EUR"
                  }).format(price)}
                </small>
              </p>
              {quantity !== undefined ? (
                <p className="card-text">
                  <small className="text-muted">Quantity: {quantity}</small>
                </p>
              ) : (
                <p />
              )}
              {!cart ? (
                remove ? (
                  <button className="btn btn-danger" onClick={removeFromCart}>
                    Remove from cart
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={addToCart}>
                    Add to cart
                  </button>
                )
              ) : (
                <p className="card-text">
                  <small className="text-muted">Product added to cart</small>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
