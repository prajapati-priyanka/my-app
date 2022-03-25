import {Nav} from "../../components/navbar/Nav.jsx";
import { HorizontalCard } from "../../components/horizontal-card/HorizontalCard.jsx";
import {Footer} from "../../components/footer/Footer.jsx";
import "./Cart.css";
import "../wishlist/Wishlist.css"

const Cart = ()=>{
    return (
        <div>
         <Nav />
         <main>
        <h3 className="page-title text-center lg-text">My Cart(2)</h3>
        <div className="cart-bill-container ">
            <div className="cart-container">
              <HorizontalCard image = {"/assets/cart/cart-1.jpg"} 
                             title ={"JUNEBERRY"}
                             subtitle={"Casual Regular Sleeves Striped Women Blue Top"}
                             priceAfterDiscount = {"₹299"}
                             priceBeforeDiscount ={"₹1,199"}
                             discount ={("75% off")}

              />
              <HorizontalCard image = {"/assets/cart/cart-2.jpg"} 
                             title ={"DRESSBERRY"}
                             subtitle={" Cotton Multi Color T-Shirts"}
                             priceAfterDiscount = {"₹329"}
                             priceBeforeDiscount ={"₹1,199"}
                             discount ={("73% off")}

              />
            </div>
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
   
            </div>
        </div>
    </main>
    <Footer />
      </div>    
    )
}
export {Cart}