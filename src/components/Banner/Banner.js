import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    
    return (
        <Carousel autoPlay dynamicHeight>
          <div >
                <img  src="https://i.ibb.co/LSwtqnw/beautiful-tropical-beach-sea-2.jpg" alt="" />
                <p className="legend">Weekend Break</p>
                
            </div>
            <div>
                <img  src="https://i.ibb.co/Q67qXnd/singapore-skyline.jpg" alt="" />
                <p className="legend">Budget Traveler</p>
            </div>
            <div>
                <img  src="https://i.ibb.co/g9YtZZz/travel-relaxation-umbrella-luxury-hotels.jpg" alt="" />
                <p className="legend">Domestic Tourism</p>
            </div>
        </Carousel>
    );
};

export default Banner;