import { MdClose } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import "./WishlistCard.css"
import { useWishList } from "../../context";

const WishlistCard = ({products}) =>{
   const {wishListDispatch} = useWishList();
  const {title, subtitle , price,image , rating} = products
    return (
        <div className="card vertical-card card-with-dismiss card-shadow">
                <figure className="card-header">
                    <img src={image} alt={subtitle} />
                </figure>
               
                <button class="close-icon">
                       <MdClose className="lg-text" title="Remove from Wishlist" onClick={()=>wishListDispatch({type: "REMOVE_PRODUCT_FROM_WISHLIST", payload: products})}/>
                 </button>
                
                <section className="card-body">
                    <h5 className="card-title md-text">{title}</h5>
                    <div className={rating >3 ? "rating-badge bg-green" : "rating-badge bg-yellow"}>
                <div className="rating-container">
                    <span className="rating-number">{rating}</span>
                      <BsStarFill className="rating-star"/>

                </div>
            </div>
                    <p className="card-subtitle md-text">{subtitle}</p>
                    <div className="card-price">
                        <span className="price-after-discount md-text">{price}</span>

                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </section>
            </div>
    )
}
export {WishlistCard}
