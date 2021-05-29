import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import LoginPage from './pages/authentication/LoginPage';

import Home from './pages/user/Home';

import { connect } from 'react-redux';

import 'react-toastify/dist/ReactToastify.min.css';

import { ToastContainer } from 'react-toastify';

const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    Token: state.authReducer.Token,
  };
};

function App({ Token }) {

  return (

    <Router>
      <Switch>

        <Route path="/login" exact>
          {Token != null ? (
            <Redirect to={{ pathname: '/' }} />
          ) : (
            <LoginPage />
          )}
        </Route>

        <Route path="/" exact>
          {Token == null ? (
            <Redirect to={{ pathname: '/login' }} />
          ) : (
            <Home />
          )}
        </Route>

      </Switch>
      <ToastContainer />
    </Router>

  );
}

export default connect(mapStateToProps)(App);
