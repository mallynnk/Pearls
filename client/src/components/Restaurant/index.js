import React from "react";
import stRoch from '../../assets/stRoch.png'
import blackbeard from '../../assets/blackbeard.png'
import roseSeafood from '../../assets/roseSeafood.jpg'
import maddensSeafood from '../../assets/maddensSeafood.jpg'
require("dotenv").config();

function Restaurant() {

  const style = {
    color: 'black',
    backgroundColor: 'black'
  }
  
  return (
    <div>
      <div>
        <h1>● RALEIGH ●</h1>
        <div>
        <h4>ST. ROCH FINE OYSTERS + BAR</h4>
        <p>223 SOUTH WILMINGTON STREET, RALEIGH, NC, 27601</p>
        <img src={stRoch} style={style} alt="st roch logo"></img>
        </div>
        <div>
        <h3>MADDEN'S SEAFOOD</h3>
        <p>8401 HONEYCUTT ROAD, RALEIGH, NC 27615</p>
        <img src={maddensSeafood} alt='maddens seafood logo'></img>
        </div>
      </div>
      <div>
        <h1>● BEAUFORT ●</h1>
        <div>
        <h3>ROSE SEAFOOD RETAIL AND WHOLESALE</h3>
        <p>1646 LIVE OAK STREET, BEAUFORT, NC 28516</p>
        <img src={roseSeafood} alt='rose seafood logo'></img>
        </div>
        <div>
        <h3>BLACKBEARD'S GRILL AND STEAM BAR</h3>
        <p>1644 LIVE OAK STREET, BEAUFORT, NC 28516</p>
        <img src={blackbeard}  alt='blackbeardseafood logo'></img>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
