import React from "react";
import AliceCarousel from 'react-alice-carousel';
import farm from '../../assets/Farm.jpg';
import rows from '../../assets/Farm_Rows.jpg';
import FreshOysters from '../../assets/Fresh_Oysters.jpg';
import holdingOysters from '../../assets/holding_Oysters.jpg';
import sunrise from '../../assets/sunrise.jpeg';
import crab from '../../assets/crab.jpeg';

function carouselShow() {
    return (
        // <div className="carouselShow">
        //     <AliceCarousel autoPlay autoPlayInterval="3000" autoPlayDirection="rtl" autoPlay={true} fadeOutAnimation={true}>
        //         <img src={farm} className="sliderimg" />
        //         <img src={rows} className="sliderimg" />
        //         <img src={FreshOysters} className="sliderimg" />
        //         <img src={holdingOysters} className="sliderimg" />
        //     </AliceCarousel>
        // </div>

        <div class="wrapper">
            <div class="slider">
                <div class="slide">
                    <img src={farm} />
                    <img src={rows} />
                    <img src={FreshOysters} />
                    <img src={holdingOysters} />
                    <img src={crab} />
                    <img src={sunrise} />
                </div>
                <div class="slide">
                    <img src={farm} />
                    <img src={rows} />
                    <img src={FreshOysters} />
                    <img src={holdingOysters} />
                    <img src={crab} />
                    <img src={sunrise} />
                </div>
            </div>
        </div>

    );
}

export default carouselShow;