import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cart-reducer";

const initialState = {
    cartItem: []
}

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [ cartState, cartDispatch ] = useReducer(cartReducer, initialState)
    return <CartContext.Provider>
        {children}
    </CartContext.Provider>
}

export {useCart, CartProvider}