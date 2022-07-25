import { useContext, createContext, useReducer } from "react";
import { authReducer } from "../reducer/auth-reducer";

const initialState = {
  user: "",
  token: "",
  addresses: []
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
