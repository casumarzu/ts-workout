import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { App } from './containers/App';
import { Test } from './containers/Test';
import { TestJss } from './containers/TestJss';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/testjss" component={TestJss} />
        <Route path="/todo" component={App} />
        <Route path="/" component={Test} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
