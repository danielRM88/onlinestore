import { createOrderService } from "../services/ordersService";
import {
  createOrderSuccess,
  createOrderFailure
} from "../actions/ordersActions";
import { CREATE_ORDER_REQUEST } from "../actions/ordersActions";
import store from "../store/store";
import { setMessage } from "../actions/messagesActions";

const ordersMiddleware = store => next => action => {
  next(action);
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      createOrderMiddlewareAction(next, action);
      break;
    default:
      break;
  }
};

function createOrderMiddlewareAction(next, action) {
  const error = err => {
    next(setMessage([err.message], "error"));
    next(createOrderFailure(err.message));
  };

  const success = response => {
    next(createOrderSuccess(response.products));
  };

  createOrderService(action.payload.email, success, error);
}

export default ordersMiddleware;
