import { createContext, useContext } from "react";




const WishListContext = createContext();

const WishListProvider = ({children}) => {
    return <WishListContext.Provider>
        {children}
    </WishListContext.Provider>
}

const useWishList = () => useContext(WishListContext)

export {useWishList, WishListProvider}

