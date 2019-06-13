import React, { Component } from "react";
import Product from "./Product";

class Cart extends Component {
  render() {
    const { list, loading, removeFromCart } = this.props;
    let total = 0;
    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Shopping Cart</h1>
          <div className="row">
            <div className="col-md-8">
              {list.map((product, i) => {
                total += product.price * product.quantity;
                return (
                  <div key={i} className="col-md-12">
                    <Product
                      img={product.img}
                      title={product.title}
                      description={product.description}
                      remove={true}
                      removeFromCart={() => removeFromCart(product)}
                      quantity={product.quantity}
                    />
                  </div>
                );
              })}
              <p>Total: {total} USD</p>
            </div>
            <div className="col-md-4">
              <form>
                <div class="form-group">
                  <label for="email" required>
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    Please check that the information is correct!
                  </small>
                </div>
                <button type="submit" class="btn btn-primary">
                  Place order
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
