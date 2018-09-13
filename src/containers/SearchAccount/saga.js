import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { makeSelectSearchName, makeSelectSearchPubkey } from './selectors';
import { LOOKUP_ACCOUNT, LOOKUP_PUBKEY } from './constants';
import { lookupLoading, lookupLoaded } from './actions';
import Eos from 'eosjs';
// import {tokensUrl} from '../../remoteConfig'

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

const tokensUrl = 'https://raw.githubusercontent.com/eoscafe/eos-airdrops/master/tokens.json';

function* fetchTokenInfo(reader, account, symbol) {
  try {
    if (symbol === 'OCT') throw { message: 'OCT has no STATS table - please fix!' };
    const stats = yield reader.getCurrencyStats(account, symbol);
    const precision = stats[symbol].max_supply.split(' ')[0].split('.')[1].length;
    return {
      account,
      symbol,
      precision,
    };
  } catch (c) {
    return {
      account,
      symbol,
      precision: 4,
    };
  }
}

function* fetchTokens(reader) {
  try {
    const data = yield fetch(tokensUrl);
    const list = yield data.json();

    const tokenList = [
      {
        symbol: "EOS",
        account: "eosio.token"
      },
      ...list
    ]
    const info = yield all(
      tokenList.map(token => {
        console.log("tam_ net", token);
        return fork(fetchTokenInfo, reader, token.account, token.symbol);
      })
    );
    const tokens = yield join(...info);
    return tokens;
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    return null;
  }
}
function* getCurrency(token, name) {
  const networkReader = yield Eos(networkOptions);
  try {
    const currency = yield networkReader.getCurrencyBalance(token, name);
    const currencies = currency.map(c => {
      return {
        account: token,
        balance: c,
      };
    });
    console.log("tam__getCurrency", currencies);
    return currencies;
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    return [];
  }
}


function* watchSeachPubkey() {
}

function* getAccountDetail(name) {
  // console.log("tam _getAccountDetail: name = ", name);
  const networkReader = yield Eos(networkOptions);

  const account = yield networkReader.getAccount(name);
  // console.log("tam_ getAccountDetail: Account:", account);
  return{
    ...account
  };
}

function* getHistory(name){
  // console.log("tam _getHistory: name = ", name);
  const networkReader = yield Eos(networkOptions);


  const history = yield networkReader.getActions(name);
  // console.log("tam_getHistory : history = ", history);

  return{
    ...history
  };
}

function* getToken(name){

  const networkReader = yield Eos(networkOptions);

  const eosTokens = yield call(fetchTokens, networkReader);
  console.log("tam_ tokens", tokens);

  const tokens = yield all(
    eosTokens.map(token => {
      console.log("tam_Tokens: ", token);
      return fork(getCurrency, token.account, name);
    })
  );
  const currencies = yield join(...tokens);

  console.log("tam_ currencies", currencies);
  const balances = currencies.reduce((a, b) => a.concat(b), []);
  console.log("tam_balances", balances);

  return{
    ...balances
  }

}

//
// Get the EOS single account
//
function* performSearchAccount() {
  // console.log("tam_ performSearchAccount");

  // const accountName = 'starteosiobp';
  const accountName = yield select(makeSelectSearchName());
  yield put(lookupLoading());
  try{
    const account = yield call(getAccountDetail, accountName);
    // console.log("tam_return: ", account);

    const history = yield call(getHistory, accountName);
    // console.log("tam_ get account starteosiobp", history);

    const tokenBalance = yield call(getToken, accountName);

    console.log("tam_ token final", tokenBalance);

    yield put(lookupLoaded(account, history, tokenBalance));

  }catch (err) {
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
