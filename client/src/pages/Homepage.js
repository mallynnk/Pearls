import React from 'react';
import Random from "../components/Random";
import Weather from "../components/Weather/Weather.js";


function Homepage() {
    return (
        <div className="jumbotron">
            
            <div className="row">
                <div className="col-12 col-md-2">
                </div>
                <div id="about-heading" className="col-12 col-md-10">
                    <h3 className="display-3">Roysters NC</h3>
                    <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit donec dapibus molestie, 
            porta felis ligula magna quisque duis cubilia viverra velit lectus laoreet, enim 
            porttitor habitasse pulvinar sociosqu feugiat parturient iaculis egestas. Quam d
            ictum dignissim dictumst purus quis nibh scelerisque mattis per accumsan sollicitudin
             cum posuere ultrices etiam, at condimentum eleifend nam litora molestie sociis placerat 
             eu hendrerit porttitor taciti nisi. Habitant fames consequat ligula dictum ut ante, 
             inceptos placerat eleifend commodo eros urna, ac dignissim nullam montes lectus.

            Habitasse mattis viverra vel semper litora eros hendrerit, nam vitae commodo ac 
            pellentesque vivamus, enim aliquam lobortis pharetra quisque pulvinar. Litora malesuada 
            feugiat consequat scelerisque suspendisse augue arcu, nostra habitant rhoncus himenaeos 
            eu cum est volutpat, montes hac dui eget orci fermentum. Fringilla nunc quisque eleifend 
            sollicitudin cras varius phasellus neque proin porttitor, tristique cubilia eu ullamcorper 
            ultrices ultricies fusce hendrerit aptent.
                    </p>
                    
                </div>
              
            </div>
            
            <hr className="my-4" />
            <Random /><Weather />
        </div>
      
    )
}

export default Homepage;