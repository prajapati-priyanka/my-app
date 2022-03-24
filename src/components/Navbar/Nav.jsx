import React from "react";
import "Nav.css";


const Nav = ()=>{
    return (
        <header className="header">
        <section className="header-section">
            <div className="logo-container">
                <a href="../index.html">
                    <img src="/assets/logo.png" alt="logo" />
                </a>
                <span className="logo-name lg-text">Pine Apparel</span>
            </div>
        </section>

        <div className="header-section">
            <form className="search-container">
                <button type="submit" className="btn-search">
                    <i className="fa fa-search"></i>
                </button>
                <input type="search" placeholder="Search Product" className="input-search" />
            </form>
            <section className="header-icons">
                <ul>
                    <li>
                        <a href="/authentication/login/login.html"><button className="btn btn-primary">Login</button></a>
                    </li>
                    <li>
                        <a href="/wishlist/wishlist.html">
                            <div className="icon badge">
                                <i className="fa fa-heart-o"></i>
                                <span className="badge-count">8</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/cart/cart.html">
                            <div className="icon badge">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="badge-count">8</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </div>

    </header>

    )
}

export {Nav}