import React from "react";
import Header from "./components/Header";
import ProductsContainer from "./containers/ProductsContainer";
import OrdersContainer from "./containers/OrdersContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";
import Home from "./components/Home";
import { getProductsRequest, getCartRequest } from "./actions/productsActions";
import { getOrdersRequest } from "./actions/ordersActions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store/store";
import "./App.css";
import RedirectContainer from "./containers/RedirectContainer";

function App() {
  return (
    <Router history={history}>
      <div className="container">
        <Header onSearch={value => store.dispatch(getProductsRequest(value))} />
        <RedirectContainer />
        <MessageContainer />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/products"
          render={props => {
            store.dispatch(
              getProductsRequest(store.getState().products.catalog.search)
            );
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
        <Route
          exact
          path="/orders"
          render={props => {
            store.dispatch(getOrdersRequest());
            return <OrdersContainer />;
          }}
        />
      </div>
    </Router>
  );
}

export default App;
