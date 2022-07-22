import { useProduct } from "../../context/product-context";
import "./Filter.css";

const Filter = () => {
  const { filterState, filterDispatch } = useProduct();

 

  const categoryClickHandler = (event) => {
    let checkedCategory = event.target.checked;
    const categoryValue = event.target.value;

    if (checkedCategory) {
      return { type: "SORT_BY_CATEGORY", payload: categoryValue };
    } else {
      return { type: "REMOVE_CATEGORY", payload: categoryValue };
    }
  };

  return (
    <aside className="product-filter-container">
      <div className="product-filter-clear">
        <h3 className="product-filter-heading lg-text">Filters</h3>
        <button
          className="reset md-text"
          onClick={() => filterDispatch({ type: "CLEAR_ALL_FILTERS" })}
        >
          Clear
        </button>
      </div>

            {/* *************Price-range-filter*************** */}

      <div className="filter-type">
        <h3 className="filter-type-heading lg-text">Price</h3>
        <div className="filter-type-container price-filter">
          <label htmlFor="myRange" className="md-text">
            price slider
          </label>
          <input
            type="range"
            min="300"
            max="5500"
            value={filterState.price}
            className="slider"
            id="myRange"
            list="marks"
            step="1000"
            onChange={(e) =>
              filterDispatch({ type: "PRICE_SLIDER", payload: e.target.value })
            }
          />
          <dataList id="marks" className="datalist-options">
            <option value="300" label="300"></option>
            <option value="1300" label="1300"></option>
            <option value="2300" label="2300"></option>
            <option value="4300" label="4300"></option>
            <option value="5300" label="5300"></option>
          </dataList>
        </div>
      </div>

                {/* *************category-filter********** */}

      <div className="filter-type">
        <h3 className="filter-type-heading lg-text">Category</h3>
        <div className="filter-type-container md-text">
          <input
            type="checkbox"
            id="top"
            className="input-check"
            name="category-sort"
            value="Top"
            checked={filterState.sortByCategory.includes("Top")}
            onChange={(event) => filterDispatch(categoryClickHandler(event))}
          />
          <label htmlFor="top">Top</label>
        </div>
        <div className="filter-type-container md-text">
          <input
            type="checkbox"
            id="jeans"
            className="input-check"
            name="category-sort"
            value="Jeans"
            checked={filterState.sortByCategory.includes("Jeans")}
            onChange={(event) => filterDispatch(categoryClickHandler(event))}
          />
          <label htmlFor="jeans">Jeans</label>
        </div>
        <div className="filter-type-container md-text">
          <input
            type="checkbox"
            id="dresses"
            className="input-check"
            name="category-sort"
            value="Dresses"
            checked={filterState.sortByCategory.includes("Dresses")}
            onChange={(event) => filterDispatch(categoryClickHandler(event))}
          />
          <label htmlFor="dresses">Dresses</label>
        </div>
        <div className="filter-type-container md-text">
          <input
            type="checkbox"
            id="kurta-set"
            className="input-check"
            name="category-sort"
            value="Kurta Set"
            checked={filterState.sortByCategory.includes("Kurta Set")}
            onChange={(event) => filterDispatch(categoryClickHandler(event))}
          />
          <label htmlFor="kurta-set">Kurta Set</label>
        </div>
        <div className="filter-type-container md-text">
          <input
            type="checkbox"
            id="saree"
            className="input-check"
            name="category-sort"
            value="Sarees"
            checked={filterState.sortByCategory.includes("Sarees")}
            onChange={(event) => filterDispatch(categoryClickHandler(event))}
          />
          <label htmlFor="saree">Sarees</label>
        </div>
      </div>

                {/* ***********Availabilty-filter******** */}

      <div className="filter-type">
        <h3 className="filter-type-heading lg-text">Availability</h3>
        <div className="filter-type-container md-text">
          <input
            type="checkbox"
            id="out-of-stock"
            className="input-check"
            checked={filterState.showAllProduct}
            onChange={() => filterDispatch({ type: "FILTER_OUT_OF_STOCK" })}
          />
          <label htmlFor="out-of-stock">Include Out Of Stock</label>
        </div>
      </div>

                {/* **********rating-filter********* */}

      <div className="filter-type">
        <h3 className="filter-type-heading lg-text">Rating</h3>
        <div className="filter-type-container md-text">
          <input
            type="radio"
            id="four-rating"
            className="input-radio"
            name="rating-sort"
            value="4_STARS_AND_ABOVE"
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_RATING",
                payload: "FOUR_STARS_AND_ABOVE",
              })
            }
          />
          <label htmlFor="four-rating">4 stars & above</label>
        </div>
        <div className="filter-type-container md-text">
          <input
            type="radio"
            id="three-rating"
            className="input-radio"
            name="rating-sort"
            value="3_STARS_AND_ABOVE"
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_RATING",
                payload: "THREE_STARS_AND_ABOVE",
              })
            }
          />
          <label htmlFor="three-rating">3 stars & above</label>
        </div>
        <div className="filter-type-container md-text">
          <input
            type="radio"
            id="two-rating"
            className="input-radio"
            name="rating-sort"
            value="2_STARS_AND_ABOVE"
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_RATING",
                payload: "TWO_STARS_AND_ABOVE",
              })
            }
          />
          <label htmlFor="two-rating">2 stars & above</label>
        </div>

        <div className="filter-type-container md-text">
          <input
            type="radio"
            id="one-rating"
            className="input-radio"
            name="rating-sort"
            value="1_STARS_AND_ABOVE"
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_RATING",
                payload: "ONE_STARS_AND_ABOVE",
              })
            }
          />
          <label htmlFor="one-rating">1 stars & above</label>
        </div>
      </div>

                {/* **********sort filter********* */}

      <div className="filter-type">
        <h3 className="filter-type-heading lg-text">Sort by</h3>
        <div className="filter-type-container md-text">
          <input
            type="radio"
            id="low-high"
            className="input-radio"
            name="sort"
            value="Low-to-High"
            onChange={() => filterDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
          />
          <label htmlFor="low-high">Price-Low to High</label>
        </div>
        <div className="filter-type-container md-text">
          <input
            type="radio"
            id="high-low"
            className="input-radio"
            name="sort"
            value="High-to-Low"
            onChange={() => filterDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
          />
          <label htmlFor="high-low">Price-High to Low</label>
        </div>
      </div>
    </aside>
  );
};

export { Filter };
