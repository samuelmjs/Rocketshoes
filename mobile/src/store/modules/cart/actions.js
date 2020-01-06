export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: {
      id,
    },
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    payload: {
      product,
    },
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    payload: {
      id,
      amount,
    },
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    payload: {
      id,
      amount,
    },
  };
}
