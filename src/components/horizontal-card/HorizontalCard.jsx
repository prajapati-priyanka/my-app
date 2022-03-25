import { MdAddCircleOutline } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";
import "./HorizontalCard.css";

const HorizontalCard =(props)=>{
const { image,title,subtitle, priceAfterDiscount, priceBeforeDiscount, discount}= props
    
    return (
        <div className="card card-horizontal card-shadow">
   
                    <figure className="card-header">
                        <img src={image}
                            className="card-img" alt="" />
                    </figure>
    
                    <section className="card-body">
                        <h5 className="card-title md-text">{title}</h5>
                        <p className="card-subtitle md-text">{subtitle}</p>
                        <div className="card-price">
                            <span className="price-after-discount md-text">{priceAfterDiscount}</span>
                            <span className="price-before-discount md-text">{priceBeforeDiscount}</span>
                            <span className="discount md-text">{discount}</span>
                        </div>
                        <div className="card-quantity">
                            <span className="product-quantity md-text">Quantity:</span>
                            <button><FiMinusCircle className="md-text"/></button>
                            <input type="number" value="1" className="text-center" />
                            <button><MdAddCircleOutline  className="md-text" /></button>
                        </div>
                        <div className="card-btn">
                            <button className="btn btn-primary">REMOVE FROM CART</button>
                            <button className="btn btn-outline-primary">SAVE TO WISHLIST</button>
                         </div>   
                    </section>
                </div>
                
    )
}

export {HorizontalCard}