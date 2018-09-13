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

import SearchAccountBar from '../../components/SearchAccountBar'
import ShowAccountInforForm from "../../components/ShowAccountInfoForm/ShowAccountInforForm"
import ShowHistory from '../../components/showHistory'
import CircularProgress from '@material-ui/core/CircularProgress';


import GridContainer from '../../components/GridContainer'
import ShowAccountHistory from '../../components/ShowAccountHistory/ShowAccountHistory';
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
        <SearchAccountBar{...this.props} />

        <LoadingSpinner {...this.props} />
        <div>
          {this.props.accounts.map(account => {
            if(account)
            return <ShowAccountInforForm account={account}/>
          })}
        </div>

        <div>
          {this.props.historys.map(history => {
            if(history)
            return <ShowAccountHistory history={history}/>
          })}
        </div>        
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
    // handleAccountName: form => dispatch(lookupAccount(form)),
    handleAccountName: form => dispatch(lookupAccount("eoslaomaocom")),
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
