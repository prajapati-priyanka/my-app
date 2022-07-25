import { useState, useEffect } from "react";
import "./AddressModal.css";
import {useAuth} from "../../context";
import {addNewAddressHandler, updateAddressHandler} from "../../utilities";
import { useNavigate } from "react-router-dom";

const AddressModal = ({ showAddressModal, setShowAddressModal, editAddress, setEditAddress }) => {
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
  });

  const {
    authState: { token },
    authDispatch,
  } = useAuth();

  const navigate = useNavigate()

  const dummyAddress = {
    name: "Guest User",
    street: "Flat No. 1D, MA Road, Rajendranagar",
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India",
    zipCode: "781003",
    mobile: "8839579485",
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
};

const checkInputs = () => {
  return address.name && address.street && address.city && address.state && address.country && address.zipCode && address.mobile;
}


const callAddNewAddressHandler = () => {
  if (checkInputs()) {
      if (token) {
          if (editAddress) {
              updateAddressHandler(address, token, authDispatch);
              setEditAddress(null);
          }
          else {
              addNewAddressHandler(address, authDispatch, token);
          }
          setShowAddressModal(false);
      }
      else {
          navigate("/login");
          // toast.warning("You're not logged in");
      }
  }
  else {
      // toast.warning("All the fields need to be entered")
  }
}
const checkEditAddress = ()=>{
  if(editAddress){
    setAddress(editAddress)
  }
}

useEffect(()=> checkEditAddress(), []);

  return (
    <>
      {showAddressModal ? (
        <div className="modal-background">
          <div className="modal-container address-modal">
            <div className="address-form">
              <h3 className="form-heading text-center">Add New Address</h3>

              <form>
                <input
                  type="text"
                  placeholder="Enter your name.."
                  name="name"
                  value={address.name}
                  onChange={changeHandler}
                  required
                />
                <input
                  type="text"
                  placeholder="Enter house no, street or colony"
                  name="street"
                  value={address.street}
                  onChange={changeHandler}
                  required
                />
                <input
                  type="text"
                  placeholder="Enter City"
                  name="city"
                  value={address.city}
                  onChange={changeHandler}
                  required
                />
                <input
                  type="text"
                  placeholder="Enter State"
                  name="state"
                  value={address.state}
                  onChange={changeHandler}
                  required
                />
                <input
                  type="text"
                  placeholder="Enter Country"
                  name="country"
                  value={address.country}
                  onChange={changeHandler}
                  required
                />
                <input
                  type="number"
                  placeholder="Enter Zip Code"
                  name="zipCode"
                  value={address.zipCode}
                  onChange={changeHandler}
                  required
                />
                <input
                  type="number"
                  placeholder="Enter Mobile Number"
                  name="mobile"
                  value={address.mobile}
                  onChange={changeHandler}
                  required
                />
                <div className="form-action-btns">
                  <button className="btn btn-primary action-btn save-btn" onClick={callAddNewAddressHandler}>
                    Save
                  </button>
                  <button className="btn btn-outline-primary action-btn dummy-btn" onClick={()=> setAddress(dummyAddress)}>
                    Dummy Address
                  </button>
                  <button className="btn btn-outline-primary action-btn cancel-btn" onClick={()=>setShowAddressModal(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export { AddressModal };
