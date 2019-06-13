import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE
} from "../actions/beaconsActions";

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
    default:
      return state;
  }
};

export default orders;
