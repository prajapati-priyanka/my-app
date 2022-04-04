import { FiPlusCircle} from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import "./HorizontalCard.css";
import { useCart, useWishList } from "../../context";
import { useState } from "react";

const HorizontalCard = ({products}) => {
  const[isDisabled, setIsDisabled] = useState(false)
  const {removeFromCart} = useCart();
  const {addProductToWishList} = useWishList();
  const {
    image,
    title,
    subtitle,
    priceAfterDiscount,
    priceBeforeDiscount,
    discount,
  } = products;

  return (
    <div className="card card-horizontal card-shadow">
      <figure className="card-header">
        <img src={image} className="card-img" alt={subtitle} />
      </figure>

      <section className="card-body">
        <h5 className="card-title md-text">{title}</h5>
        <p className="card-subtitle md-text">{subtitle}</p>
        <div className="card-price">
        <span className="price-after-discount md-text">₹{priceAfterDiscount}</span>
          <span className="price-before-discount md-text">₹{priceBeforeDiscount}</span>
          <span className="discount md-text">({discount}% OFF)</span>
        </div>
        <div className="card-quantity">
          <span className="product-quantity md-text">Quantity:</span>
          <button>
            <FiMinusCircle className="md-text" />
          </button>
          <span className="quantity-number md-text ">1</span>
          <button>
            <FiPlusCircle className="md-text" />
          </button>
        </div>
        <div className="card-btn">
          {/* <button className="btn btn-primary" onClick={()=>removeFromCart(products)}>REMOVE FROM CART</button> */}
          <button className="btn btn-outline-primary" disabled={isDisabled} onClick={()=>{
            addProductToWishList(products, setIsDisabled);
            removeFromCart(products)
          }}>SAVE TO WISHLIST</button>
        </div>
      </section>
    </div>
  );
};

export { HorizontalCard };
