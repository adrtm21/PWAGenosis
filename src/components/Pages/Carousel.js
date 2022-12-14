import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 import carrusel from '../assets/Carrusel.jpg'
export default function carousel() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={carrusel} />
                </div>
                <div>
                    <img src={carrusel} />
                </div>
                <div>
                    <img src={carrusel} />
                </div>
            </Carousel>
        </div>
    );
}