import Products from "../components/Products";
import { addToCartRequest } from "../actions/productsActions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const products = state.products.catalog;
  const loading = products.loading;
  const list = products.list;

  return {
    loading,
    list
  };
};

const mapDispatchToProps = dispatch => ({
  addToCart(productId) {
    dispatch(addToCartRequest(productId));
  }
});

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
export default ProductsContainer;
