import { useCart } from "../../context";
import "./CartBill.css";
const CartBill = ({ products }) => {
  const { getCartItemCount } = useCart();
  const { cartItem } = products;

  const cartItemCount = getCartItemCount(cartItem)

  const totalBagPrice = cartItem.reduce(
    (acc, curr) => (acc += Number(curr.qty) * Number(curr.priceBeforeDiscount)),
    0
  );
  const totalDiscountPrice = cartItem.reduce(
    (acc, curr) =>
      (acc +=
        Number(curr.qty) *
        Number(curr.priceBeforeDiscount) *
        Number(curr.discount / 100)),
    0
  );
  const finalPrice = totalBagPrice - totalDiscountPrice;
  const deliveryCharge = 100;

  const finalCheckoutPrice = finalPrice + deliveryCharge;

  return (
    <div className="bill-container">
      <div className="bill-card">
        <h5 className="card-title lg-text">PRICE DETAILS</h5>
        <div className="items-container">
          <div className="items-price md-text">
            <p className="item-type">
              Price ({getCartItemCount(cartItem)}{" "}
              {cartItemCount === 1 ? "item" : "items"})
            </p>
            <p className="item-type-price">₹{totalBagPrice}</p>
          </div>
          <div className="items-price md-text">
            <p className="item-type">Discount</p>
            <p className="item-type-price">- ₹{totalDiscountPrice}</p>
          </div>
          <div className="items-price md-text">
            <p className="item-type">Delivery</p>
            <p className="item-type-price">₹{deliveryCharge}</p>
          </div>
        </div>
        <div className="items-price total-price-container">
          <p className="item-type total-price lg-text">Total Amount</p>
          <p className="item-type-price total-price-value  md-text">
            ₹{finalCheckoutPrice}
          </p>
        </div>
        <div className="items-price total-saving-container">
          <p className="item-type total-saving md-text">
            You will save ₹ {totalDiscountPrice} on this order{" "}
          </p>
        </div>

        <button className="btn btn-primary">PLACE ORDER</button>
      </div>
    </div>
  );
};
export { CartBill };
