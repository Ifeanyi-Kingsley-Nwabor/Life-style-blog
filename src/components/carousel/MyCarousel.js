import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import fashion from "./img/fashion.png";
import pixels from "./img/pixels.png";
import night from "./img/night.png";
import breakFast from "./img/breakFast.png";
import pinky from "./img/pinky.png";

import Header from "../Header";

const MyCarousel = () => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  return (
    <div>
      <div>
        <AliceCarousel
          autoPlay
          animationType="fadeout"
          autoheight
          disableButtonsControls
          disableDotsControls
          infinite
          autoPlayInterval="3000"
        >
          <Header />
          <img src={pixels} className="sliderimg" alt="pixels" />
          <img src={fashion} className="sliderimg" alt="fashion" />
          <img src={night} className="sliderimg" alt="night" />
          <img src={breakFast} className="sliderimg" alt="breakFast" />
          <img src={pinky} className="sliderimg" alt="pinky" />
        </AliceCarousel>
      </div>
    </div>
  );
};
// <div>
//   <Carousel activeIndex={index} onSelect={handleSelect}>

//     <Carousel.Item>
//         <img
//         className="d-block w-100"
//         src="./img/hamburg.jpg"
//         alt="hamburg"
//         />
//         <Carousel.Caption>
//         <h3>First slide label</h3>
//         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//         <img
//         className="d-block w-100"
//         src="./img/hamburg.jpg"
//         alt="Second slide"
//         />

//         <Carousel.Caption>
//         <h3>Second slide label</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//         <img
//         className="d-block w-100"
//         src="./img/hamburg.jpg"
//         alt="Third slide"
//         />

//         <Carousel.Caption>
//         <h3>Third slide label</h3>
//         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//         </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel>
// </div>

export default MyCarousel;
