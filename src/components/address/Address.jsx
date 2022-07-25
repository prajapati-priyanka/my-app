import "./Address.css";
import { GrAdd } from "react-icons/gr";
import { useAuth } from "../../context";
import { useEffect } from "react";
import { getAddressesHandler, removeAddressHandler } from "../../utilities";


const Address = ({ setShowAddressModal, setEditAddress }) => {
  const {
    authState: { token, addresses },
    authDispatch,
  } = useAuth();

  const updateAddress = (address) => {
    setEditAddress(address);
    setShowAddressModal(true);
  };

  const addNewAddress = () => {
    setEditAddress(null);
    setShowAddressModal(true);
}

  useEffect(() => getAddressesHandler(token, authDispatch), []);


  return (
    <>
    {addresses ? (  <div className="address-container">
      {addresses.map((item) => (
        <div className="address" key={item._id}>
          <h4 className="lg-text">{item.name}</h4>
          <p className="user-details">{item.street}</p>
          <p className="user-details">
            {item.city},{item.state},{item.zipCode}{" "}
          </p>
          <p className="user-details">{item.country}</p>
          <p className="user-details">Mobile: {item.mobile}</p>
          <div className="address-action-btns">
            <button
              className="btn btn-primary btn-edit "
              onClick={() => updateAddress(item)}
            >
              Edit
            </button>
            <button className="btn btn-outline-primary btn-remove"   onClick={() => removeAddressHandler(item._id, token, authDispatch)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <button className="btn new-address-btn md-text" onClick={addNewAddress}>
        <GrAdd />
        Add New Address
      </button>
    </div>): null}
  
    </>
  );
};

export { Address };
