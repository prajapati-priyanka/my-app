import { MdClose } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import "./WishlistCard.css";
import { useCart, useWishList } from "../../context";
import { useState } from "react";

const WishlistCard = ({ products }) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const { deleteProductFromWishlist } = useWishList();
  const{addToCart} = useCart();
  const { title, subtitle, price, image, rating, isSoldOut } = products;

  return (
    <div className="card ecommerce-card card-with-badge card-with-dismiss card-shadow">
      <figure className="card-header">
        <img src={image} alt={subtitle} />
      </figure>
      {isSoldOut && <span className="card-badge">Out of Stock</span>}

      <button className="close-icon">
        <MdClose
          className="lg-text"
          title="Remove from Wishlist"
          onClick={() => deleteProductFromWishlist(products)}
        />
      </button>

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
        </div>
        <button className="btn btn-primary" disabled={isDisabled} onClick={()=>{
          addToCart(products, setIsDisabled);
          deleteProductFromWishlist(products) 
        }}>ADD TO CART</button>
      </section>
    </div>
  );
};
export { WishlistCard };
