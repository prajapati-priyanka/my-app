import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { sortReducer } from "../reducer/product-filter-reducer";
import {
  sortPrice,
  filteredProduct,
  filterPrice,
  filterCategory,
  filterRating,
} from "../utilities/utils";

const ProductContext = createContext();

const initialState = {
  dataList: [],
  sortBy: null,
  showAllProduct: true,
  priceValue: 0,
  sortByCategory: [],
  sortByRating: null,
};

const ProductProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(sortReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("./api/products");
        console.log("data from api", res.data.products);
        filterDispatch({ type: "LOAD_DATA", payload: res.data.products });
      } catch (error) {
        console.log(error)
      }
    })();
  }, []);

  const sortedData = sortPrice(filterState.dataList, filterState.sortBy);
  const filteredData = filteredProduct(sortedData, filterState);
  const filteredPriceData = filterPrice(filteredData, filterState.priceValue);
  const filteredCategoryData = filterCategory(filteredPriceData, filterState);
  const finalfilteredList = filterRating(
    filteredCategoryData,
    filterState.sortByRating
  );
  // console.log("in context", sortedData)

  return (
    <ProductContext.Provider
      value={{ filterState, finalfilteredList, filterDispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
