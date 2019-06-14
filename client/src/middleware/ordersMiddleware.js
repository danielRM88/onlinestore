import {
  createOrderService,
  getOrdersService
} from "../services/ordersService";
import {
  createOrderSuccess,
  createOrderFailure,
  getOrdersSuccess,
  getOrdersFailure
} from "../actions/ordersActions";
import { getCartRequest } from "../actions/productsActions";
import {
  CREATE_ORDER_REQUEST,
  GET_ORDERS_REQUEST
} from "../actions/ordersActions";
import store from "../store/store";
import { setMessage, removeMessage } from "../actions/messagesActions";

const ordersMiddleware = store => next => action => {
  next(action);
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      createOrderMiddlewareAction(next, action);
      break;
    case GET_ORDERS_REQUEST:
      getOrdersMiddlewareAction(next, action);
      break;
    default:
      break;
  }
};

function createOrderMiddlewareAction(next, action) {
  const error = err => {
    next(setMessage([err.response.body.message], "error"));
    setTimeout(() => {
      next(removeMessage());
    }, 5000);
    next(createOrderFailure(err.message));
  };

  const success = response => {
    next(setMessage([response.message], "success"));
    setTimeout(() => {
      next(removeMessage());
    }, 5000);
    next(createOrderSuccess(response));
    store.dispatch(getCartRequest());
  };

  createOrderService(action.payload.email, success, error);
}

function getOrdersMiddlewareAction(next, action) {
  const error = err => {
    next(setMessage([err.message], "error"));
    setTimeout(() => {
      next(removeMessage());
    }, 5000);
    next(getOrdersFailure(err.message));
  };

  const success = response => {
    next(getOrdersSuccess(response.orders));
  };

  getOrdersService(success, error);
}

export default ordersMiddleware;
