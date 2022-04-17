import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { cartReducer } from "../reducer/cart-reducer";


const cartInitialState = {
  cartItem: [],
};

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);


  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/cart", config);
        cartDispatch({
          type: "LOAD_DATA",
          payload: response.data.cart,
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

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
          config
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
          config
        );
        if (response.status === 201) {
          cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
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
        config
      );
      if (response.status === 200) {
        cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
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
        config
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
        config
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
