import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import apis from '../../apis/Apis';
import NavBar from '../../components/NavBar';
import CarouselSlider from '../../components/CarouselSlider';

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
      <NavBar SignOut={SignOut} />
      <CarouselSlider/>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Home);
