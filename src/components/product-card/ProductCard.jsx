import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsStar } from "react-icons/bs";
import "./ProductCard.css";


const ProductCard = ({products}) =>{
    
    const {title, subtitle ,id, price,image, isSoldOut,rating} = products
    return (
        
        <div className="card ecommerce-card card-with-badge card-shadow">
        <figure className="card-header">
            <img src={image} alt={subtitle} />
        </figure>
       { isSoldOut && <span className="card-badge">Out of Stock</span>}
        <button className="card-floating-icon">
           <MdOutlineFavoriteBorder className="wishlist-icon" title="Add To WishList"/>
        </button>
        <section className="card-body">
            <h5 className="card-title md-text">{title}</h5>
            <div className={rating >3 ? "rating-badge bg-green" : "rating-badge bg-yellow"}>
                <div className="rating-container">
                    <span className="rating-number">{rating}</span>
                      <BsStar className="rating-star"/>

                </div>
            </div>
           
            <p className="card-subtitle md-text">{subtitle}</p>
            <div className="card-price">
                <span className="price-after-discount md-text">₹{price}</span>
                <span className="price-before-discount md-text">₹20,999</span>
                <span className="discount md-text">(5% off)</span>
            </div>
            <button className="btn btn-primary">ADD TO CART</button>
        </section>
    </div>
               
 )
}

export {ProductCard}