import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { updateAmountSuccess, addToCartSuccess } from './actions';
import NavigationService from '../../../services/navigation';
import { formatPrice } from '../../../util/format';

import api from '../../../services/api';

function* addToCart({ payload }) {
  const productExists = yield select(state =>
    state.cart.find(product => product.id === payload.id)
  );

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (productExists) {
    yield put(updateAmountSuccess(productExists.id, amount));
  } else {
    const response = yield call(api.get, `/products/${payload.id}`);

    const data = {
      ...response.data,
      amount: 1,
      subtotal: formatPrice(response.data.price * amount),
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
    NavigationService.navigate('Cart');
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
