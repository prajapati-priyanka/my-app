const wishListReducer = (state, action) =>{

    console.log("In wishlist reducer",state, action)
    switch (action.type) {
        case "ADD_PRODUCT_TO_WISHLIST":
            return{
                ...state,
                wishListItem: [...state.wishListItem, action.payload],
                wishListCount: state.wishListCount+1
            }
        case "REMOVE_PRODUCT_FROM_WISHLIST":
            return{
                ...state,
                wishListItem: state.wishListItem.filter(item=> item._id !== action.payload._id),
                wishListCount: state.wishListCount-1
            }
            
    
        default:
           return  state
    }


}

export{wishListReducer}