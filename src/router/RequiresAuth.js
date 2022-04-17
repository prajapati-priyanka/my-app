import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from "../context";


export const RequiresAuth = ({children}) => {
    const {authState}=useAuth();
    const location=useLocation(); 

    const {token} = authState

  return token? children:<Navigate  to="/login" replace state={{from:location}}/>


}