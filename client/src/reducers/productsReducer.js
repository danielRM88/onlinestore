import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE
} from "../actions/productsActions";

const initialState = {
  toProducts: false,
  catalog: { list: [], loading: false, error: undefined },
  cart: { list: [], loading: false, error: undefined }
};

const products = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        toProducts: true,
        catalog: {
          list: [],
          loading: action.payload.loading,
          error: undefined
        }
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        toProducts: false,
        catalog: {
          list: action.payload.list,
          loading: action.payload.loading,
          error: undefined
        }
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        toProducts: false,
        catalog: {
          list: [],
          loading: action.payload.loading,
          error: action.payload.message
        }
      };
    case GET_CART_REQUEST:
      return {
        ...state,
        toProducts: false,
        cart: {
          list: [],
          loading: action.payload.loading
        }
      };
    case GET_CART_SUCCESS:
      return {
        ...state,
        toProducts: false,
        cart: {
          list: action.payload.products,
          loading: action.payload.loading
        }
      };
    case GET_CART_FAILURE:
      return {
        ...state,
        toProducts: false,
        cart: {
          list: [],
          loading: action.payload.loading,
          error: action.payload.message
        }
      };
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        toProducts: false,
        cart: {
          list: [],
          loading: action.payload.loading
        }
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        toProducts: false,
        cart: {
          ...action.payload
        }
      };
    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        toProducts: false,
        cart: {
          list: [],
          loading: action.payload.loading,
          error: action.payload.message
        }
      };
    case REMOVE_FROM_CART_REQUEST:
      return {
        ...state,
        toProducts: false,
        cart: {
          list: [],
          loading: action.payload.loading
        }
      };
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        toProducts: false,
        cart: {
          list: [],
          ...action.payload
        }
      };
    case REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        toProducts: false,
        cart: {
          list: [],
          loading: action.payload.loading,
          error: action.payload.message
        }
      };
    default:
      return state;
  }
};

export default products;
