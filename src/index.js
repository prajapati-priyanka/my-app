import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CategoryProvider, ProductProvider , WishListProvider } from "./context";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <WishListProvider>
      <CategoryProvider>
    <ProductProvider>
        <App />
      </ProductProvider>
      </CategoryProvider>
    </WishListProvider>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
