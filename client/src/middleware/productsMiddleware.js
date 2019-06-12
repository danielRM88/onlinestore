import { getProductsService } from "../services/productsService";
import {
  getProductsSuccess,
  getProductsFailure
} from "../actions/productsActions";
import { GET_PRODUCTS_REQUEST } from "../actions/productsActions";
import { setMessage } from "../actions/messagesActions";

const productsMiddleware = store => next => action => {
  next(action);
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      getProductsMiddlewareAction(next, action);
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

  getProductsService(1, success, error);
}

export default productsMiddleware;
