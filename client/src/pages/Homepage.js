import React from "react";
import Random from "../components/Random";
import Weather from "../components/Weather/Weather.js";

function Homepage() {
  return (
    <div className="jumbotron">     
      <div className="row">
        <div className="col-12 col-md-2"></div>
        <div id="about-heading" className="col-12 col-md-10">
          <h3 className="display-3">Roysters NC</h3>
          <p className="lead">
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
      </div>

      <hr className="my-4" />
      <Weather />
      <Random />  
    </div>
  );
}

export default Homepage;
