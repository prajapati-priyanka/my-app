import { MdOutlineFavoriteBorder } from "react-icons/md";
import "./ProductCard.css";


const Card = (props) =>{
    
    const {title, subtitle,image, price} = props
    return (
        
            <div className="card vertical-card card-shadow">
                <figure className="card-header">
                    <img src={image} alt="" />
                </figure>
                <button className="card-floating-icon">
                   <MdOutlineFavoriteBorder title="Add to Wishlist"/>
                    
                </button>
                <section className="card-body">
                    <h5 className="card-title md-text">{title}</h5>
                    <p className="card-subtitle md-text">{subtitle}</p>
                    <div className="card-price">
                        <span className="price-after-discount md-text">{price}</span>

                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </section>
            </div>
      
    )
}

export {Card}