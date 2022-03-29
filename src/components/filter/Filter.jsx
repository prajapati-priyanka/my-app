import { useProduct } from "../../context/product-context";
import "./Filter.css";

const Filter = () => {
const{state, dispatch} = useProduct()

console.log("In Filter",state, dispatch)

const categoryClickHandler = (event) =>{
    
    let checkedCategory = event.target.checked;
    const categoryValue = event.target.value;

    if(checkedCategory){
        return {type: "SORT_BY_CATEGORY", payload: categoryValue}
    }
    else{
        return {type: "REMOVE_CATEGORY", payload: categoryValue}
    }

    }

  
    return (
        <aside className="product-filter-container">
            <div className="product-filter-clear">
                <h3 className="product-filter-heading lg-text">Filters</h3>
                 <button className="reset md-text">Clear</button> 
            </div>
            <div className="filter-type">
                <h3 className="filter-type-heading lg-text">Price</h3>
                <div className="filter-type-container price-filter">
                    <label htmlFor="myRange" className="md-text">price slider</label>
                    <input 
                    type="range" 
                    min="600" 
                    max="3000" 
                    value={state.price} 
                    className="slider" 
                    id="myRange"  
                    list="marks"
                    step="400" 
                    onChange={(e)=>dispatch({type:"PRICE_SLIDER", payload: e.target.value})}/>
                    <dataList id="marks"
                   className="datalist-options"
                   style={{
                        display: "flex",
                        justifyContent: "space-between",
                         fontSize: "1rem"
                        }}
                    >
                    <option value="600" label="600"></option>
                    <option value="1000" label="1000"></option>
                    <option value="1400" label="1400"></option>
                    <option value="1800" label="1800"></option>
                    <option value="2200" label="2200"></option>
                    <option value="2600" label="2600"></option>
                </dataList>
                </div>
            </div>

            <div className="filter-type">
                <h3 className="filter-type-heading lg-text">Category</h3>
                <div className="filter-type-container md-text">
                    <input 
                    type="checkbox" 
                    id="top" 
                    className="input-check" 
                    name="category-sort" 
                    value="Top" 
                    checked={state.sortByCategory.includes("Top")} 
                    onChange={(event)=>dispatch(categoryClickHandler(event))} />
                    <label htmlFor="top">Top</label>
                </div>
                <div className="filter-type-container md-text">
                    <input 
                    type="checkbox" 
                    id="jeans" 
                    className="input-check" 
                    name="category-sort"  
                    value="Jeans" 
                    checked={state.sortByCategory.includes("Jeans")} 
                    onChange={(event)=>dispatch(categoryClickHandler(event))} />
                    <label htmlFor="jeans">Jeans</label>
                </div>
                <div className="filter-type-container md-text">
                    <input 
                    type="checkbox" 
                    id="dresses" 
                    className="input-check" 
                    name="category-sort" 
                    value="Dresses" 
                    checked={state.sortByCategory.includes("Dresses")} 
                    onChange={(event)=>dispatch(categoryClickHandler(event))} />
                    <label htmlFor="dresses">Dresses</label>
                </div>
                <div className="filter-type-container md-text">
                    <input 
                    type="checkbox" 
                    id="kurta-set" 
                    className="input-check" 
                    name="category-sort" 
                    value="Kurta Set" 
                    checked={state.sortByCategory.includes("Kurta Set")} 
                    onChange={(event)=>dispatch(categoryClickHandler(event))} />
                    <label htmlFor="kurta-set">Kurta Set</label>
                </div>
                <div className="filter-type-container md-text">
                    <input 
                    type="checkbox" 
                    id="saree" 
                    className="input-check" 
                    name="category-sort" 
                    value="Sarees" 
                    checked={state.sortByCategory.includes("Sarees")} 
                    onChange={(event)=>dispatch(categoryClickHandler(event))} />
                    <label htmlFor="saree">Sarees</label>
                </div>
            </div>
            <div className="filter-type">
                <h3 className="filter-type-heading lg-text">Availability</h3>
                <div className="filter-type-container md-text">
                    <input 
                    type="checkbox" 
                    id="out-of-stock" 
                    className="input-check" 
                    checked={state.showAll} 
                    onChange={()=>dispatch({type:"FILTER_OUT_OF_STOCK"})}/>
                    <label htmlFor="out-of-stock">Include Out Of Stock</label>
                </div>
            </div>
            <div className="filter-type">
                <h3 className="filter-type-heading lg-text">Rating</h3>
                <div className="filter-type-container md-text">
                    <input 
                    type="radio" 
                    id="four-rating" 
                    className="input-radio" 
                    name="rating-sort" 
                    value="4_STARS_AND_ABOVE" 
                    onChange={(e)=>dispatch({type: "FILTER_RATING" , payload: "FOUR_STARS_AND_ABOVE"})}/>
                    <label htmlFor="four-rating">4 stars & above</label>
                </div>
                <div className="filter-type-container md-text">
                    <input 
                    type="radio" 
                    id="three-rating" 
                    className="input-radio" 
                    name="rating-sort" 
                    value="3_STARS_AND_ABOVE" 
                    onChange={(e)=>dispatch({type: "FILTER_RATING" , payload: "THREE_STARS_AND_ABOVE"})}/>
                    <label htmlFor="three-rating">3 stars & above</label>
                </div>
                <div className="filter-type-container md-text">
                    <input 
                    type="radio" 
                    id="two-rating" 
                    className="input-radio" 
                    name="rating-sort" 
                    value="2_STARS_AND_ABOVE" 
                    onChange={(e)=>dispatch({type: "FILTER_RATING" , payload:"TWO_STARS_AND_ABOVE"})}/>
                    <label htmlFor="two-rating">2 stars & above</label>
                </div>

                <div className="filter-type-container md-text">
                    <input 
                    type="radio" 
                    id="one-rating" 
                    className="input-radio" 
                    name="rating-sort" 
                    value="1_STARS_AND_ABOVE"  
                    onChange={(e)=>dispatch({type: "FILTER_RATING" , payload: "ONE_STARS_AND_ABOVE"})}/>
                    <label htmlFor="one-rating">1 stars & above</label>
                </div>


            </div>

                       {/* Sort By Price Filter */}

            <div className="filter-type">
                <h3 className="filter-type-heading lg-text">Sort by</h3>
                <div className="filter-type-container md-text">
                    <input 
                    type="radio" 
                    id="low-high" 
                    className="input-radio" 
                    name="sort" 
                    value="Low-to-High" 
                    onChange={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}/>
                    <label htmlFor="low-high">Price-Low to High</label>
                </div>
                <div className="filter-type-container md-text">
                    <input 
                    type="radio" 
                    id="high-low" 
                    className="input-radio"  
                    name="sort" 
                    value="High-to-Low" 
                    onChange={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}  />
                    <label htmlFor="high-low">Price-High to Low</label>
                </div>
            </div>
        </aside>
    )
}

export {Filter};
