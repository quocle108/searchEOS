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
import { makeSelectSearchAccounts, makeSelectSearchLoading, makeSelectSearchHistory } from './selectors';

import TestForm from '../../components/testForm'
import ShowForm from '../../components/showForm'
import ShowHistory from '../../components/showHistory'
import CircularProgress from '@material-ui/core/CircularProgress';


import GridContainer from '../../components/GridContainer'
function LoadingSpinner(props) {
  if (props.loading) {
    return <CircularProgress color="secondary" />;
  }
  return '';
}

// eslint-disable-next-line react/prefer-stateless-function
export class SearchAccount extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      value: ''
    };
  }


  render() {
    return (
      <div>
        <TestForm{...this.props} />

        <LoadingSpinner {...this.props} />
        <GridContainer>
          {this.props.accounts.map(account => {

            // console.log("tam_ LL ", account, account.account_name, JSON.stringify(account, null, 2));
            console.log("tam_ LL ", JSON.stringify(account, null, 2));
            return <ShowForm account={account}/>
          })}
        </GridContainer>

        <GridContainer>
          {this.props.historys.map(history => {

            // console.log("tam_ LL ", account, account.account_name, JSON.stringify(account, null, 2));
            console.log("tam_ LL ", JSON.stringify(history, null, 2));
            return <ShowHistory history={history}/>
          })}
        </GridContainer>

        
      </div>
    );
  };
}

const mapStateToProps = createStructuredSelector({
  accounts: makeSelectSearchAccounts(),
  historys: makeSelectSearchHistory(),
  loading: makeSelectSearchLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleAccountName: form => dispatch(lookupAccount(form)),
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
