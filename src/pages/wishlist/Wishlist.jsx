import {Nav, WishlistCard,Footer} from "../../components";
import "./Wishlist.css"

const Wishlist = () => {
    return (
        <div>
            <Nav />
            <main>
            <h3 className="page-title text-center lg-text">My Wishlist(3)</h3>
            <div className ="wishlist-container">
                <WishlistCard image ={"/assets/products/prod-3.jpg"}
                  title ={"Ahalyaa"}
                  subtitle = {"Women Burgundy & Golden Printed Kurta with Trousers"}
                  price = {"₹1500"}
                />
            <WishlistCard image ={"/assets/products/prod-1.jpg"}
                  title ={"Sangria"}
                  subtitle = {"Full Sleeve Padded Jacket"}
                  price = {"₹1,227"}
                  btnText ={"ADD TO CART"}
            />
            <WishlistCard image ={"/assets/products/prod-2.jpg"}
                  title ={"Sangria"}
                  subtitle = {"Pink Georgette Ruffled Saree"}
                  price = {"₹1349"}
                  btnText ={"ADD TO CART"}
            />
            </div>
            </main>
            <Footer />
        </div>
    )
}
export {Wishlist}