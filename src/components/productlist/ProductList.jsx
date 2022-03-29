import { useProduct } from "../../context/product-context";
import { ProductCard } from "../product-card/ProductCard";
import "./ProductList.css" ;

const ProductList = () => {
    const {finalfilteredList} = useProduct();
    return (
        <main className="product-display">
            <div className="product-display-qty text-center ">
                <strong className="lg-text">Showing all products</strong>
                <small className="md-text">(Showing 20 products)</small>
            </div>
            <div className="product-display-container">
                 {
                       finalfilteredList.map(products=>{
                             return <ProductCard products={products} />
                       })
                 }

             </div>
        </main>
    )
}
export {ProductList}