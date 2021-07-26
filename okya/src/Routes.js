import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Main from './pages/main/main.js';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
