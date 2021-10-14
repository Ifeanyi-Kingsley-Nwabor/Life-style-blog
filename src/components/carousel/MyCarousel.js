import React, {useState} from 'react';
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import NavBar from '../NavBar'
import mosqueAbuDhabi from './img/mosqueAbuDhabi.jpg';
import  hamburg from './img/hamburg.jpg';
import miami from './img/miami.jpg';
import spotLight from './img/spot-light.jpeg';
import Header from '../Header'



const MyCarousel = () => {
    
        // const [index, setIndex] = useState(0);
      
        // const handleSelect = (selectedIndex, e) => {
        //   setIndex(selectedIndex);
        // };
    return (
    <div> 
        <div><NavBar /></div>
        <div>
            <AliceCarousel autoPlay infinite autoPlayInterval="3000">
                <Header />
                <img src={hamburg} className="sliderimg"/>
                <img src={mosqueAbuDhabi} className="sliderimg"/>
                <img src={miami} className="sliderimg"/>
                <img src={spotLight} className="sliderimg"/>
            </AliceCarousel>
        </div>
    
    </div>
    )
}
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