export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAILURE = "CREATE_ORDER_FAILURE";

export function createOrderRequest(email) {
  return {
    type: CREATE_ORDER_REQUEST,
    payload: {
      email,
      loading: true
    }
  };
}
export function createOrderSuccess() {
  return {
    type: CREATE_ORDER_SUCCESS,
    payload: {
      loading: false
    }
  };
}
export function createOrderFailure(message) {
  return {
    type: CREATE_ORDER_FAILURE,
    payload: {
      message,
      loading: false
    }
  };
}

export const GET_ORDERS_REQUEST = "GET_ORDERS_REQUEST";
export const GET_ORDERS_SUCCESS = "GET_ORDERS_SUCCESS";
export const GET_ORDERS_FAILURE = "GET_ORDERS_FAILURE";

export function getOrdersRequest() {
  return {
    type: GET_ORDERS_REQUEST,
    payload: {
      loading: true
    }
  };
}
export function getOrdersSuccess(orders) {
  return {
    type: GET_ORDERS_SUCCESS,
    payload: {
      orders,
      loading: false
    }
  };
}
export function getOrdersFailure(message) {
  return {
    type: GET_ORDERS_FAILURE,
    payload: {
      message,
      loading: false
    }
  };
}
