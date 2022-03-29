import { createContext,useContext, useEffect,useReducer  } from "react";
import axios from "axios";
import { sortReducer } from "../reducer/product-filter-reducer";
import { sortPrice,filteredProduct,filterPrice,filterCategory,filterRating} from "../utilities/utils";



const ProductContext = createContext();

const initialState={
    isLoading: false,
    dataList: [],
    sortBy: null,
    setError: null,
    showAllProduct: true,
    priceValue: 0,
    sortByCategory: [],
    sortByRating: null
    

}

const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(sortReducer, initialState);

  useEffect(()=>{
      (async()=>{
          try {
              const res = await axios.get("./api/products")
              console.log("data from api", res.data.products)
              dispatch({type:"LOAD_DATA", payload: res.data.products})
          } catch (error) {
              dispatch({type: "ERROR", payload:"Error Occurred"})
              
          }
      })();
  },[])

const sortedData = sortPrice(state.dataList, state.sortBy);
const filteredData = filteredProduct(sortedData,state);
const filteredPriceData = filterPrice(filteredData, state.priceValue);
const filteredCategoryData = filterCategory(filteredPriceData, state)
const finalfilteredList = filterRating(filteredCategoryData, state.sortByRating)
// console.log("in context", sortedData)

    return <ProductContext.Provider value={{state, finalfilteredList, dispatch}}>
        {children}
    </ProductContext.Provider>
}

const useProduct = () => useContext(ProductContext);

export{ProductProvider, useProduct }