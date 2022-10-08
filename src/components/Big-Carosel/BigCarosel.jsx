import React from 'react';
import './BigCarosel.css'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import suit from '../../assets/black suits men/95559ca9a79f7da23522cb702e5eb2e8-removebg-preview.png'
import shoe from '../../assets/shoes/51ONEVGIfNS._AC_SY575._SX._UX._SY._UY_-removebg-preview.png'
import perfume from '../../assets/parfum/71C574ya6DL._AC_UL320_-removebg-preview.png'
import watch from '../../assets/watches/black/61ZYQO1EH1L._AC_UL320_-removebg-preview.png'
import glasses from '../../assets/glasses/c030d80a029b673b69f658898ca3203f-removebg-preview.png'
let ImageSlider = ({ name, h1, h2, h3, img }) => {
    return (
        <div className={name}>
            < MdOutlineArrowBackIosNew />
            <div className="info">
                <h2>{h2}</h2>
                <h1>{h1}</h1>
                <h3>{h3}</h3>
                <button>shop now</button>
            </div>
            <AiOutlineMinus />
            <div className="image">
                <img src={img} alt="" />
            </div>
            <MdOutlineArrowForwardIos />
        </div>
    )
}
function BigCarousel() {
    return (
        <div className="BigCarousel">
            <div className="container">
                <ImageSlider name="Carousel-one" h2='New Arrival' h1='GENTLEMAN Suits' h3='Last call for upto 25%' img={suit} />
                {/* <ImageSlider name="Carousel-two" h2='Latest Trending' h1='GENTLEMAN Shoes' h3='Last call for upto 35%' img={shoe} />
                <ImageSlider name="Carousel-three" h2='New Trending' h1='GENTLEMAN Perfumes' h3='Last call for upto 40%' img={perfume} />
                <ImageSlider name="Carousel-four" h2='Latest Trending' h1='GENTLEMAN Watches' h3='Last call for upto 55%' img={watch} />
                <ImageSlider name="Carousel-five" h2='Super Deals' h1='GENTLEMAN Glasses' h3='Last call for upto 15%' img={glasses} /> */}
            </div>
        </div>
    )
}
export default BigCarousel