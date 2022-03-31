import { MdFavorite } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import "./ProductCard.css";
import { useWishList } from "../../context";


const ProductCard = ({products}) =>{
    
    const {title, subtitle , price,image, isSoldOut,rating} = products

    const {wishListState, wishListDispatch} = useWishList();
    const {wishListItem} = wishListState;

  

    // console.log("From product card:" , id, wishListCount, wishListItem)
    return (
        
        <div className="card ecommerce-card card-with-badge card-shadow">
        <figure className="card-header">
            <img src={image} alt={subtitle} />
        </figure>
       { isSoldOut && <span className="card-badge">Out of Stock</span>}
       {wishListItem.some(item => item._id === products._id) ? (<span>
        <button className="card-floating-icon" onClick={()=>wishListDispatch({type:"REMOVE_PRODUCT_FROM_WISHLIST", payload: products})}>
           <MdFavorite title="Add To WishList"/>
        </button>
       </span>) : <span>
       <button className="card-floating-icon" onClick={()=>wishListDispatch({type:"ADD_PRODUCT_TO_WISHLIST", payload: products})}>
           <MdFavorite className="wishlist-icon" title="Add To WishList"/>
        </button>
           
           </span>}
       
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
                <span className="price-after-discount md-text">₹{price}</span>
                {/* <span className="price-before-discount md-text">₹20,999</span> */}
                {/* <span className="discount md-text">(5% off)</span> */}
            </div>
            <button className="btn btn-primary">ADD TO CART</button>
        </section>
    </div>
               
 )
}

export {ProductCard}