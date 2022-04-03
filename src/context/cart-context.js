import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { cartReducer } from "../reducer/cart-reducer";

const initialState = {
    cartItem: []
}

const encodedToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxZGU4ZGU2OC04YTljLTQzN2UtYjQ1OS0zYmExMWE4ZmVlYzgiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.xr5Ma2P_rdAfNdlRySy8wgmsrEtfwBXaM_5m2w5xZ84";

const config = {
    headers: {
      authorization: encodedToken,
    },
  };

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({children}) => {
const [ cartState, cartDispatch ] = useReducer(cartReducer, initialState);

useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/cart", config);
        console.log("in cart response", response.data.cart)
        cartDispatch({
          type: "LOAD_DATA",
          payload: response.data.cart,
        });
      } catch (err) {
        alert(err);
      }
    })();
  }, []);

  const addToCart = async(products,setIsDisabled) =>{
        try{
            setIsDisabled(true)
            const response = await axios.post("/api/user/cart", {product: products}, config);
            if(response.status === 201){
                cartDispatch({type:"ADD_TO_CART", payload: response.data.cart})
            }else{
                throw new Error("Can't process the request")
            }
        }catch(error){
            alert(error)
        }finally{
            setIsDisabled(false)
        }
  }
  const removeFromCart = async(products) =>{
    try{
        const response = await axios.delete(`/api/user/cart/${products._id}`, config);
        if(response.status === 200){
            cartDispatch({type:"REMOVE_FROM_CART", payload: response.data.cart})
        }else{
            throw new Error("Can't process the request")
        }
    }catch(error){
        alert(error)
    }
}
    return <CartContext.Provider value={{cartState, cartDispatch, addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
}

export {useCart, CartProvider}