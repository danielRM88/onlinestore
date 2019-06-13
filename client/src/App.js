import React from "react";
import Header from "./components/Header";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";
import Orders from "./components/Orders";
import Home from "./components/Home";
import { getProductsRequest, getCartRequest } from "./actions/productsActions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store/store";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <MessageContainer />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/products"
          render={props => {
            store.dispatch(getProductsRequest());
            return <ProductsContainer />;
          }}
        />
        <Route
          exact
          path="/cart"
          render={props => {
            store.dispatch(getCartRequest());
            return <CartContainer />;
          }}
        />
        <Route path="/orders" component={Orders} />
      </div>
    </Router>
  );
}

export default App;
