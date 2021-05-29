import './style/App.css';
import './style/AppResponsive.css'
import './style/Bootstrap.min.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import LoginPage from './pages/authentication/LoginPage';
import SignUpPage from './pages/authentication/SignUpPage';

import Home from './pages/user/Home';

import { connect } from 'react-redux';

import 'react-toastify/dist/ReactToastify.min.css';

import { ToastContainer, Slide } from 'react-toastify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelopeOpenText, faKey, faBars } from '@fortawesome/free-solid-svg-icons'


const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    Token: state.authReducer.Token,
  };
};

function App({ Token }) {
  library.add(fab, faCheckSquare, faCoffee, faEnvelopeOpenText, faKey, faBars)

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
        <Route path="/signup" exact>
          {Token != null ? (
            <Redirect to={{ pathname: '/' }} />
          ) : (
            <SignUpPage />
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
      <ToastContainer
        transition={Slide}
      />
    </Router>

  );
}

export default connect(mapStateToProps)(App);
