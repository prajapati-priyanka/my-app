import "./Categories.css";

const Categories = () => {
    return (
        <section className="product-category">
            <h2 className="category-heading text-center">Categories To Bag</h2>
            <div className="category-display">
                <div className="card ecommerce-card">
                    <div className="card-with-text-overlay">
                        <figure className="card-header">
                            <img src="/assets/categories/top.jpg" alt="" />
                        </figure>
                    </div>
                <div className="text-overlay lg-text">Top</div>
            </div>
            <div className="card ecommerce-card">
                <div className="card-with-text-overlay">
                    <figure className="card-header">
                        <img src="/assets/categories/jeans.jpg" className="img-responsive" alt="" />
                    </figure>
                </div>
                <div className="text-overlay lg-text">Jeans</div>
            </div>
            <div className="card ecommerce-card">
                <div className="card-with-text-overlay">
                    <figure className="card-header">
                        <img src="/assets/categories/dresses.jpg" className="img-responsive" alt="" />
                    </figure>
                </div>
                <div className="text-overlay lg-text">Dresses</div>
            </div>
            <div className="card ecommerce-card">
                <div className="card-with-text-overlay">
                    <figure className="card-header">
                        <img src="/assets/categories/saree.jpg" className="img-responsive" alt="" />
                    </figure>
                </div>
                <div className="text-overlay lg-text">Saree</div>
            </div>
            <div className="card ecommerce-card">
                <div className="card-with-text-overlay">
                    <figure className="card-header">
                        <img src="/assets/categories/kurta.jpg" className="img-responsive" alt="" />
                    </figure>
                </div>
                <div className="text-overlay lg-text">Kurta Set</div>
            </div>

        </div>
    </section>
    )
}

export {Categories};
