import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundry from './components/error-boundry'
import Service from './services/service';
import AppServiceContext from './components/app-service-context';
import store from './store';

const service = new Service();

ReactDOM.render(
  <Provider store={store}>
            <ErrorBoundry>
                <AppServiceContext.Provider value={service}>
                    <Router>
                        <App/>
                    </Router>
                </AppServiceContext.Provider>
            </ErrorBoundry>
        </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
