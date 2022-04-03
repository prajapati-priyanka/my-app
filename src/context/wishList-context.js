import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { wishListReducer } from "../reducer/wishList-reducer";

const wishListInitialState = {
  wishListItem: [],
};

const encodedToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxZGU4ZGU2OC04YTljLTQzN2UtYjQ1OS0zYmExMWE4ZmVlYzgiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.xr5Ma2P_rdAfNdlRySy8wgmsrEtfwBXaM_5m2w5xZ84";

const config = {
  headers: {
    authorization: encodedToken,
  },
};
const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishListState, wishListDispatch] = useReducer(
    wishListReducer,
    wishListInitialState
  );

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/wishlist", config);
        wishListDispatch({
          type: "LOAD_DATA",
          payload: response.data.wishlist,
        });
      } catch (err) {
        alert(err);
      }
    })();
  }, []);

  const addProductToWishList = async (products, setIsDisabled) => {
    try {
      setIsDisabled(true);
      const response = await axios.post(
        "/api/user/wishlist",
        { product: products },
        config
      );

      if (response.status === 201) {
        wishListDispatch({
          type: "ADD_PRODUCT_TO_WISHLIST",
          payload: response.data.wishlist,
        });
        // setIsDisabled(false)
      } else {
        throw new Error("Couldn't complete the request");
      }
    } catch (err) {
      alert(err);
    } finally {
      setIsDisabled(false);
    }
  };

  const deleteProductFromWishlist = async (products) => {
    try {
      const response = await axios.delete(
        `/api/user/wishlist/${products._id}`,
        config
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
      alert(err);
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
