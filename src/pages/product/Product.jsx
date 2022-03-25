import {Nav,Filter, ProductList,Footer} from "../../components";
import "./Product.css";

const Product = () =>{
    return (
        <div>
            <Nav />
            <div className="product-container">
                <Filter />
                <ProductList />
            </div>
            <Footer />
        </div>
    )
}

export {Product}