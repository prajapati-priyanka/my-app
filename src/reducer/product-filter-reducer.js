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
            
        case "SORT_BY_CATEGORY":
        return {
          ...state,
          sortByCategory: [...state.sortByCategory, action.payload]
        }
        case "REMOVE_CATEGORY":
        return {
          ...state,
          sortByCategory: state.sortByCategory.filter(category => category !==action.payload)
        }
       
        case "FILTER_RATING":
            return {
              ...state,
              sortByRating: action.payload
            }
             
        case "CLEAR_ALL_FILTERS":
            return {
              ...state,
              isLoading: false,
              sortBy: null,
             setError: null,
             showAll: true,
             priceValue: 0,
            sortByCategory: [],
             sortByRating: null
            }
             
           
        default:
           return state
    }
}
export{sortReducer}