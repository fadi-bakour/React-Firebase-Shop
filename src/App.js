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

import HomePage from './pages/user/HomePage';
import ServicesPage from './pages/user/ServicesPage'

import { connect } from 'react-redux';

import 'react-toastify/dist/ReactToastify.min.css';

import { ToastContainer, Slide } from 'react-toastify';

import NavBar from './components/NavBar';
import Footer from './components/Footer'

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

        <Route path="/Login" exact>
          {Token != null ? (
            <Redirect to={{ pathname: '/' }} />
          ) : (
            <LoginPage />
          )}
        </Route>
        <Route path="/SignUp" exact>
          {Token != null ? (
            <Redirect to={{ pathname: '/' }} />
          ) : (
            <SignUpPage />
          )}
        </Route>

        <Route path="/" exact>
          {Token == null ? (
            <Redirect to={{ pathname: '/Login' }} />
          ) : (
            <>
              <NavBar />
              <HomePage />
              <Footer />
            </>
          )}
        </Route>
        <Route path="/Services" exact>
          {Token == null ? (
            <Redirect to={{ pathname: '/Login' }} />
          ) : (
            <>
              <NavBar />
              <ServicesPage />
              <Footer />
            </>
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
