import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { wishListReducer } from "../reducer/wishList-reducer";
import { useAuth } from "./auth-context";

const wishListInitialState = {
  wishListItem: [],
};

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishListState, wishListDispatch] = useReducer(
    wishListReducer,
    wishListInitialState
  );

  const { authState } = useAuth();
  const token = authState.token || localStorage.getItem("token");


  // const config = {
  //   headers: {
  //     authorization: token,
  //   },
  // };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/wishlist", {
          headers: {
            authorization: token,
          },
        });
        wishListDispatch({
          type: "LOAD_DATA",
          payload: response.data.wishlist,
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }, [token]);

  const addProductToWishList = async (products, setIsDisabled) => {
    try {
      setIsDisabled(true);
      const response = await axios.post(
        "/api/user/wishlist",
        { product: products },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 201) {
        wishListDispatch({
          type: "ADD_PRODUCT_TO_WISHLIST",
          payload: response.data.wishlist,
        });
      } else {
        throw new Error("Couldn't complete the request");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsDisabled(false);
    }
  };

  const deleteProductFromWishlist = async (products) => {
    try {
      const response = await axios.delete(
        `/api/user/wishlist/${products._id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        wishListDispatch({
          type: "DELETE_PRODUCT_FROM_WISHLIST",
          payload: response.data.wishlist,
        });
      } else {
        throw new Error("Couldn't complete the request");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <WishListContext.Provider
      value={{ wishListState, addProductToWishList, deleteProductFromWishlist }}
    >
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { useWishList, WishListProvider };
