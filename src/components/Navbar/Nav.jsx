import React from "react";
import "./Nav.css";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";


const Nav = ()=>{
    return (
        <header className="header">
        
            <div className="logo-container">
                <a href="../index.html">
                    <img src="/assets/logo.png" alt="logo" />
                    <span className="logo-name lg-text">Pine Apparel</span>
                </a>
            </div>
       
            <form className="search-container">
                <input type="search" placeholder="Search Product" className="input-search" />
                <button type="submit" className="btn-search">
                    <BsSearch />
                </button>
            </form>
       
            <div className="header-links">
                <ul>
                    <li>
                        <a href="/authentication/login/login.html"><button className="btn btn-primary md-text">Login</button></a>
                    </li>
                    <li>
                        <a href="/wishlist/wishlist.html">
                            <div className="icon badge">
                                <MdOutlineFavoriteBorder />
                                <span className="badge-count">8</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/cart/cart.html">
                            <div className="icon badge">
                                <BsCart />
                                <span className="badge-count">8</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        

    </header>

    )
}

export {Nav}