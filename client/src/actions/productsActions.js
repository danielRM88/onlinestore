export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";
export const GET_CART_REQUEST = "GET_CART_REQUEST";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAILURE = "GET_CART_FAILURE";
export const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";
export const REMOVE_FROM_CART_REQUEST = "REMOVE_FROM_CART_REQUEST";
export const REMOVE_FROM_CART_SUCCESS = "REMOVE_FROM_CART_SUCCESS";
export const REMOVE_FROM_CART_FAILURE = "REMOVE_FROM_CART_FAILURE";

export function getProductsRequest(search = null) {
  return {
    type: GET_PRODUCTS_REQUEST,
    payload: {
      loading: true,
      search
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

export function addToCartRequest(productId) {
  return {
    type: ADD_TO_CART_REQUEST,
    payload: {
      loading: true,
      productId
    }
  };
}

export function addToCartSuccess(response) {
  return {
    type: ADD_TO_CART_SUCCESS,
    payload: {
      loading: false,
      message: response.message
    }
  };
}

export function addToCartFailure(message) {
  return {
    type: ADD_TO_CART_FAILURE,
    payload: {
      loading: false,
      message
    }
  };
}

export function removeFromCartRequest(productId) {
  return {
    type: REMOVE_FROM_CART_REQUEST,
    payload: {
      loading: true,
      productId
    }
  };
}

export function removeFromCartSuccess(response) {
  return {
    type: REMOVE_FROM_CART_SUCCESS,
    payload: {
      loading: false,
      message: response.message
    }
  };
}

export function removeFromCartFailure(message) {
  return {
    type: REMOVE_FROM_CART_FAILURE,
    payload: {
      loading: false,
      message
    }
  };
}

export function getCartRequest() {
  return {
    type: GET_CART_REQUEST,
    payload: {
      loading: true
    }
  };
}

export function getCartSuccess(response) {
  return {
    type: GET_CART_SUCCESS,
    payload: {
      loading: false,
      products: response.products
    }
  };
}

export function getCartFailure(message) {
  return {
    type: GET_CART_FAILURE,
    payload: {
      loading: false,
      message
    }
  };
}
