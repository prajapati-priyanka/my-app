
const categoryReducer = (state, action)=>{
    // console.log("in category reducer", state)
    switch (action.type) {
        case "LOAD_CATEGORY":
             return {
                 categoryItem : [...action.payload]
               }
    
        default:
            return state
    }
}
export {categoryReducer}