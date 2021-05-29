import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import apis from '../../apis/Apis';
import NavBar from '../../components/NavBar';
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      SignOut: () => apis.logOutAuth()
    },
    dispatch,
  );

function Home({ SignOut }) {

  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div >
      <NavBar SignOut={SignOut}/>
      <h1>
        home
      </h1>
      

    </div>
  )
}

export default connect(null, mapDispatchToProps)(Home);
