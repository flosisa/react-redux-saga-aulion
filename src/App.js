import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Index from 'Components';
import { history } from './';

import 'Assets/style/bootstrap.min.css';
import 'Assets/style/style.scss';
import 'Assets/style/font.css';

const App = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" component={Index} />
    </Switch>
  </ConnectedRouter>
)

export default App;
