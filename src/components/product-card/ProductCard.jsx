import { MdFavorite } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import "./ProductCard.css";
import { useCart, useWishList } from "../../context";
import { useState } from "react";
import {Link} from "react-router-dom";

const ProductCard = ({ products }) => {
  const [isdisabled, setIsDisabled] = useState(false);
  const { title, subtitle, priceAfterDiscount, priceBeforeDiscount, discount, image, isSoldOut, rating } = products;
  const { wishListState, addProductToWishList, deleteProductFromWishlist } =
    useWishList();
  const { wishListItem } = wishListState;

  const {cartState, addToCart} = useCart();
  const {cartItem} = cartState;

  const checkWishlistStatus = (products, wishListItem) => {
    return wishListItem.some((item) => item._id === products._id);
  };

const checkCartStatus = (products, cartItem) => {
  return cartItem.find(item => item._id === products._id)
}

  return (
    <div className="card ecommerce-card card-with-badge card-shadow">
      <figure className="card-header">
        <img src={image} alt={subtitle} />
      </figure>
      {isSoldOut && <span className="card-badge">Out of Stock</span>}
      {checkWishlistStatus(products, wishListItem) ? (
        <span>
          <button
            className="card-floating-icon"
            onClick={() => deleteProductFromWishlist(products)}
          >
            <MdFavorite title="Added To WishList" />
          </button>
        </span>
      ) : (
        <span>
          <button
            className="card-floating-icon"
            disabled={isdisabled}
            onClick={() => addProductToWishList(products, setIsDisabled)}
          >
            <MdFavorite className="wishlist-icon" title="Add To WishList" />
          </button>
        </span>
      )}

      <section className="card-body">
        <h5 className="card-title md-text">{title}</h5>
        <div
          className={
            rating > 3 ? "rating-badge bg-green" : "rating-badge bg-yellow"
          }
        >
          <div className="rating-container">
            <span className="rating-number">{rating}</span>
            <BsStarFill className="rating-star" />
          </div>
        </div>

        <p className="card-subtitle md-text">{subtitle}</p>
        <div className="card-price">
          <span className="price-after-discount md-text">₹{priceAfterDiscount}</span>
          <span className="price-before-discount md-text">₹{priceBeforeDiscount}</span>
          <span className="discount md-text">({discount}% OFF)</span>
        </div>
        {checkCartStatus(products,cartItem) ? <Link to="/cart" className="link-to-cart"><button className="btn btn-primary">GO TO CART</button></Link> : (
        <button className="btn btn-primary" disabled={isdisabled} onClick={()=> addToCart(products,setIsDisabled)}>ADD TO CART</button>)}
       
      </section>
    </div>
  );
};

export { ProductCard };
