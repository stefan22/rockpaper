import React, {Component} from 'react';
import Dashboard from './main-content/Dashboard';
import NotFound from './NotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TopContent from './top-content/TopContent';
import '../scss/App.scss';

class App extends Component {
  render() {
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
    return (
      <div>
        <App />
      </div>
    );
  }
}

export default App;
