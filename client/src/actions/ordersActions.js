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
