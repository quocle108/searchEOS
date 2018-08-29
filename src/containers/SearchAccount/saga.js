import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { makeSelectSearchName, makeSelectSearchPubkey } from './selectors';
import { LOOKUP_ACCOUNT, LOOKUP_PUBKEY } from './constants';
import { lookupLoading, lookupLoaded } from './actions';
import Eos from 'eosjs';
import {tokensUrl} from '../../remoteConfig'

const networkOptions = {
  broadcast: false,
  sign: false,
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  httpEndpoint: 'https://api.eosnewyork.io:443',
};


// function* getCurrency(token, name) {
// }

//
// Get the EOS all accounts by public key
//
// function* performSearchPubkey() {

// }


function* watchSeachPubkey() {
}

function* getAccountDetail(name) {
  console.log("tam_getAccountDetail ", name);
  const networkReader = yield Eos(networkOptions);

  console.log("tam_ getAccountDetail_networkReader ",networkReader);

  const account = yield networkReader.getAccount(name);
  console.log("tam_ getAccountDetail_Account:", account);
  return{
    ...account
  };
}



//
// Get the EOS single account
//
function* performSearchAccount() {
  console.log("tam_Get the EOS single account");
  const accountName = '123eosgui123';
  try{
    const account = yield call(getAccountDetail, accountName);
    console.log("tam_return: ", account);

    yield put(lookupLoaded(account));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    yield put(lookupLoaded([]));
  }
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
