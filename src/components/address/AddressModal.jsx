import "./AddressModal.css";

const AddressModal = ({showAddressModal}) => {
  return (
    <>
    { showAddressModal ?
    (<div className="modal-background">
      <div className="modal-container address-modal">
        <div className="address-form">
          <h3 className="form-heading text-center">Add New Address</h3>

          <form>
            <input 
              type="text"
              placeholder="Enter your name.."
              name="name"
              required
            />
            <input
              type="text"
              placeholder="Enter house no, street or colony"
              name="content"
              required
            />
            <input type="text" placeholder="Enter City" name="city" required />
            <input
              type="text"
              placeholder="Enter State"
              name="state"
              required
            />
            <input
              type="text"
              placeholder="Enter Country"
              name="country"
              required
            />
            <input
              type="number"
              placeholder="Enter Zip Code"
              name="zipCode"
              required
            />
            <input
              type="number"
              placeholder="Enter Mobile Number"
              name="mobile"
              required
            />
            <div className="form-action-btns">
              <button
                className="btn btn-solid-primary action-btn save-btn"
               >
                Save
              </button>
              <button
                className="btn outline-btn-primary action-btn dummy-btn"

              >
                Dummy Address
              </button>
              <button
                className="btn outline-btn-primary action-btn cancel-btn"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>)
    : null}
    </>
  );
};

export { AddressModal };
