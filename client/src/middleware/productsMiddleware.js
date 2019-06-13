import {
  getProductsService,
  getCartService,
  addToCartService,
  removeFromCartService
} from "../services/productsService";
import {
  getProductsSuccess,
  getProductsFailure,
  getCartRequest,
  getCartSuccess,
  getCartFailure,
  addToCartSuccess,
  addToCartFailure,
  removeFromCartSuccess,
  removeFromCartFailure
} from "../actions/productsActions";
import {
  GET_PRODUCTS_REQUEST,
  GET_CART_REQUEST,
  ADD_TO_CART_REQUEST,
  REMOVE_FROM_CART_REQUEST
} from "../actions/productsActions";
import store from "../store/store";
import { setMessage } from "../actions/messagesActions";

const productsMiddleware = store => next => action => {
  next(action);
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      getProductsMiddlewareAction(next, action);
      break;
    case GET_CART_REQUEST:
      getCartMiddlewareAction(next, action);
      break;
    case ADD_TO_CART_REQUEST:
      addToCartMiddlewareAction(next, action);
      break;
    case REMOVE_FROM_CART_REQUEST:
      removeFromCartMiddlewareAction(next, action);
      break;
    default:
      break;
  }
};

function getProductsMiddlewareAction(next, action) {
  const error = err => {
    next(setMessage([err.message], "error"));
    next(getProductsFailure(err.message));
  };

  const success = response => {
    next(getProductsSuccess(response.products));
  };

  getProductsService(action.search, 1, success, error);
}

function getCartMiddlewareAction(next, action) {
  const error = err => {
    next(setMessage([err.message], "error"));
    next(getCartFailure(err.message));
  };

  const success = response => {
    next(getCartSuccess(response));
  };

  getCartService(1, success, error);
}

function addToCartMiddlewareAction(next, action) {
  const error = err => {
    next(setMessage([err.message], "error"));
    next(addToCartFailure(err.message));
  };

  const success = response => {
    next(setMessage([response.message], "success"));
    next(addToCartSuccess(response));
  };

  addToCartService(1, success, error);
}

function removeFromCartMiddlewareAction(next, action) {
  const error = err => {
    next(setMessage([err.message], "error"));
    next(removeFromCartFailure(err.message));
  };

  const success = response => {
    next(setMessage([response.message], "success"));
    next(removeFromCartSuccess(response));
    store.dispatch(getCartRequest());
  };

  removeFromCartService(1, success, error);
}

export default productsMiddleware;
