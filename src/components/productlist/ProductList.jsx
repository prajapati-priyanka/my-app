import { Card } from "../product-card/ProductCard.jsx";
import "./ProductList.css" ;

const ProductList = () => {
    return (
        <main className="product-display">
            <div className="product-display-qty text-center ">
                <strong className="lg-text">Showing all products</strong>
                <small className="md-text">(Showing 20 products)</small>
            </div>
            <div className="product-display-container">

           
            <Card image ={"../assets/products/prod-1.jpg"}
                  title ={"Sangria"}
                  subtitle = {"Full Sleeve Padded Jacket"}
                  price = {"₹1,227"}
                  btnText ={"ADD TO CART"}
            />
            <Card image ={"../assets/products/prod-2.jpg"}
                  title ={"Sangria"}
                  subtitle = {"Pink Georgette Ruffled Saree"}
                  price = {"₹1349"}
                  btnText ={"ADD TO CART"}
            />
            <Card image ={"../assets/products/prod-3.jpg"}
                  title ={"Ahalyaa"}
                  subtitle = {"Women Burgundy & Golden Printed Kurta with Trousers"}
                  price = {"₹1500"}
                  btnText ={"ADD TO CART"}
            />
            <Card image ={"../assets/products/prod-4.jpg"}
                  title ={"Ira Soleil"}
                  subtitle = {"Pink & Gold-Coloured Ethnic Motifs Peplum Top"}
                  price = {"₹1199"}
                  btnText ={"ADD TO CART"}
            />
            <Card image ={"../assets/products/prod-5.jpg"}
                  title ={"Marie Claire"}
                  subtitle = {"Women Pink Printed Top"}
                  price = {"₹545"}
                  btnText ={"ADD TO CART"}
            />
            <Card image ={"../assets/products/prod-6.jpg"}
                  title ={"STREET 9"}
                  subtitle = {"Women Blue Flared Mid-Rise Slash Knee Stretchable Jeans"}
                  price = {"₹4,000"}
                  btnText ={"ADD TO CART"}
            />
            <Card image ={"../assets/products/prod-7.jpg"}
                  title ={"SASSAFRAS"}
                  subtitle = {"Women Fuchsia Relaxed Fit High-Rise Jeans"}
                  price = {"₹999"}
                  btnText ={"ADD TO CART"}
            />
            <Card image ={"../assets/products/prod-8.jpg"}
                  title ={"Sangria"}
                  subtitle = {"Women Purple Solid Georgette Saree with Embellished Belt "}
                  price = {"₹3,500"}
                  btnText ={"ADD TO CART"}
            />
            <Card image ={"../assets/products/prod-9.jpg"}
                  title ={"Suta"}
                  subtitle = {"Pink & Golden Solid Zari Pure Linen Saree"}
                  price = {"₹5,500"}
                  btnText ={"ADD TO CART"}
            />
            <Card image ={"../assets/products/prod-10.jpg"}
                  title ={"INDYA"}
                  subtitle = {"Indya Navy Sequin Embroidered Panel Kurta"}
                  price = {"₹1,500"}
                  btnText ={"ADD TO CART"}
            />
            <Card image ={"../assets/products/prod-11.jpg"}
                  title ={"Anouk"}
                  subtitle = {"Navy Blue Printed Peplum Top"}
                  price = {"₹700"}
                  btnText ={"ADD TO CART"}
            />
            <Card image ={"../assets/products/prod-12.jpg"}
                  title ={"La Zoire"}
                  subtitle = {"Lime Green Mini A-Line Dress"}
                  price = {"₹20,999"}
                  btnText ={"ADD TO CART"}
            />
             </div>
        </main>
    )
}
export {ProductList}