import React from 'react';
//css
import './BigCarosel.css'
//bootstrap
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
//images
import suit from '../../assets/black suits men/95559ca9a79f7da23522cb702e5eb2e8-removebg-preview.png'
function BigCarosel() {

    return (
        <div className="BigCarosel">
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button>shop now</button>
                    </Carousel.Caption>
                    <img
                        className="d-block"
                        src={suit}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button>shop now</button>
                    </Carousel.Caption>
                    <img
                        className="d-block"
                        src={suit}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button>shop now</button>
                    </Carousel.Caption>
                    <img
                        className="d-block"
                        src={suit}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default BigCarosel