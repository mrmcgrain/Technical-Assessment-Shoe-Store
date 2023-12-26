import logo from "../assets/logo.svg"
import cart from "../assets/icon-cart.svg"
import profile from "../assets/image-avatar.png"
import { useData } from "../hooks/context-hook";
// import React, {useState} from 'react'
// import Cart from "../comps/Cart"
import CartCount from "../comps/CartCount"

const Header = () => {


    const {  handleDisplay, count, iconMenu, handleSideNav } = useData()


    return (

        <>

            <div id='Header'
                className="border header-grid"
            >
                <div id="left-Nav" className="left-flex">

                    <div className="menu" onClick={(e) => handleSideNav(e)}>
                        <img src={iconMenu} />
                    </div>

                    <div>
                        <img src={logo} />
                    </div>

                    <div className="nav"> Collections</div>
                    <div className="nav">Men</div>
                    <div className="nav">Women</div>
                    <div className="nav">About</div>
                    <div className="nav">Contact</div>
                </div>

                <div id="right-Nav" className="right-flex">

                    <div
                        onClick={(e) => { handleDisplay(e) }}
                    >

                        {count > 0 && <CartCount />}
                       

<div></div>
                        <img
                            className="profile"
                            src={cart}>
                        </img>


                    </div>

                    <div>


                    </div>

                    <div>
                        <img
                            className="profile"
                            src={profile} />
                    </div>

                </div>




                <div className="nav-low"></div>

            </div>
        </>
    )
};

export default Header
