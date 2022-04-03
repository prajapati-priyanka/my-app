import { createContext, useContext } from "react/cjs/react.production.min";


const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({children}) => {
    return <CartContext.Provider>
        {children}
    </CartContext.Provider>
}

export {useCart, CartProvider}