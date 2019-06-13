import MyRedirect from "../components/MyRedirect";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const toProducts = state.products.toProducts;

  return {
    toProducts
  };
};

const mapDispatchToProps = dispatch => ({});

const RedirectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRedirect);
export default RedirectContainer;
