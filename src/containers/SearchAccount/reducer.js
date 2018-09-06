/*
 *
 * SearchAccount reducer
 *
 */

import { fromJS } from 'immutable';
import { LOOKUP_ACCOUNT, LOOKUP_PUBKEY, LOOKUP_LOADING, LOOKUP_LOADED } from './constants';

const initialState = fromJS({
  name: '',
  pubkey: '',
  loading: false,
  accounts: [],
  history: [],
});

function SearchAccountReducer(state = initialState, action) {
  switch (action.type) {
    case LOOKUP_ACCOUNT:
      return state.set('name', action.name);
    case LOOKUP_PUBKEY:
      return state.set('pubkey', action.pubkey);
    case LOOKUP_LOADING:
      return state.set('loading', true);
    case LOOKUP_LOADED: {
      const { accounts, historys } = action;
      // casting account in an array if API returned an object
      const accountState = Array.isArray(accounts) ? accounts : [accounts];
      const historysState = Array.isArray(historys) ? historys : [historys];

      return state.set('accounts', accountState).set('loading', false).set('history', historysState);
    }
    default:
      return state;
  }
}

export default SearchAccountReducer;
