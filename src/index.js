import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/main-content/Dashboard';
import NotFound from './components/NotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TopContent from './components/top-content/TopContent';
import './scss/App.scss';
import * as serviceWorker from './serviceWorker';

const App = () => (

  <BrowserRouter>
    <div className='page-wrapper'>

      <TopContent />
      <Switch>
        <Route path='/' component={Dashboard} exact />
        <Route component={NotFound} />
      </Switch>

    </div>
  </BrowserRouter>

);



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
