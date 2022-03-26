import { Link } from "react-router-dom";
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
                    <Link to ="/product">
                        <button className="btn btn-primary lg-text">SHOP NOW</button>
                    </Link>
                </div>
            </section>
            <Categories />
            <Footer />
        </div>
    )
}

export {Home}
