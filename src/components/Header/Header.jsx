import React from 'react';
import './Header.css'
import Logo from '../../assets/Logo.jpg'
import { BsMoon, BsSun, BsHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <h2>Gentleman</h2>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="HOME">HOME</a></li>
                        <li><a href="CATEGORIES">CATEGORIES</a></li>
                        <li><a href="SHOP">SHOP</a></li>
                        <li><a href="ABOUT">ABOUT</a></li>
                        <li><a href="CONTACT">CONTACT</a></li>
                        <li><a href="ACCOUNT">ACCOUNT</a></li>
                        <li><a href="BLOG">BLOG</a></li>
                    </ul>
                </div>
                {/* <div className="functions">
                    <a href="BsMoon"><BsMoon /></a>
                    <a href="BsSun"><BsSun /></a>
                    <a href="BsHeart"><BsHeart /></a>
                    <a href="CgProfile"><CgProfile /></a>
                    <a href="FiShoppingCart"><FiShoppingCart /></a>
                </div> */}
                <BsMoon />
            </div>
        </header>
    )
}
export default Header