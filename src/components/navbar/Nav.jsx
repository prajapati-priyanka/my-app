import React from "react";
import "./Nav.css";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart, useWishList } from "../../context";


const Nav = ()=>{
    const {wishListState} = useWishList();
    const {cartState} = useCart();
    const {wishListItem} = wishListState;
    const {cartItem} = cartState;

    
    return (
        <header className="header">
        
            <div className="logo-container">
                <Link to="/">
                    <img src="/assets/logo.png" alt="logo" />
                    <span className="logo-name lg-text">Pine Apparel</span>
                </Link>
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
                        <Link to="/login"><button className="btn btn-primary md-text">Login</button></Link>
                    </li>
                    <li>
                        <Link to="/wishlist">
                            <div className="icon badge">
                                <MdOutlineFavoriteBorder />
                                {wishListItem.length === 0 ? "" : <span className="badge-count">{wishListItem.length}</span>}
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <div className="icon badge">
                                <BsCart />
                                {cartItem.length === 0 ? "" : <span className="badge-count">{cartItem.length}</span>}
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        

    </header>

    )
}

export {Nav}
