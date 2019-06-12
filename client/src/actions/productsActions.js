export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

export function getProductsRequest() {
  return {
    type: GET_PRODUCTS_REQUEST,
    payload: {
      loading: true
    }
  };
}

export function getProductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: {
      loading: false,
      list: products
    }
  };
}

export function getProductsFailure(message) {
  return {
    type: GET_PRODUCTS_FAILURE,
    payload: {
      loading: false,
      message
    }
  };
}
