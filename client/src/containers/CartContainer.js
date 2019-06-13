import Cart from "../components/Cart";
import {
  getCartRequest,
  removeFromCartRequest
} from "../actions/productsActions";
import { createOrderRequest } from "../actions/ordersActions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const products = state.products.cart;
  const loading = products.loading;
  const list = products.list;

  return {
    loading,
    list
  };
};

const mapDispatchToProps = dispatch => ({
  removeFromCart(productId) {
    dispatch(removeFromCartRequest(productId));
  },
  getCart(product) {
    dispatch(getCartRequest(product));
  },
  placeOrder(email) {
    dispatch(createOrderRequest(email));
  }
});

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
export default CartContainer;
