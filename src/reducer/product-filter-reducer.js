const sortReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_DATA":
            return {
                ...state, dataList: action.payload
            }
         case "ERROR":
             return{
                 ...state,
                 isLoading: false,
                 setError: action.payload
             
         }  
         case "SORT":
      return {
        ...state,
        sortBy: action.payload
      }
      case "FILTER_OUT_OF_STOCK":
        return {
          ...state,
          showAll: !state.showAll
        }
        case "PRICE_SLIDER":
        return {
          ...state,
          priceValue: action.payload
        }
            
        case "SORT_BY_TOP_CATEGORY":
        return {
          ...state,
          sortByCategory: action.type
        }
        case "SORT_BY_JEANS_CATEGORY":
        return {
          ...state,
          sortByCategory: action.type
        }
            
        case "SORT_BY_DRESSES_CATEGORY":
        return {
          ...state,
          sortByCategory: action.type
        }
        case "SORT_BY_KURTA_SET_CATEGORY":
        return {
          ...state,
          sortByCategory: action.type
        }
        case "SORT_BY_SAREES_CATEGORY":
        return {
          ...state,
          sortByCategory: action.type
        }
        case "FILTER_RATING":
            return {
              ...state,
              sortByCategory: action.payload
            }
             
            
            
    
        default:
           return state
    }
}
export{sortReducer}