import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

<<<<<<< HEAD
import Main from './pages/Main/Main.jsx';
import List from './pages/List/List.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Cart from './pages/Cart/Cart.jsx';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/list" component={List} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cart" component={Cart} />
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    );
  }
=======
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Cart from './pages/Cart/Cart';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/list" component={List} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/cart" component={Cart} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
>>>>>>> ba8be6ffcc94e1d936e7caaeb15e127802188b97
}

export default Routes;
