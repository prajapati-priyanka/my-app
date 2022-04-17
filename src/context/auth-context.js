import { useContext, createContext, useReducer } from "react";
import { authReducer } from "../reducer/auth-reducer";

// const token = localStorage.getItem("token");
// // const userName = JSON.parse(localStorage.getItem("user.firstName"));
// // const userEmail = JSON.parse(localStorage.getItem("user.email"));
// // const userPassword = JSON.parse(localStorage.getItem("user_password"));

// const initialState = {
//   isLoggedIn: token ? true : false,
//   token: token,
// //   userName: userName,
// //   email: userEmail,
// //   password: userPassword,
// };

const initialState = {
  user: "",
  token: "",
};
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
