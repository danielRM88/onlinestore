import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE
} from "../actions/ordersActions";

const initialState = {
  index: { list: [], loading: false, error: undefined },
  place: { loading: false, error: undefined }
};

const orders = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return Object.assign({}, state, {
        place: { ...action.payload, orders: [] }
      });
    case CREATE_ORDER_SUCCESS:
      return Object.assign({}, state, {
        place: { ...action.payload, orders: [] }
      });
    case CREATE_ORDER_FAILURE:
      return Object.assign({}, state, {
        place: { ...action.payload, orders: [] }
      });
    case GET_ORDERS_REQUEST:
      return Object.assign({}, state, {
        index: { ...action.payload, orders: [] }
      });
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        index: {
          list: action.payload.orders,
          loading: action.payload.loading
        }
      };
    case GET_ORDERS_FAILURE:
      return Object.assign({}, state, {
        index: { ...action.payload, orders: [] }
      });
    default:
      return state;
  }
};

export default orders;
