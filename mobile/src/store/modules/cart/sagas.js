import { Alert } from 'react-native';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { updateAmountSuccess, addToCartSuccess } from './actions';
import NavigationService from '../../../services/navigation';
import { formatPrice } from '../../../util/format';

import api from '../../../services/api';

function* addToCart({ payload }) {
  const productExists = yield select(state =>
    state.cart.find(product => product.id === payload.id)
  );

  const stock = yield call(api.get, `/stock/${payload.id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(productExists.id, amount));
  } else {
    const response = yield call(api.get, `/products/${payload.id}`);

    const data = {
      ...response.data,
      amount: 1,
    };

    yield put(addToCartSuccess(data));
    NavigationService.navigate('Cart');
  }
}

function* updateAmount({ payload }) {
  if (payload.amount <= 0) return;

  const stock = yield call(api.get, `/stock/${payload.id}`);

  const stockAmount = stock.data.amount;

  if (payload.amount > stockAmount) return;

  yield put(updateAmountSuccess(payload.id, payload.amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
