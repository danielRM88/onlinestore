import React, { Component } from "react";

class Orders extends Component {
  render() {
    const { list, loading } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Orders</h1>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Date</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {list.map((order, i) => {
                  return (
                    <tr key={i} className="col-md-12">
                      <td>{order.email}</td>
                      <td>
                        {new Intl.DateTimeFormat("en-GB", {
                          year: "numeric",
                          month: "long",
                          day: "2-digit"
                        }).format(new Date(order.createdAt))}
                      </td>
                      <td>
                        {new Intl.NumberFormat("en-EU", {
                          style: "currency",
                          currency: "EUR"
                        }).format(order.total)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default Orders;
