import {Home} from "./pages/home/Home.jsx";
import {Product} from "./pages/product/Product.jsx";
import { Wishlist } from "./pages/wishlist/Wishlist.jsx";
import { Cart } from "./pages/cart/Cart.jsx";
import { Login } from "./pages/authentication/login/Login.jsx";
import { SignUp } from "./pages/authentication/signup/SignUp.jsx";
import { SignOut } from "./pages/authentication/signout/SignOut.jsx";


function App() {
  return (
    <div className="App">
     <Home />
     <Product />
     <Wishlist />
     <Cart />
     <Login />
     <SignUp />
     <SignOut />
    </div>
  );
}

export default App;
