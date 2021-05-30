import { Carousel } from 'react-responsive-carousel';
import Carousel1 from '../assets/carousel/1.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselSlider() {
    return (
        <Carousel showStatus={false} showThumbs ={false} transitionTime={2000} interval={5000} autoPlay={true} infiniteLoop={true}>
            <div>
                <img src={Carousel1} alt="Carousel1" />
            </div>
            <div>
                <img src={Carousel1} alt="Carousel2" />
            </div>
            <div>
                <img src={Carousel1} alt="Carousel3" />
            </div>
        </Carousel>
        
    )
}

export default CarouselSlider;
