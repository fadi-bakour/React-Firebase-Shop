import React, { useEffect } from 'react';
import CarouselSlider from '../../components/CarouselSlider';
import IntroSectionRight from '../../components/IntroSectionRight'
import IntroSectionLeft from '../../components/IntroSectionLeft'

function HomePage() {

  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div >
      <CarouselSlider />
      <div className="text-center mt-5 mb-5 container">
        <h2>Why do we use it?</h2>
        <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </div>
      <IntroSectionRight />
      <IntroSectionLeft />
      <IntroSectionRight />
      <div className="text-center mt-5 mb-5 container">
        <h3>Where does it come from?</h3>
      </div>
    </div>
  )
}

export default HomePage;
