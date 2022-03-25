import "./Filter.css";

const Filter = () => {
    return (
        <aside className="product-filter-container">
            <div className="product-filter-clear">
                <h3 className="product-filter-heading lg-text">Filters</h3>
                {/* <a href="" className="reset md-text">Clear</a> */}
            </div>
            <div className="filter-type">
                <h3 className="filter-type-heading lg-text">Price</h3>
                <div className="filter-type-container price-filter">
                    <label for="myRange" className="md-text">₹500-₹5000</label>
                    <input type="range" min="200" max="10,000" value="1000" className="slider" id="myRange" />
                </div>
            </div>

            <div className="filter-type">
                <h3 className="filter-type-heading lg-text">Category</h3>
                <div className="filter-type-container md-text">
                    <input type="checkbox" id="top" className="input-check" />
                    <label for="top">Top</label>
                </div>
                <div className="filter-type-container md-text">
                    <input type="checkbox" id="jeans" className="input-check" />
                    <label for="jeans">Jeans</label>
                </div>
                <div className="filter-type-container md-text">
                    <input type="checkbox" id="dresses" className="input-check" />
                    <label for="dresses">Dresses</label>
                </div>
                <div className="filter-type-container md-text">
                    <input type="checkbox" id="kurta-set" className="input-check" />
                    <label for="kurta-set">Kurta Set</label>
                </div>
                <div className="filter-type-container md-text">
                    <input type="checkbox" id="saree" className="input-check" />
                    <label for="saree">Sarees</label>
                </div>
            </div>
            <div className="filter-type">
                <h3 className="filter-type-heading lg-text">Rating</h3>
                <div className="filter-type-container md-text">
                    <input type="radio" id="four-rating" className="input-radio" />
                    <label for="four-rating">4 stars & above</label>
                </div>
                <div className="filter-type-container md-text">
                    <input type="radio" id="three-rating" className="input-radio" />
                    <label for="three-rating">3 stars & above</label>
                </div>
                <div className="filter-type-container md-text">
                    <input type="radio" id="two-rating" className="input-radio" />
                    <label for="two-rating">2 stars & above</label>
                </div>

                <div className="filter-type-container md-text">
                    <input type="radio" id="one-rating" className="input-radio" />
                    <label for="one-rating">1 stars & above</label>
                </div>


            </div>
            <div className="filter-type">
                <h3 className="filter-type-heading lg-text">Sort by</h3>
                <div className="filter-type-container md-text">
                    <input type="radio" id="low-high" className="input-radio" />
                    <label for="low-high">Price-Low to High</label>
                </div>
                <div className="filter-type-container md-text">
                    <input type="radio" id="high-low" className="input-radio" />
                    <label for="high-low">Price-High to Low</label>
                </div>
            </div>
        </aside>
    )
}

export {Filter};
