import { Home, Product, Wishlist, Cart, Login, SignUp, SignOut } from "./pages";
import { Routes, Route } from "react-router-dom";
import MockmanEs from "mockman-js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signout" element={<SignOut />} />
        <Route path="mock" element={<MockmanEs />} />
      </Routes>
    </div>
  );
}

export default App;
