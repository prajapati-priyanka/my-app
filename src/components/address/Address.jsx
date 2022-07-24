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
          <h3>{item.name}</h3>
          <p>{item.street}</p>
          <p>
            {item.city},{item.state},{item.zipCode}{" "}
          </p>
          <p>{item.country}</p>
          <p>Mobile: {item.mobile}</p>
          <div className="address-action-btns">
            <button
              className="btn btn-solid-primary btn-edit"
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
