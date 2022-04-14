import { useContext, createContext } from "react";
import { useEffect, useReducer } from "react";
import axios from "axios";
import {categoryReducer} from "../reducer/category-reducer";

const initialState = {
    categoryItem : []
}

const CategoryContext = createContext();

const useCategory = () => useContext(CategoryContext);

const CategoryProvider = ({children}) => {

    const[categoryState, categoryDispatch] = useReducer(categoryReducer, initialState)

    useEffect(()=>{
        (async()=>{
            try{

                const response = await axios.get("/api/categories")
                // console.log("in category-context",response)
                if(response.status === 200){

                    categoryDispatch({type: "LOAD_CATEGORY", payload: response.data.categories})
                }else{
                    throw new Error("Couldn't process the request ")
                }

            }catch(err){
                console.error(err)
            }
        })()

    },[])

    return <CategoryContext.Provider value={{categoryState, categoryDispatch}}>
        {children}
    </CategoryContext.Provider>
}

export {CategoryProvider, useCategory};