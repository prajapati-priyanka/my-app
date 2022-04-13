import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import "./HorizontalCard.css";
import { useCart, useWishList } from "../../context";
import { useState } from "react";

const HorizontalCard = ({ products }) => {
  const [isPlusDisabled, setIsPlusDisabled] = useState(false);
  const [isMinusDisabled, setIsMinusDisabled] = useState(false);

  const { removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const { addProductToWishList, wishListState } = useWishList();
  const {
    image,
    title,
    subtitle,
    priceAfterDiscount,
    priceBeforeDiscount,
    discount,
    qty,
  } = products;

  const checkItemExistInWishList = (products) => {
    const itemExist = wishListState.wishListItem.find(
      (item) => item._id === products._id
    );

    if (itemExist) {
      removeFromCart(products);
    } else {
      addProductToWishList(products, setIsPlusDisabled);
      removeFromCart(products);
    }
  };

  return (
    <div className="card card-horizontal card-with-dismiss card-shadow">
      <figure className="card-header">
        <img src={image} className="card-img" alt={subtitle} />
      </figure>

      <section className="card-body">
        <h5 className="card-title md-text">{title}</h5>
        <p className="card-subtitle md-text">{subtitle}</p>
        <div className="card-price">
          <span className="price-after-discount md-text">
            ₹{priceAfterDiscount}
          </span>
          <span className="price-before-discount md-text">
            ₹{priceBeforeDiscount}
          </span>
          <span className="discount md-text">({discount}% OFF)</span>
        </div>
        <div className="card-quantity">
          <span className="product-quantity md-text">
            Quantity:{" "}
            {qty === 1 ? (
              <button onClick={() => removeFromCart(products)}>
                <FiTrash2 className="md-text" />
              </button>
            ) : (
              <button
                disabled={isMinusDisabled}
                onClick={() => decrementQuantity(products, setIsMinusDisabled)}
              >
                <FiMinusCircle className="md-text" />
              </button>
            )}
          </span>

          <span className="quantity-number md-text ">{qty}</span>
          <button
            disabled={isPlusDisabled}
            onClick={() => incrementQuantity(products, setIsPlusDisabled)}
          >
            <FiPlusCircle className="md-text" />
          </button>
        </div>
        <div className="card-btn">
          <button
            className="btn btn-primary"
            disabled={isPlusDisabled}
            onClick={() => {
              checkItemExistInWishList(products);
            }}
          >
            SAVE TO WISHLIST
          </button>
        </div>
      </section>
      <button className="close-icon" onClick={() => removeFromCart(products)}>
        <MdClose className="lg-text" title="Remove from Cart" />
      </button>
    </div>
  );
};

export { HorizontalCard };
