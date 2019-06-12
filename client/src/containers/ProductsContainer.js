import Products from "../components/Products";
import { getProductsRequest } from "../actions/productsActions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const products = state.products;
  const loading = products.loading;
  const list = products.list;

  return {
    loading,
    list
  };
};

const mapDispatchToProps = dispatch => ({
  onPageClick() {
    dispatch(getProductsRequest());
  }
});

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
export default ProductsContainer;
