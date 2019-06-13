import Orders from "../components/Orders";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const orders = state.orders.index;
  const loading = orders.loading;
  const list = orders.list;

  return {
    loading,
    list
  };
};

const mapDispatchToProps = dispatch => ({});

const OrdersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
export default OrdersContainer;
