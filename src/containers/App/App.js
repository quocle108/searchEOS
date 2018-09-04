import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';

import Header from '../../components/Header/Header'
import ViewButtonNavigation from '../ViewButtonNavigation'
import ViewAccountInfo from '../ViewAccountInfo/ViewAccountInfo'
import ViewNewAccount from '../ViewNewAccount/ViewNewAccount'
import ViewTransferToken from '../ViewTransferToken/ViewTransferToken'
import ViewContract from '../ViewContract/ViewContract'
import Footer from '../../components/Footer/Footer'

const hist = createBrowserHistory();

export default function App() {
  return (
    <Router history={hist}>
      <Switch>
      <div>
        <Header />
        <ViewButtonNavigation 
          accountInfoTab={<ViewAccountInfo />}
          newAccountTab={<ViewNewAccount/>}
          transferTokenTab={<ViewTransferToken />}
          contractTab={<ViewContract />}
        />
        {/* <ViewAccountInfo /> */}
        <Footer/>

      </div>      
      </Switch>
    </Router>
  );
}