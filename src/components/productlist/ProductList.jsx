import { Card } from "../product-card/ProductCard.jsx";
import "./ProductList.css" ;
const ProductList = () => {
    return (
        <main className="product-display">
            <div className="product-display-qty text-center ">
                <strong className="lg-text">Showing all products</strong>
                <small className="md-text">(Showing 20 products)</small>
            </div>
            <Card />
        </main>
    )
}
export {ProductList}