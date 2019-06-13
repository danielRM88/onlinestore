import React, { Component } from "react";

class Order extends Component {
  render() {
    const { date, products, total } = this.props;
    return (
      <h1>Order</h1>
      // <div className="card bg-light border-secondary mb-3">
      //   <div className="row no-gutters">
      //     <div className="col-md-4">
      //       <img src={img} className="card-img" alt="..." />
      //     </div>
      //     <div className="col-md-8">
      //       <div className="card-body">
      //         <h5 className="card-title">{title}</h5>
      //         <p className="card-text">{description}</p>
      //         {quantity !== undefined ? (
      //           <p class="card-text">
      //             <small class="text-muted">Quantity: {quantity}</small>
      //           </p>
      //         ) : (
      //           <p />
      //         )}
      //         {remove ? (
      //           <button className="btn btn-danger" onClick={removeFromCart}>
      //             Remove from cart
      //           </button>
      //         ) : (
      //           <button className="btn btn-primary" onClick={addToCart}>
      //             Add to cart
      //           </button>
      //         )}
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Order;
