const wishListReducer = (state, action) => {

  switch (action.type) {
    case "LOAD_DATA":
      return {
        ...state,
        wishListItem: [...action.payload],
      };

    case "ADD_PRODUCT_TO_WISHLIST":
      return {
        ...state,
        wishListItem: [...action.payload],
        wishListCount: state.wishListCount + 1,
      };
    case "DELETE_PRODUCT_FROM_WISHLIST":
      return {
        ...state,
        wishListItem: [...action.payload],
        wishListCount: state.wishListCount - 1,
      };

    default:
      return state;
  }
};

export { wishListReducer };
