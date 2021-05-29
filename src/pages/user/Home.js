import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import apis from '../../apis/Apis';
import NavBar from '../../components/NavBar';
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      reset: () => apis.logOutAuth()
    },
    dispatch,
  );

function Home({ reset }) {

  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div >
      <NavBar />
      <h1 onClick={reset}>
        home
      </h1>
      

    </div>
  )
}

export default connect(null, mapDispatchToProps)(Home);
