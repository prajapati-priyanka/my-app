import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { cartReducer } from "../reducer/cart-reducer";
import { useAuth } from "./auth-context";
import {toast} from "react-toastify"

const cartInitialState = {
  cartItem: [],
};

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

  const { authState } = useAuth();
  const token = authState.token || localStorage.getItem("token");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/cart", {
          headers: {
            authorization: token,
          },
        });
        cartDispatch({
          type: "LOAD_DATA",
          payload: response.data.cart,
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }, [token]);

  const itemExistInCart = (products) => {
    let flag = false;
    cartState.cartItem.map((item) => {
      if (item._id === products._id) {
        return (flag = true);
      }
      return flag;
    });
    return flag;
  };

  const addToCart = async (products, setIsDisabled) => {
    try {
      const itemInCart = itemExistInCart(products);

      if (itemInCart) {
        const data = {
          action: {
            type: "increment",
          },
        };

        const response = await axios.post(
          `/api/user/cart/${products._id}`,
          data,
          {
            headers: {
              authorization: token,
            },
          }
        );

        cartDispatch({
          type: "ADD_TO_CART",
          payload: response.data.cart,
        });
     
      } else {
        setIsDisabled(true);
        const response = await axios.post(
          "/api/user/cart",
          { product: products },
          {
            headers: {
              authorization: token,
            },
          }
        );
        if (response.status === 201) {
          cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
          toast.success("Item added to cart")
        } else {
          throw new Error("Can't process the request");
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsDisabled(false);
    }
  };
  const removeFromCart = async (products) => {
    try {
      const response = await axios.delete(
        `/api/user/cart/${products._id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
        toast.delete("Item removed from cart")
      } else {
        throw new Error("Can't process the request");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const incrementQuantity = async (products, setIsDisabled) => {
    try {
      setIsDisabled(true);
      const response = await axios.post(
        `/api/user/cart/${products._id}`,
        {
          action: { type: "increment" },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        cartDispatch({
          type: "UPDATE",
          payload: response.data.cart,
        });
      } else {
        throw new Error("Can't process the request");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsDisabled(false);
    }
  };
  const decrementQuantity = async (products, setIsDisabled) => {
    console.log("decrement quantity", products);
    try {
      setIsDisabled(true);
      const response = await axios.post(
        `/api/user/cart/${products._id}`,
        {
          action: { type: "decrement" },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        cartDispatch({
          type: "UPDATE",
          payload: response.data.cart,
        });
      } else {
        throw new Error("Can't process the request");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsDisabled(false);
    }
  };

  const getCartItemCount = (products) => {
    return products.reduce((acc, item) => (acc = acc + item.qty), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        getCartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
