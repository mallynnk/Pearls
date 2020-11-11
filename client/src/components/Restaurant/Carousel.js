import React, {useState} from "react";
import stRoch from '../../assets/stRoch.png'
import blackbeard from '../../assets/blackbeard.png'
import roseSeafood from '../../assets/roseSeafood.jpg'
import maddensSeafood from '../../assets/maddensSeafood.jpg'
import Carousel from 'react-bootstrap/Carousel';
require("dotenv").config();



function Carousels() {

  const style = {
    color: 'black',
    backgroundColor: 'black'
  }

  const carouselItems = {
  
  }
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
  
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={stRoch} style={style} alt="First Slide"/>
          <Carousel.Caption >
            <h2 class="restHead">RALEIGH</h2>
            <h4>ST. ROCH FINE OYSTERS + BAR</h4>
            <p>223 SOUTH WILMINGTON STREET, RALEIGH, NC, 27601</p>
          </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
       <img  className="d-block w-100" src={maddensSeafood} alt='Second Slide' />
          <Carousel.Caption>
          <h2 class="restHead">RALEIGH</h2>
          <h3>MADDEN'S SEAFOOD</h3>
            <p>8401 HONEYCUTT ROAD, RALEIGH, NC 27615</p>
          </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
       <img  className="d-block w-100" src={roseSeafood} alt='Third Slide'/>
          <Carousel.Caption>
          <h2 class="restHead">BEAUFORT</h2>
          <h3>ROSE SEAFOOD RETAIL AND WHOLESALE</h3>
           <p>1646 LIVE OAK STREET, BEAUFORT, NC 28516</p>
          </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
       <img  className="d-block w-100" src={blackbeard}  alt='Fourth Slide'/>
          <Carousel.Caption>
          <h2 class="restHead">BEAUFORT</h2>

          <h3>BLACKBEARD'S GRILL AND STEAM BAR</h3>
          <p>1644 LIVE OAK STREET, BEAUFORT, NC 28516</p>
          </Carousel.Caption>
       </Carousel.Item>
      </Carousel>
  
  );
}

export default Carousels;
