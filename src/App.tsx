import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';

import AppHeader from './components/app-header/AppHeader';

import Auth from './pages/auth';
import Contacts from './pages/contacts';
import "./App.scss";

type AppProps = {
  auth: boolean;
};


const App = ({auth}: AppProps) => {
  const [authBool, setAuthBool] = useState(auth);

  useEffect(() => {
    console.log(authBool);
    setAuthBool(Boolean(auth))
    if(localStorage.getItem('authorized')) {
     let newAuthBool = localStorage.getItem('authorized');
     setAuthBool(Boolean(newAuthBool));
    } 
  }, [authBool])

  
  
  return (
    <div className='page'>
      
      <main>
      {authBool 
      ?<>
       <AppHeader />
       <Switch>
          <Route path="/">
              <Contacts/>
          </Route>
        </Switch>
       </>
       
      :<Route exact path="/">
          <Auth/>
        </Route>
     }
      </main>
    
  </div>
  );
}

interface RootState {
  auth: boolean;
}

const mapStateToProps = (state: RootState) => {
  return {
    auth: state.auth,
  }
}


export default connect(mapStateToProps)(App);