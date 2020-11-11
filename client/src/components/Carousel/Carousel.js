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
        <div class="wrapper col-12">
            <div class="slider">
                <div class="Homeslide">
                    <img src={farm} />
                    <img src={rows} />
                    <img src={FreshOysters} />
                    <img src={holdingOysters} />
                    <img src={crab} />
                    <img src={sunrise} />
                </div>
                <div class="Homeslide">
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