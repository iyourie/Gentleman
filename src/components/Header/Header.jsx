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

    // use state hook 
    const [left, setLeft] = useState("-300px")

    return (
        < header >
            <div className="container">
                <div className="menu">
                    {/* large screens menu start*/}
                    <div className="computer-menu">
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
                    </div>
                    {/* large screens menu end*/}

                    {/* the meduim and small screens menu start*/}
                    <div className="mobile-menu">

                        {/* when user click anywhere exept the menu , the menu hide */}
                        <aside onClick={() => {
                            setLeft("-300px")
                            document.querySelector('aside').classList.remove('overlay')
                        }}></aside>

                        <div className="mobile-menu-container" style={{ left: left }}>
                            <div className="logo-mobile">
                                <img src={Logo} alt="" />
                                <h2>GENTLEMAN</h2>

                                {/* when user close the menu  */}
                                <RiCloseLine onClick={() => {
                                    setLeft('-300px')
                                    document.querySelector('aside').classList.remove('overlay')
                                    document.body.style.overflow = 'auto';
                                }} className='menu-icon' size={30} id='menu-icon-id' />

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

                        {/* when user open the menu  */}
                        <AiOutlineMenu onClick={() => {
                            setLeft('0px')
                            document.querySelector('aside').classList.add('overlay');
                            document.body.style.overflow = 'hidden';
                        }} className='menu-icon' size={23} />

                    </div>
                    {/* the meduim and small screens menu end*/}

                </div>

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