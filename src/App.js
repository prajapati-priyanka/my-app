import { Home, Product, Wishlist, Cart, Login, SignUp, SignOut, Profile } from "./pages";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RequiresAuth } from "./router/RequiresAuth";
import MockmanEs from "mockman-js";
import "./App.css";
import {useState} from "react";
import {AddressModal, Address, Logout} from "./components"

function App() {

  const [editAddress, setEditAddress] = useState(null);
  const [showAddressModal, setShowAddressModal] = useState(false);

  return (
    <div className="App">

{showAddressModal ? (
        <AddressModal
          editAddress={editAddress}
          setEditAddress={setEditAddress}
          showAddressModal={showAddressModal}
          setShowAddressModal={setShowAddressModal}
        />
      ) : null}

      <Routes>
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
        >
          <Route
            path="address"
            element={
              <Address
                setShowAddressModal={setShowAddressModal}
                setEditAddress={setEditAddress}
              />
            }
          />
          <Route
            path="logout"
            element={
              <Logout />
            }
          />
          </Route>
      </Routes>
    
        
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        theme={"colored"}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="toaster-container"
      />

 
    </div>
  );
}

export default App;
