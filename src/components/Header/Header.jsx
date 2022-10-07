//importing some things here (icons , css...)
import React, { useState } from 'react';
import './Header.css'
import Logo from '../../assets/Logo.png'
import { AiOutlineMenu } from "react-icons/ai";
import { BsMoon, BsSun, BsHeart, BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { RiCloseLine } from 'react-icons/ri'
//header function
function Header() {
    const [opacity, setOpacity] = useState(false)
    const [Menu, setMenu] = useState(false)
    return (
        <header>
            <div className="container">
                <nav>
                    {/* the meduim and small screens menu start*/}
                    <div className="mobile-menu">
                        <aside></aside>
                        {Menu
                            ? <div className="mobile-menu-container">
                                <div className="logo-mobile">
                                    <img src={Logo} alt="" />
                                    <h2>GENTLEMAN</h2>
                                    {/* if user close the menu : */}
                                    <RiCloseLine onClick={() => {
                                        setMenu(false)
                                        document.querySelector('aside').classList.remove('overlay')
                                    }} className='menu' size={30} id='menu' />
                                </div>
                                <div className="links-mobile">
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
                            </div>
                            // if user clicks the menu : 
                            : <AiOutlineMenu className='menu' onClick={() => {
                                setMenu(true);
                                document.querySelector('aside').classList.add('overlay')
                                document.body.style.overflow = 'hidden'
                            }} />}
                    </div>
                    {/* the meduim and small screens menu end*/}
                    {/* large screens menu start*/}
                    <div className="logo">
                        <img src={Logo} alt="" />
                        <h2>GENTLEMAN</h2>
                    </div>
                    <div className="links">
                        <ul>
                            <li><a href="Home">HOME</a></li>
                            <li><a href="CATEGORIES">CATEGORIES</a></li>
                            <li><a href="SHOP">SHOP</a></li>
                            <li><a href="ABOUT">ABOUT</a></li>
                            <li><a href="CONTACT">CONTACT</a></li>
                            <li><a href="ACCOUNT">ACCOUNT</a></li>
                            <li><a href="BLOG">BLOG</a></li>
                        </ul>
                    </div>
                </nav>
                {/* large screens menu end*/}

                {/* this will be in all screens the same*/}
                <div className="functions">
                    <a href="BsMoon"><BsMoon /></a>
                    <a href="BsSearch"><BsSearch /></a>
                    <a href="BsHeart"><BsHeart /></a>
                    <a href="FiShoppingCart"><FiShoppingCart /></a>
                    <a href="CgProfile"><CgProfile /></a>
                </div>
            </div >
        </header >
    )
}
export default Header