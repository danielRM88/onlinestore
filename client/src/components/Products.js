import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    const { list, loading } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Products</h1>
          <div className="row">
            {list.map((product, i) => {
              return (
                <div key={i} className="col-md-12">
                  <Product
                    img={product.img}
                    title={product.title}
                    description={product.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default Products;
