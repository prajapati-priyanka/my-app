const cartReducer = (state, action) =>{
    
    switch (action.type) {
        case "LOAD_DATA":
            return{
                cartItem: [...action.payload]
            }
            
        case "ADD_TO_CART":
            return{
                cartItem: [...action.payload]
            }
            
        case "REMOVE_FROM_CART":
            return{
                cartItem: [...action.payload]
            }
        case "UPDATE":
            return{
                cartItem: [...action.payload]
            }
            
    
        default:
            return state
    }
}

export {cartReducer}