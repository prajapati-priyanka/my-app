const authReducer = (state, action) => {
  console.log(state, action, "in auth reducer");

  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };

    default:
      return state;
  }
};

export { authReducer };
