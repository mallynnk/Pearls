import React from "react";
import AliceCarousel from 'react-alice-carousel';
import farm from '../../assets/Farm.jpg';
import rows from '../../assets/Farm_Rows.jpg';
import FreshOysters from '../../assets/Fresh_Oysters.jpg';
import holdingOysters from '../../assets/holding_Oysters.jpg';


function carouselShow() {
    return (
        <div class="wrapper">
            <div class="slider">
                <div class="slide">
                    <img src={farm} />
                    <img src={rows} />
                    <img src={FreshOysters} />
                    <img src={holdingOysters} />
                </div>
                <div class="slide">
                    <img src={farm} />
                    <img src={rows} />
                    <img src={FreshOysters} />
                    <img src={holdingOysters} />
                </div>
            </div>
        </div>

    );
}

export default carouselShow;