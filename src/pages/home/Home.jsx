import {Nav, Categories,Footer} from "../../components";
import "./Home.css";

const Home = () =>{
    return (
        <div>
            <Nav />
            <section className="banner-section">
                <img src="/assets/hero-image.jpg" alt="" />
                <div className="banner-text-overlay">
                    <h2 className="text-center">"The joy of dressing is an art." ~ John Galliano</h2>
                    <a href="/productListing/product.html">
                        <button className="btn btn-primary lg-text">Shop Now</button>
                    </a>
                </div>
            </section>
            <Categories />
            <Footer />
        </div>
    )
}

export {Home}
