import {Nav} from "../../components/navbar/Nav.jsx";
import {Filter} from "../../components/filter/Filter.jsx";
import { ProductList } from "../../components/productlist/ProductList.jsx";
import {Footer} from "../../components/footer/Footer.jsx";
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