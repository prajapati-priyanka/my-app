import "./ProductList.css" ;
const ProductList = () => {
    return (
        <main className="product-display">
        <div className="product-display-qty text-center ">
            <p className="lg-text">Showing all products</p>
            <span className="md-text">(Showing 20 products)</span>
        </div>
        <div className="product-display-container">
            <div className="card vertical-card card-shadow">
                <figure className="card-header">
                    <img src="image/prod-1.jpg" alt="" />
                </figure>
                <button className="card-floating-icon">
                    <i className="material-icons" title="Add to Wishlist">favorite</i>
                </button>
                <section className="card-body">
                    <h5 className="card-title md-text">Sangria </h5>
                    <p className="card-subtitle md-text">Full Sleeve Padded Jacket</p>
                    <div className="card-price">
                        <span className="price-after-discount md-text">₹1,227</span>

                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </section>
            </div>
            <div className="card vertical-card card-shadow">
                <figure className="card-header">
                    <img src="image/prod-2.jpg" alt="" />
                </figure>
                <button className="card-floating-icon">
                    <i className="material-icons" title="Add to Wishlist">favorite</i>
                </button>
                <section className="card-body">
                    <h5 className="card-title md-text">Sangria</h5>
                    <p className="card-subtitle md-text">Pink Georgette Ruffled Saree</p>
                    <div className="card-price">
                        <span className="price-after-discount md-text">₹1349</span>

                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </section>
            </div>
            <div className="card vertical-card card-shadow">
                <figure className="card-header">
                    <img src="image/prod-3.jpg" alt="" />
                </figure>
                <button className="card-floating-icon">
                    <i className="material-icons" title="Add to Wishlist">favorite</i>
                </button>
                <section className="card-body">
                    <h5 className="card-title md-text">Ahalyaa</h5>
                    <p className="card-subtitle md-text">Women Burgundy & Golden Printed Kurta with Trousers</p>
                    <div className="card-price">
                        <span className="price-after-discount md-text">₹1500</span>

                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </section>
            </div>
            <div className="card vertical-card card-shadow">
                <figure className="card-header">
                    <img src="image/prod-4.jpg" alt="" />
                </figure>
                <button className="card-floating-icon">
                    <i className="material-icons" title="Add to Wishlist">favorite</i>
                </button>
                <section className="card-body">
                    <h5 className="card-title md-text">Ira Soleil</h5>
                    <p className="card-subtitle md-text">Pink & Gold-Coloured Ethnic Motifs Peplum Top</p>
                    <div className="card-price">
                        <span className="price-after-discount md-text">₹1199</span>

                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </section>
            </div>
            <div className="card vertical-card card-shadow">
                <figure className="card-header">
                    <img src="image/prod-5.jpg" alt="" />
                </figure>
                <button className="card-floating-icon">
                    <i className="material-icons" title="Add to Wishlist">favorite</i>
                </button>
                <section className="card-body">
                    <h5 className="card-title md-text">Marie Claire</h5>
                    <p className="card-subtitle md-text">Women Pink Printed Top</p>
                    <div className="card-price">
                        <span className="price-after-discount md-text">₹545</span>

                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </section>
            </div>
            <div className="card vertical-card card-shadow">
                <figure className="card-header">
                    <img src="image/prod-6.jpg" alt="" />
                </figure>
                <button className="card-floating-icon">
                    <i className="material-icons" title="Add to Wishlist">favorite</i>
                </button>
                <section className="card-body">
                    <h5 className="card-title md-text">STREET 9</h5>
                    <p className="card-subtitle md-text">Women Blue Flared Mid-Rise Slash Knee Stretchable Jeans</p>
                    <div className="card-price">
                        <span className="price-after-discount md-text">₹14,000</span>

                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </section>
            </div>
            <div className="card vertical-card card-shadow">
                <figure className="card-header">
                    <img src="image/prod-7.jpg" alt="" />
                </figure>
                <button className="card-floating-icon">
                    <i className="material-icons" title="Add to Wishlist">favorite</i>
                </button>
                <section className="card-body">
                    <h5 className="card-title md-text">SASSAFRAS</h5>
                    <p className="card-subtitle md-text">Women Fuchsia Relaxed Fit High-Rise Jeans</p>
                    <div className="card-price">
                        <span className="price-after-discount md-text">₹999</span>

                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </section>
            </div>
            <div className="card vertical-card card-shadow">
                <figure className="card-header">
                    <img src="image/prod-8.jpg" alt="" />
                </figure>
                <button className="card-floating-icon">
                    <i className="material-icons" title="Add to Wishlist">favorite</i>
                </button>
                <section className="card-body">
                    <h5 className="card-title md-text">Sangria</h5>
                    <p className="card-subtitle md-text">Women Purple Solid Georgette Saree with Embellished Belt   </p>
                    <div className="card-price">
                        <span className="price-after-discount md-text">₹1,500</span>

                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </section>
            </div>
            <div className="card vertical-card card-shadow">
                <figure className="card-header">
                    <img src="image/prod-9.jpg" alt="" />
                </figure>
                <button className="card-floating-icon">
                    <i className="material-icons" title="Add to Wishlist">favorite</i>
                </button>
                <section className="card-body">
                    <h5 className="card-title md-text">Suta</h5>
                    <p className="card-subtitle md-text">Pink & Golden Solid Zari Pure Linen Saree</p>
                    <div className="card-price">
                        <span className="price-after-discount md-text">₹3,500</span>

                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </section>
            </div>
            <div className="card vertical-card card-shadow">
                <figure className="card-header">
                    <img src="image/prod-10.jpg" alt="" />
                </figure>
                <button className="card-floating-icon">
                    <i className="material-icons" title="Add to Wishlist">favorite</i>
                </button>
                <section className="card-body">
                    <h5 className="card-title md-text">INDYA</h5>
                    <p className="card-subtitle md-text">ndya Navy Sequin Embroidered Panel Kurta</p>
                    <div className="card-price">
                        <span className="price-after-discount md-text">₹1,500</span>

                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </section>
            </div>
            <div className="card vertical-card card-shadow">
                <figure className="card-header">
                    <img src="image/prod-11.jpg" alt="" />
                </figure>
                <button className="card-floating-icon">
                    <i className="material-icons" title="Add to Wishlist">favorite</i>
                </button>
                <section className="card-body">
                    <h5 className="card-title md-text">Anouk</h5>
                    <p className="card-subtitle md-text">Navy Blue Printed Peplum Top</p>
                    <div className="card-price">
                        <span className="price-after-discount md-text">₹700</span>

                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </section>
            </div>
            <div className="card vertical-card card-shadow">
                <figure className="card-header">
                    <img src="image/prod-12.jpg" alt="" />
                </figure>
                <button className="card-floating-icon">
                    <i className="material-icons" title="Add to Wishlist">favorite</i>
                </button>
                <section className="card-body">
                    <h5 className="card-title md-text">La Zoire</h5>
                    <p className="card-subtitle md-text">Lime Green Mini A-Line Dress</p>
                    <div className="card-price">
                        <span className="price-after-discount md-text">₹20,999</span>

                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </section>
            </div>

        </div>


    </main>
    )
}
export {ProductList}