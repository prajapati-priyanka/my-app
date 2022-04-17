import React from "react";
import "./Nav.css";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishList } from "../../context";

const Nav = () => {
  const { wishListState } = useWishList();
  const { cartState, getCartItemCount } = useCart();
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();
  const { wishListItem } = wishListState;
  const { cartItem } = cartState;

  const wishListRouteHandler = () => {
    authState.token ? navigate("/wishlist") : navigate("/login");
  };

  const cartRouteHandler = () => {
    authState.token ? navigate("/cart") : navigate("/login");
  };

  const logOutHandler = () => {
    console.log("Inosde Log out handler");
    navigate("/login");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    authDispatch({ type: "LOGOUT" });
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="/assets/logo.png" alt="logo" />
          <span className="logo-name lg-text">Pine Apparel</span>
        </Link>
      </div>

      <form className="search-container">
        <input
          type="search"
          placeholder="Search Product"
          className="input-search"
        />
        <button type="submit" className="btn-search">
          <BsSearch />
        </button>
      </form>

      <div className="header-links">
        <ul>
          <li>
            {localStorage.getItem("token") ? (
              <button
                className="btn btn-primary md-text"
                onClick={logOutHandler}
              >
                LOGOUT
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary md-text">LOGIN</button>
              </Link>
            )}
          </li>
          <li>
            <div className="icon badge" onClick={wishListRouteHandler}>
              <MdOutlineFavoriteBorder />
              {localStorage.getItem("token") ? (
                wishListItem.length === 0 ? (
                  ""
                ) : (
                  <span className="badge-count">{wishListItem.length}</span>
                )
              ) : (
                ""
              )}
            </div>
          </li>
          <li>
            <div className="icon badge" onClick={cartRouteHandler}>
              <BsCart />
              {localStorage.getItem("token") ? (
                cartItem.length === 0 ? (
                  ""
                ) : (
                  <span className="badge-count">
                    {getCartItemCount(cartItem)}
                  </span>
                )
              ) : (
                ""
              )}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { Nav };
