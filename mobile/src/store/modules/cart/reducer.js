import produce from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { payload } = action;

        draft.push(payload.product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const { payload } = action;

        const productIndex = draft.findIndex(p => p.id === payload.id);

        if (productIndex >= 0) draft.splice(productIndex, 1);
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const { payload } = action;

        const productIndex = draft.findIndex(p => p.id === payload.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.payload.amount);
        }
      });
    default:
      return state;
  }
}
