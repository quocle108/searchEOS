/**
 *
 * SearchAccount
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { lookupAccount, lookupPubkey } from './actions';
import { makeSelectSearchAccounts, makeSelectSearchLoading, makeSelectSearchHistory, makeSelectSearchTokenBalance } from './selectors';

import Grid from '@material-ui/core/Grid';

import SearchAccountBar from '../../components/SearchAccountBar'
import ShowAccountInforForm from "../../components/ShowAccountInfoForm/ShowAccountInforForm"
import ShowTokeBalance from "../../components/ShowTokenBalance/ShowTokenBalance"
import ShowHistory from '../../components/showHistory'
import CircularProgress from '@material-ui/core/CircularProgress';

import ShowAccountHistory from '../../components/ShowAccountHistory/ShowAccountHistory';

function LoadingSpinner(props) {
  if (props.loading) {
    return <CircularProgress color="secondary" />;
  }
  return '';
}

// eslint-disable-next-line react/prefer-stateless-function
export class SearchAccount extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    };
  }


  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">

        <Grid xs={12}>
          <SearchAccountBar{...this.props} />
        </Grid>

        <Grid xs={12}>
          <LoadingSpinner {...this.props} />
        </Grid>

        <Grid xs={6}>
          {this.props.accounts.map(account => {
            if (account)
              return <ShowAccountInforForm account={account} />
          })}
        </Grid>
        
        <Grid xs={6}>
            {
              this.props.tokenBalances.map(tokenData => {
                if (tokenData)
                  return <ShowTokeBalance tokenBalance={tokenData} />
              })}
          </Grid>

        <Grid xs={12}>
          {this.props.historys.map(history => {
            if (history)
              return <ShowAccountHistory history={history} />
          })}
        </Grid>


      </Grid>
    );
  };
}

const mapStateToProps = createStructuredSelector({
  accounts: makeSelectSearchAccounts(),
  historys: makeSelectSearchHistory(),
  tokenBalances: makeSelectSearchTokenBalance(),
  loading: makeSelectSearchLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleAccountName: form => dispatch(lookupAccount(form)),
    // handleAccountName: form => dispatch(lookupAccount("zbeosbp11111")),
    // handlePublicKey: form => dispatch(lookupPubkey(form.publicKey)),


  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'SearchAccount', reducer });
const withSaga = injectSaga({ key: 'SearchAccount', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SearchAccount);
