/*
 *
 * SearchAccount actions
 *
 */

import { DEFAULT_ACTION, LOOKUP_ACCOUNT, LOOKUP_PUBKEY, LOOKUP_LOADING, LOOKUP_LOADED } from './constants';

export function lookupAccount(name) {
  return {
    type: LOOKUP_ACCOUNT,
    name,
  };
}

export function lookupPubkey(pubkey) {
  return {
    type: LOOKUP_PUBKEY,
    pubkey,
  };
}

export function lookupLoading() {
  return {
    type: LOOKUP_LOADING,
  };
}

export function lookupLoaded(accounts, historys) {
  return {
    type: LOOKUP_LOADED,
    accounts,
    historys,
  };
}

export default function defaultAction(form) {
  return {
    type: DEFAULT_ACTION,
    form,
  };
}
