import React, { Component } from "react";
import Product from "./Product";
import CreateOrderForm from "./CreateOrderForm";

class Cart extends Component {
  render() {
    const { list, loading, removeFromCart, placeOrder } = this.props;
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
                total += product.price * 1;
                return (
                  <div key={i} className="col-md-12">
                    <Product
                      img={product.image}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      remove={true}
                      removeFromCart={() => removeFromCart(product.id)}
                      quantity={product.quantity}
                    />
                  </div>
                );
              })}
              <p>
                Total:{" "}
                {new Intl.NumberFormat("en-EU", {
                  style: "currency",
                  currency: "EUR"
                }).format(total)}
              </p>
            </div>
            <div className="col-md-4">
              <CreateOrderForm placeOrder={placeOrder} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
