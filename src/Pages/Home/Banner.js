import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/bannar/bannar-1.jpg'
import banner2 from '../../images/bannar/bannar-2.jpg'
import banner3 from '../../images/bannar/bannar-3.jpg'
import './Home.css'

const Banner = () => {
    return (
        <div className='banner'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-height"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-height"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-height"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;