import React from "react";
import Random from "../components/Random";
import Weather from "../components/Weather/Weather.js";
import AliceCarousel from "../components/Carousel/Carousel.js"
import Hero from "../components/Heros"
import Footer from "../components/Footer/Footer"

function Homepage() {

    return (

        <div>
        <Hero>

        </Hero>
            <div className="row container">

                    <h3 className="display-3 col-6 title">Roysters NC</h3>
                    <p className="about">

                        The farm is located just outside of Beaufort, a small town in
                        eastern North Carolina. The North River’s nutrient rich water flows
                        through our oysters, giving them a great sense of place when you try
                        one. Shackleford Banks and Cape Lookout are all the stands between
                        the farm and the Atlantic Ocean.
            <br></br>
                        <br></br>
            Our flagship oysters, Beaufort Brinys, are available for purchase
            directly from the Royster himself as well as a few restaurants
            located in Beaufort and Raleigh.{" "}
                    </p>
            </div>
            <div>                      
                <AliceCarousel />
                <Random />
                <Footer />
             </div>
        </div>
    );
}

export default Homepage;


