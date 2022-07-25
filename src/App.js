import { Home, Product, Wishlist, Cart, Login, SignUp, SignOut, Profile } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { RequiresAuth } from "./router/RequiresAuth";
import MockmanEs from "mockman-js";
import "./App.css";

function App() {
  return (
    <div className="App">
      /* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signout" element={<SignOut />} />
        <Route path="mock" element={<MockmanEs />} />
        <Route
          path="/cart"
          element={<RequiresAuth children={<Cart />}></RequiresAuth>}
        />
        <Route
          path="/wishlist"
          element={<RequiresAuth children={<Wishlist />}></RequiresAuth>}
        />
        <Route
          path="/profile"
          element={<RequiresAuth children={<Profile />}></RequiresAuth>}
        />
      </Routes>
      <Toaster
        position="bottom-right"
        toastOptions={{ className: "showToast", duration: 3000 }}
      /> */

 
    </div>
  );
}

export default App;
