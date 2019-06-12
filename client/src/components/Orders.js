import React, { Component } from "react";

class Orders extends Component {
  render() {
    var list = [{}];
    return (
      <div>
        <h1>Orders</h1>
        <div className="row">
          {list.map((order, i) => {
            return <div className="col-md-12" />;
          })}
        </div>
      </div>
    );
  }
}

export default Orders;
