import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE
} from "../actions/productsActions";

const initialState = {
  products: { list: [], loading: false, error: undefined }
};

const products = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return Object.assign({}, state, {
        ...action.payload
      });
    case GET_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        ...action.payload
      });
    case GET_PRODUCTS_FAILURE:
      return Object.assign({}, state, {
        ...action.payload
      });
    default:
      return state;
  }
};

export default products;
