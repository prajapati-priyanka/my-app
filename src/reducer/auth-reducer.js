const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        addresses: action.payload.addresses,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        addresses: [],
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
      case "GET_ADDRESS":
        return {
          ...state,
          addresses: action.payload
        };
    case "ADD_NEW_ADDRESS":
      return {
        ...state,
        addresses: action.payload,
      };
      case "REMOVE_ADDRESS":
        return {
          ...state,
          addresses: action.payload
        }
      case "UPDATE_ADDRESS":
        return {
          ...state,
          addresses: action.payload
        }
    default:
      return state;
  }
};

export { authReducer };
