import React from 'react'
import Logo from '../../img/logo.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Carrousel = () => {
    return (
        <Carousel autoPlay={true} >
                <div>
                    <img src={Logo} alt='img1'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Logo} alt='img1'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Logo} alt='img1'/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    )
}

export default Carrousel
