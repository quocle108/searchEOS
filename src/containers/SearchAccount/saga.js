import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { makeSelectSearchName, makeSelectSearchPubkey } from './selectors';
import { LOOKUP_ACCOUNT, LOOKUP_PUBKEY } from './constants';
import { lookupLoading, lookupLoaded } from './actions';

function* getCurrency(token, name) {
}

function* getAccountDetail(name) {
  console.log("tam_getAccountDetail ", name);

}

//
// Get the EOS all accounts by public key
//
function* performSearchPubkey() {

}

function* watchSeachPubkey() {
}

//
// Get the EOS single account
//
function* performSearchAccount() {
  console.log("tam_Get the EOS single account");

}

function* watchSeachAccount() {
  yield takeLatest(LOOKUP_ACCOUNT, performSearchAccount);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([watchSeachAccount(), watchSeachPubkey()]);
}
