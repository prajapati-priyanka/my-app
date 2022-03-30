import { createContext, useContext, useReducer  } from "react";
import { wishListReducer } from "../reducer/wishList-reducer";


const wishListInitialState = {
    wishListItem : [],
    wishListCount: null
}



const WishListContext = createContext();

const WishListProvider = ({children}) => {
    
    const [wishListState, wishListDispatch] = useReducer(wishListReducer, wishListInitialState)
   
   return <WishListContext.Provider value={{wishListState, wishListDispatch}}>
        {children}
    </WishListContext.Provider>
}

const useWishList = () => useContext(WishListContext)

export {useWishList, WishListProvider}

