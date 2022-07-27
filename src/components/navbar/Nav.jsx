import React from "react";
import "./Nav.css";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { FaUser, FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useCart, useProduct, useWishList} from "../../context";


const Nav = () => {
  const { wishListState } = useWishList();
  const { cartState, getCartItemCount } = useCart();
  const { authState } = useAuth();
  const navigate = useNavigate();
  const { wishListItem } = wishListState;
  const { cartItem } = cartState;
  const {filterState, filterDispatch} = useProduct();


  const token = authState.token || localStorage.getItem("token")

  const searchHandler = (e)=>{
    filterDispatch({type: "SEARCH_PRODUCT", payload: e.target.value})
  }

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
          value={filterState.searcByValue}
          onChange={searchHandler}
        />
        <button type="submit" className="btn-search">
          <BsSearch />
        </button>
      </form>

      <div className="header-links">
        <ul>
          <li>
            {token ? (
              <button
                className="btn user-logout-btn"
                onClick={()=>navigate("/profile")}
              >
                <FaUser />
              </button>
            ) : (
                <button className="btn user-login-btn" title="Login" onClick={()=> navigate("/login")}><FaRegUser /></button>
          
            )}
          </li>
          <li>
            <Link to="/wishlist">
              <div className="icon badge" title="wishlist">
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
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="icon badge" title="cart">
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
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { Nav };
