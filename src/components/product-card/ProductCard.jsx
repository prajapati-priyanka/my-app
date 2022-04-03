import { MdFavorite } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import "./ProductCard.css";
import { useWishList } from "../../context";
import { useState } from "react";

const ProductCard = ({ products }) => {
  const [isdisabled, setIsDisabled] = useState(false);
  const { title, subtitle, price, image, isSoldOut, rating } = products;
  const { wishListState, addProductToWishList, deleteProductFromWishlist } =
    useWishList();
  const { wishListItem } = wishListState;

  const checkWishlistStatus = (products, wishListItem) => {
    return wishListItem.some((item) => item._id === products._id);
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
          <span className="price-after-discount md-text">₹{price}</span>
          {/* <span className="price-before-discount md-text">₹20,999</span> */}
          {/* <span className="discount md-text">(5% off)</span> */}
        </div>
        <button className="btn btn-primary">ADD TO CART</button>
      </section>
    </div>
  );
};

export { ProductCard };
