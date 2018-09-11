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
        <TestForm{...this.props} />

        <LoadingSpinner {...this.props} />
        <div>
          {this.props.accounts.map(account => {

            // console.log("tam_ LL ", account, account.account_name, JSON.stringify(account, null, 2));
            // console.log("tam_ LL ", JSON.stringify(account, null, 2));
            return <ShowAccountInforForm account={account}/>
          })}
        </div>

        <div>
          {this.props.historys.map(history => {

            // console.log("tam_ LL ", account, account.account_name, JSON.stringify(account, null, 2));
            // console.log("tam_ LL ", JSON.stringify(history, null, 2));

             

            // console.log("tam_ ", history.actions.map( action_trace => {

              // console.log("render", action_trace.action_trace);
              // console.log("render__name", action_trace.action_trace.act.name);

              // if(action_trace.action_trace.act.name == "transfer") //claimrewards,approve,newaccount, buyrambytes, delegatebw
              // {
              //   console.log("render from", action_trace.action_trace.act.data.from);
              //   console.log("render to", action_trace.action_trace.act.data.to);
              //   console.log("render quantity", action_trace.action_trace.act.data.quantity);
              // }

              // if (action_trace.action_trace.act.name == "transfer") {
              //   console.log("render from", action_trace.action_trace.act.data.from);
              //   console.log("render to", action_trace.action_trace.act.data.to);
              //   console.log("render quantity", action_trace.action_trace.act.data.quantity);
              // }
              // return <ShowAccountHistory history={action_trace.action_trace}/>



            // }

            // ));

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
