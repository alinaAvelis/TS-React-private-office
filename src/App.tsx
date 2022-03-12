import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppHeader from './components/app-header/AppHeader';

import Auth from './pages/auth';
import Contacts from './pages/contacts';


function App() {
  return (
    <div>
      <AppHeader />
      <main>
        <Switch>
            <Route exact path="/">
                <Auth/>
            </Route>

            <Route path="/contacts">
                <Contacts/>
            </Route>
        </Switch>
      </main>
    
  </div>
  );
}

export default App;
