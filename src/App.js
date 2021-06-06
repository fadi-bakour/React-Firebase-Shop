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
import CreateServicePage from './pages/user/CreateServicePage'
import EditServicePage from './pages/user/EditServicePage'
import FavoritesPage from './pages/user/FavoritesPage'
import MyServicesPage from './pages/user/MyServicesPage'
import ProfilePage from './pages/user/ProfilePage'


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
          {Token !== null ? (
            <Redirect to={{ pathname: '/' }} />
          ) : (
            <LoginPage />
          )}
        </Route>
        <Route path="/SignUp" exact>
          {Token !== null ? (
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
        {/* <Route path="/Favorites" exact>
          {Token == null ? (
            <Redirect to={{ pathname: '/Login' }} />
          ) : (
            <>
              <NavBar />
              <FavoritesPage />
              <Footer />
            </>
          )}
        </Route> */}
        <Route path="/MyServices" exact>
          {Token == null ? (
            <Redirect to={{ pathname: '/Login' }} />
          ) : (
            <>
              <NavBar />
              <MyServicesPage />
              <Footer />
            </>
          )}
        </Route>
        <Route path="/Profile" exact>
          {Token == null ? (
            <Redirect to={{ pathname: '/Login' }} />
          ) : (
            <>
              <NavBar />
              <ProfilePage />
              <Footer />
            </>
          )}
        </Route>
        <Route path="/MyServices/Create" exact>
          {Token == null ? (
            <Redirect to={{ pathname: '/Login' }} />
          ) : (
            <>
              <NavBar />
              <CreateServicePage />
              <Footer />
            </>
          )}
        </Route>
        <Route path="/MyServices/Edit" exact>
          {Token == null ? (
            <Redirect to={{ pathname: '/Login' }} />
          ) : (
            <>
              <NavBar />
              <EditServicePage />
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
