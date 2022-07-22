import { MdFavorite } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import "./ProductCard.css";
import { useAuth, useCart, useWishList } from "../../context";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    title,
    subtitle,
    priceAfterDiscount,
    priceBeforeDiscount,
    discount,
    image,
    isSoldOut,
    rating,
  } = products;
  const { wishListState, addProductToWishList, deleteProductFromWishlist } =
    useWishList();

  const { authState } = useAuth();
  const token = authState.token || localStorage.getItem("token");
  const { wishListItem } = wishListState;

  const { cartState, addToCart } = useCart();
  const { cartItem } = cartState;

  const checkWishlistStatus = (products, wishListItem) => {
    return wishListItem.some((item) => item._id === products._id);
  };

  const checkCartStatus = (products, cartItem) => {
    return cartItem.find((item) => item._id === products._id);
  };

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
            {token ? (
              <MdFavorite title="Added To WishList" />
            ) : (
              <MdFavorite className="wishlist-icon" title="Added To WishList" />
            )}
          </button>
        </span>
      ) : (
        <span>
          <button
            className="card-floating-icon"
            disabled={isDisabled}
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
         <span className="price-before-discount md-text">
            ₹{priceBeforeDiscount}
          </span>
          <span className="discount md-text">({discount}% OFF)</span>
        </div>
        {isSoldOut ? (
          <button
            className="btn btn-primary btn-disabled"
            disabled={!isDisabled}
          >
            ADD TO CART
          </button>
        ) : checkCartStatus(products, cartItem) ? (
          <Link to="/cart" className="link-to-cart">
            <button className="btn btn-primary">
             { token ? "GO TO CART" : "ADD TO CART"}
            </button>
          </Link>
        ) : (
          <button
            className="btn btn-primary"
            disabled={isDisabled}
            onClick={() => addToCart(products, setIsDisabled)}
          >
            ADD TO CART
          </button>
        )}
      </section>
    </div>
  );
};

export { ProductCard };
