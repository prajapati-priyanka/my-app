import "./Address.css";
import { GrAdd } from "react-icons/gr";
import { useAuth } from "../../context";

const Address = ({ setShowAddressModal }) => {
  const {
    authState: { token, addresses },
    authDispatch,
  } = useAuth();

  const updateAddress = (address) => {
    setEditAddress(address);
    setShowAddressModal(true);
  };

  useEffect(() => getAddressesHandler(token, authDispatch), []);

  const addNewAddress = () => {
    setShowAddressModal(true);
  };
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
              onClick={() => setShowAddressModal(true)}
            >
              Edit
            </button>
            <button className="btn btn-outline-primary btn-remove">
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
