import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';

import AppHeader from './components/app-header/AppHeader';

import Auth from './pages/auth';
import Contacts from './pages/contacts';
import "./App.scss";

type AppProps = {
  auth: string;
};


const App = ({auth}: AppProps) => {
  const [authBool, setAuthBool] = useState(auth);

  useEffect(() => {
    setAuthBool(auth);
    if(localStorage.getItem('authorized')) {
     setAuthBool(localStorage.authorized);
    } 
  }, [auth])

  
  
  return (
    <div className='page'>
      
      <main>
      {authBool === "true"
      ?<>
       <AppHeader />
       <Switch>
          <Route path="/">
              <Contacts/>
          </Route>
        </Switch>
       </>
       
      :<Route path="/">
          <Auth/>
        </Route>
     }
      </main>
    
  </div>
  );
}

interface RootState {
  auth: string;
}

const mapStateToProps = (state: RootState) => {
  return {
    auth: state.auth,
  }
}


export default connect(mapStateToProps)(App);