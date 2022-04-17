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
    case "SIGNUP":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "CHECK_USER":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};

export { authReducer };
