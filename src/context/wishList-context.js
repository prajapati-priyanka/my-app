import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { wishListReducer } from "../reducer/wishList-reducer";

const wishListInitialState = {
  wishListItem: [],
  wishListCount: null,
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
        console.log(err);
      }
    })();
  }, []);

  const addProductToWishList = async (products) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product: products },
        config
      );

      wishListDispatch({
        type: "ADD_PRODUCT_TO_WISHLIST",
        payload: response.data.wishlist,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProductFromWishlist = async (products) => {
    try {
      const response = await axios.delete(
        `/api/user/wishlist/${products._id}`,
        config
      );

      wishListDispatch({
        type: "DELETE_PRODUCT_FROM_WISHLIST",
        payload: response.data.wishlist,
      });
    } catch (err) {
      console.log(err);
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
