import Cart from "../components/Cart";
import {
  getCartRequest,
  removeFromCartRequest
} from "../actions/productsActions";
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
  removeFromCart(product) {
    dispatch(removeFromCartRequest(product));
  },
  getCart(product) {
    dispatch(getCartRequest(product));
  }
});

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
export default CartContainer;
