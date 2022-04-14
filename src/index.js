import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider, WishListProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishListProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </WishListProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
