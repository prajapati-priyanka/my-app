import {Nav, HorizontalCard,Footer} from "../../components";
import { Link } from "react-router-dom";
import "./Cart.css";
import "../wishlist/Wishlist.css"
import { useCart } from "../../context";

const Cart = ()=>{
    const {cartState} = useCart();
    const {cartItem} = cartState;
    return (
        <div>
         <Nav />
         <main>
        <h3 className="page-title text-center lg-text">My Cart({cartItem.length})</h3>
        <div className="cart-bill-container ">
            <div className="cart-container">
            {cartItem.length === 0 ? (
            <h2 className="no-product-text text-center">
              Hey,it feels so light!<Link to="/product" className="go-to-product"><small>Let's add some items.</small></Link>
            </h2>
          ) : (
            cartItem.map((product) => (
              <HorizontalCard products={product} key={product._id} />
            ))
          )}
            
            </div>
            {cartItem.length===0 ? "" :
            <div className="bill-container">
               <div className="bill-card">
                   <h5 className="card-title lg-text">PRICE DETAILS</h5>
                   <div className="items-container">
                       <div className="items-price md-text">
                           <p className="item-type">Price (2 item)</p>
                           <p className="item-type-price">₹ 2398</p>
                       </div>
                       <div className="items-price md-text">
                           <p className="item-type">Discount</p>
                           <p className="item-type-price">₹ 1774.52</p>
                       </div>
                       <div className="items-price md-text">
                           <p className="item-type">Delivery</p>
                           <p className="item-type-price">FREE</p>
                       </div>
                   </div>
                   <div className="items-price total-price-container">
                       <p className="item-type total-price lg-text">Total Amount</p>
                       <p className="item-type-price total-price-value  md-text">₹ 628</p>
                   </div>
                   <div className="items-price total-saving-container">
                       <p className="item-type total-saving md-text">You will save ₹ 1774.52 on this order </p>
                   
                   </div>
                   
                   <button className="btn btn-primary">PLACE ORDER</button>
               </div>
   
            </div>}
        </div>
    </main>
    <Footer />
      </div>    
    )
}
export {Cart}