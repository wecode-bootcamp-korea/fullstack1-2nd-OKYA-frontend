import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Nav from './components/Nav/Nav.js';
import Main from './pages/Main/Main.js';
import List from './pages/List/List.js';
import Login from './pages/Login/Login.js';
import Signup from './pages/Signup/Signup.js';
import Cart from './pages/Cart/Cart.js';
import Footer from './components/Footer/Footer.js';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/list" component={List} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cart" component={Cart} />
          <Redirect path="*" to="/" />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
