import {Nav, HorizontalCard,CartBill,Footer} from "../../components";
import { Link } from "react-router-dom";
import "./Cart.css";
import "../wishlist/Wishlist.css"
import { useCart } from "../../context";

const Cart = ()=>{
    const {cartState, getCartItemCount} = useCart();
    const {cartItem} = cartState;
    return (
        <>
         <Nav />
         <main>
        <h3 className="page-title text-center lg-text">My Cart({getCartItemCount(cartItem)})</h3>
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
            {cartItem.length===0 ? "" : <CartBill products={cartState}/> }
        </div>
    </main>
    <Footer />
      </>    
    )
}
export {Cart}
